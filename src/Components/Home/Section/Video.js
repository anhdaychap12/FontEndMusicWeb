import './Video.scss';
import { Link } from "react-router-dom";
import video1 from '../../../Assets/Img/video1.png'
import video2 from '../../../Assets/Img/video2.png'
import video3 from '../../../Assets/Img/video3.png'
import fetchData from '../../../Service/service';
import { useEffect, useState } from 'react';

const Video = () => {
    const [listTopArtist, setListTopArtist] = useState([]);

    const fetchTopArtist = async () => {
        try {
            const response = await fetchData.getArtist();
            setListTopArtist(response.data.listArtist);
            console.log("success");
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchTopArtist();
    }, [])
    return (
        <div className="video">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1><i class="fa-solid fa-headphones"></i> Top Artist</h1>
                    </div>
                    <div className='col-12'>
                        <hr />
                    </div>

                    <div className="col-lg-12">
                        <div className='row'>
                            {listTopArtist && listTopArtist.length > 0 && listTopArtist.map((item, index) => {
                                return (
                                    <div className='col-md-3 col-sm-6' key={index}>
                                        <div className='video-item'>
                                            <div className='video-img'>
                                                <img src={item.avatar} />
                                                <Link to={`/artist/${item.id}`}><i className="fa-solid fa-circle-play"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video;