import Footer from "./Footer";
import Header from "./Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Index.scss';
import React from "react";
import { useState, useEffect } from 'react';
import cast1 from '../../Assets/Img/cast4.png'
import cast2 from '../../Assets/Img/cast5.png'
import cast3 from '../../Assets/Img/cast6.png'
import cast4 from '../../Assets/Img/cast7.png'
import banner1 from '../../Assets/Img/slide1.png'
import banner2 from '../../Assets/Img/slide2.png'
import banner3 from '../../Assets/Img/slide3.png'
import { Link } from "react-router-dom";
import Spotlight from "./Section/Spotlight";
import Video from "./Section/Video";
import News from "./Section/News";
import fetchingApi from "../../Service/service";

const Home = () => {
  const [listTopSong, setListTopSong] = useState([]);

  const slider = React.useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: null,
    nextArrow: null,
    centerMode: true,
    centerPadding: '15%',
    responsive: [
      {
        breakpoint: 768,
      }
    ]
  };

  const [setting, setSetting] = useState(settings);

  const fetchTopSong = async () => {
    try {
      const response = await fetchingApi.getSong();
      setListTopSong(response.data.list_song);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchTopSong();
  }, [])
  // fetchTopSong();
  return (
    <>
      <div className="index">
        <Header />
        <div className="banner">
          <div className='list-slide'>
            <Slider ref={slider} {...settings}>
              {listTopSong && listTopSong.length > 0 && listTopSong.map((item, index) => {
                return (
                  <div className="item-slide" key={index}>
                    <div className="row banner-slide">
                      <div className="item-img col-lg-7 col-md-5">
                        <img src={item.avatar} />
                      </div>
                      <div className="item-text col-lg-7 col-md-5">
                        <h2>{item.title}</h2>
                        <div className="review d-flex justify-content-start align-items-center">
                          <ul className="stars">
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                          </ul>
                          <p>500k voters</p>
                        </div>
                        <p>She is a devil princess from the demon world. She grew up sheltered by her parents and doesn't really know how to be evil or any of the common actions,   She is unable to cry due to Keita's accidental first wish, despite needed for him to wish...</p>
                        <div className="cast">
                          <h3>Artist</h3>
                          <ul className="cast-list">
                            <li><Link to={`/artist/${item.artist.artistId}`}><img src={item.artist.avatar} /></Link></li>
                          </ul>
                        </div>
                        <div className="ticket d-flex justify-content-between align-items-center">
                          <h3>Action</h3>
                          <button>Play</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </Slider>
          </div>
        </div>
        <Spotlight listTopSong = {listTopSong}/>
        <Video />
        <News slider={slider} settings={settings} />
        <Footer />
      </div>
    </>
  )
}

export default Home;