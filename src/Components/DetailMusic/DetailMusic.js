import Header from "../Home/Header";
import Footer from "../Home/Footer";
import sideBar1 from '../../Assets/Img/sidebar1.png';
import { Link } from "react-router-dom";
import './DetailMusic.scss';
import cast1 from '../../Assets/Img/cast4.png'
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useState, useEffect, useRef, useCallback } from 'react';
import fetchingApi from "../../Service/service";
import ReactAudioPlayer from "react-audio-player";

const DetailMusic = () => {
    const [timeProgress, setTimeProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [song, setSong] = useState({});
    const [playingMusic, setPlayingMusic] = useState(false);



    const { id } = useParams();
    const fetchingData = async () => {
        try {
            let response = await fetchingApi.getSongById(id);
            setSong(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchingData();
    }, [])

    const togglePlayPause = (() => {
        setPlayingMusic((prev) => !prev);
    })

    const handleProgressChange = () => {
        audioRef.current.currentTime = progressBarRef.current.value;
    }

    const audioRef = useRef();
    const progressBarRef = useRef();
    const playAnimationRef = useRef();

    const repeat = useCallback(
        () => {
            const currentTime = audioRef.current.currentTime;
            setTimeProgress(currentTime);
            progressBarRef.current.value = currentTime;
            progressBarRef.current.style.setProperty(
                '--range-progress',
                `${(progressBarRef.current.value / duration) * 100}%`
            );
            playAnimationRef.current = requestAnimationFrame(repeat);
        }, [audioRef, duration, progressBarRef, setTimeProgress]
    )

    useEffect(() => {
        if (playingMusic) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
        playAnimationRef.current = requestAnimationFrame(repeat);
    }, [playingMusic, audioRef, repeat])

    // formate time
    const formatTime = (time) => {
        if (time && !isNaN(time)) {
            const minutes = Math.floor(time / 60);
            const formatMinutes =
                minutes < 10 ? `0${minutes}` : `${minutes}`;
            const seconds = Math.floor(time % 60);
            const formatSeconds =
                seconds < 10 ? `0${seconds}` : `${seconds}`;
            return `${formatMinutes}:${formatSeconds}`;
        }
        return '00:00';
    };

    const onLoadedMetadata = () => {
        const seconds = audioRef.current.duration;
        setDuration(seconds);
        progressBarRef.current.max = seconds;
    };

    return (
        <>

            <div className="index">
                <Header />
                <div className="detail-music">
                    {/* Content */}
                    <div className="music-title">
                        <div className="container">
                            <div className="row">
                                <div className=" col-12 col-sm-3">
                                    <div className="title-img">
                                        <img src={song.avatar} />
                                    </div>
                                </div>
                                <div className="col-12 col-sm-9">
                                    <div className="title-text">
                                        <p>Song</p>
                                        <h1>{song.title}</h1>
                                        <span><img src={song.artist && song.artist.avatar} /> <Link to="#">{song.artist && song.artist.name}</Link></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="music-content">
                        <div className="container">
                            <div className="top-content">
                                <button className="play" onClick={togglePlayPause}>

                                    <i className={(!playingMusic) ? "fa-solid fa-play" : "fa-solid fa-pause"}></i>

                                </button>
                                <button className="favorite"><i className="fa-regular fa-heart"></i></button>
                                <button className="setting"><i className="fa-solid fa-ellipsis"></i></button>
                            </div>
                            <div className="bottom-content">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 col-sm-6">
                                            <div className="lyric">
                                                <h4>Song lyric</h4>
                                                <p>lyric</p>
                                                <audio
                                                    src={song.urlMusic}
                                                    // controls 
                                                    ref={audioRef}
                                                    onLoadedMetadata={onLoadedMetadata}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <div className="info">
                                                <img src={song.artist && song.artist.avatar} />
                                                <div className="info-text">
                                                    <p>Artist</p>
                                                    <Link to="#"><h4>{song.artist && song.artist.name}</h4></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Control and seekbar */}
                    <div className="music-option">
                        <div className="row">
                            <div className="col-12 col-sm-4">
                                <div className="item-music">
                                    <div className="item-img">
                                        <img src={song.avatar} />
                                    </div>
                                    <div className="item-text">
                                        <h4><Link to="#">{song.title}</Link></h4>
                                        <p><Link to="#">{song.artist && song.artist.name}</Link></p>
                                    </div>
                                    <button className="favorite"><i className="fa-regular fa-heart"></i></button>
                                </div>
                            </div>
                            <div className="col-12 col-sm-4">
                                <div className="manage-music">
                                    {/* control */}
                                    <div className="manage-method">
                                        <ul>
                                            <li>
                                                <button className="btn-small"><i className="fa-solid fa-shuffle"></i></button>
                                            </li>
                                            <li>
                                                <button className="btn-small"><i className="fa-solid fa-backward-step"></i></button>
                                            </li>
                                            <li>
                                                <button className="btn-big" onClick={togglePlayPause}><i className={(!playingMusic) ? "fa-solid fa-play" : "fa-solid fa-pause"}></i></button>
                                            </li>
                                            <li>
                                                <button className="btn-small"><i className="fa-solid fa-forward-step"></i></button>
                                            </li>
                                            <li>
                                                <button className="btn-small"><i className="fa-solid fa-shuffle"></i></button>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* seekbar */}
                                    <div className="audio-music">
                                        <p>{formatTime(timeProgress)}</p>
                                        <div className="bar-wrap">
                                            <div className="progress_bar">
                                                <div className="progressed">
                                                </div>
                                            </div>
                                        </div>
                                        {/* <input
                                            type='range'
                                            defaultValue="0"
                                            ref={progressBarRef}
                                            onChange={handleProgressChange}
                                            className='range' /> */}
                                        <p>{formatTime(duration)}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-4">
                                <div className="setting-music">
                                    <ul>
                                        <li>
                                            <button><i className="fa-brands fa-youtube"></i></button>
                                        </li>
                                        <li>
                                            <button><i className="fa-solid fa-microphone"></i></button>
                                        </li>
                                        <li>
                                            <button><i className="fa-solid fa-bars"></i></button>
                                        </li>
                                        <li>
                                            <button><i className="fa-solid fa-house-signal"></i></button>
                                        </li>
                                        <li>
                                            <button><i className="fa-solid fa-volume-high"></i></button>
                                        </li>
                                        <li>
                                            <div className="volume">
                                                <input
                                                    type='range'
                                                    //  ref={progressBarRef}
                                                    defaultValue="0"
                                                //  onChange={handleProgressChange}
                                                />
                                            </div>
                                        </li>
                                        <li>
                                            <button><i className="fa-solid fa-clone"></i></button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
}

export default DetailMusic;