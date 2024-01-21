import './News.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { useState, useEffect } from 'react';
import { Link} from "react-router-dom";
import new1 from '../../../Assets/Img/news1.jpg';
import new2 from '../../../Assets/Img/news2.jpg';
import new3 from '../../../Assets/Img/news3.jpg';

const News = (props) => {
    return(
        <div className="news">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1><i class="fa-solid fa-radio"></i> Latest News</h1>
                    </div>
                    <div className='col-12'>
                        <hr/>
                    </div>
                </div>
            </div>
            <div className='list-slide'>
                <Slider ref={props.slider} {...props.settings}>
                <div className='item-slide'>
                    <div className='news-item' style={{ backgroundImage:`url(${new1})` }}>
                            <div className='new-date'>
                                <h2><span>NOV</span> 25</h2>
                                <h1>2017</h1>
                            </div>
                            <div className='new-content'>
                                <h2>The Witch Queen</h2>
                                <p>Witch Queen is a tall woman with a slim build. She has pink hair, which is pulled up under her hat, and teal eyes.</p>
                            </div>
                            <Link to="#">Read More</Link>
                    </div>
                </div>
                <div className='item-slide'>
                    <div className='news-item' style={{ backgroundImage:`url(${new2})` }}>
                            <div className='new-date'>
                                <h2><span>NOV</span> 25</h2>
                                <h1>2017</h1>
                            </div>
                            <div className='new-content'>
                                <h2>The Witch Queen</h2>
                                <p>Witch Queen is a tall woman with a slim build. She has pink hair, which is pulled up under her hat, and teal eyes.</p>
                            </div>
                            <Link to="#">Read More</Link>
                    </div>
                </div>
                <div className='item-slide'>
                    <div className='news-item' style={{ backgroundImage:`url(${new3})` }}>
                            <div className='new-date'>
                                <h2><span>NOV</span> 25</h2>
                                <h1>2017</h1>
                            </div>
                            <div className='new-content'>
                                <h2>The Witch Queen</h2>
                                <p>Witch Queen is a tall woman with a slim build. She has pink hair, which is pulled up under her hat, and teal eyes.</p>
                            </div>
                            <Link to="#">Read More</Link>
                    </div>
                </div>
                </Slider>
            </div> 
        </div>
    )
}

export default News;