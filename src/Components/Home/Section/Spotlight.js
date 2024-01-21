import './Spotlight.scss';
import spotlight1 from '../../../Assets/Img/portfolio1.png'
import spotlight2 from '../../../Assets/Img/portfolio2.png'
import spotlight3 from '../../../Assets/Img/portfolio3.png'
import spotlight4 from '../../../Assets/Img/portfolio4.png'
import spotlight5 from '../../../Assets/Img/portfolio5.png'
import spotlight6 from '../../../Assets/Img/portfolio6.png'
import sidebar1 from '../../../Assets/Img/sidebar1.png'
import sidebar2 from '../../../Assets/Img/sidebar2.png'
import sidebar3 from '../../../Assets/Img/sidebar3.png'
import sidebar4 from '../../../Assets/Img/sidebar4.png'

import getSong from '../../../Service/service';

import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

const Spotlight = (props) => {
    const listTopSong = props.listTopSong;

    return (
        <div className="spotlight">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h1><i className="fa-solid fa-music"></i> Top Song</h1>
                    </div>
                    <div className="col-lg-6">
                        <ul className='list-spotlight'>
                            <li className='active'>Latest</li>
                            <li>Coming Soon</li>
                            <li>Top Rated</li>
                            <li>Recently Released</li>
                        </ul>
                    </div>
                    <div className='col-12'>
                        <hr />
                    </div>
                    <div className="col-lg-12">
                        <div className='row'>
                            {listTopSong && listTopSong.length > 0 && listTopSong.map((item, index) => {
                                return (
                                    <div className="col-lg-4" key={index}>
                                        <div className='item-spotlight'>
                                            <div className='item-img'>
                                                <img src={item.avatar} />
                                                <Link to={`/music/${item.id}`}><i className="fa-solid fa-circle-play"></i></Link>
                                            </div>
                                            <div className='item-text'>
                                                <h2>{item.title}</h2>
                                                <div className="review d-flex justify-content-start align-items-center">
                                                    <ul className="stars">
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                    </ul>
                                                    <h4>500k voters</h4>
                                                </div>
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

export default Spotlight;