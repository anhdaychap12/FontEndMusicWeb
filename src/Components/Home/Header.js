import { Link, NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.scss';
import logo from '../../Assets/Img/logo.png';
import { useEffect, useState } from 'react';
import banner1 from '../../Assets/Img/slide1.png'
import banner2 from '../../Assets/Img/slide2.png'
import banner3 from '../../Assets/Img/slide3.png'
import fetchingApi from "../../Service/service";
const Header = () => {
    const [keyword, setKeyword] = useState("");
    const [rsSongSearch, setRsSongSearch] = useState([]);
    const [rsArtistSearch, setRsArtistSearch] = useState([]);

    const fetchingDataSearch = async () => {
        try {
            const response = await fetchingApi.getRsSearch(keyword);
            setRsSongSearch(response.data.songs);
            setRsArtistSearch(response.data.artists);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        if (keyword !== "") {
            fetchingDataSearch();
        } else {
            setRsSongSearch([]);
        }
    }, [keyword])


    const handleSearchChange = (event) => {
        setKeyword(event.target.value);
    }



    // useEffect(() => {
    //     actionSearch();
    // })

    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="right">
                            <img src="" />
                        </div>
                        <div className="left">
                            <div className="up d-flex justify-content-end align-items-center">
                                <div className="search">
                                    <select>
                                        <option>Song</option>
                                        <option>Artist</option>
                                        <option>Album</option>
                                    </select>
                                    <input type="text" placeholder="Search"
                                        value={keyword}
                                        onChange={handleSearchChange}
                                    />
                                    <button><i className="fas fa-search"></i></button>
                                    <div className="result">
                                        <ul>
                                            {(rsSongSearch.length > 0) ? rsSongSearch.map((item, index) => {
                                                return (
                                                    <li key={index}>
                                                        <Link to="#" className="result-item">
                                                            <div className="result-img">
                                                                <img src={item.avatar} />
                                                            </div>
                                                            <div className="result-text">
                                                                <h4>{item.title}</h4>
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
                                                            </div>
                                                        </Link>
                                                    </li>
                                                )
                                            })
                                            :
                                            () => {
                                                return (<li className="text-white text-center"><h4>No result ...!</h4></li>)
                                            }
                                            }
                                            
                                        </ul>
                                    </div>
                                </div>
                                <Link to="/login"><i className="fa-solid fa-user"></i> Login</Link>
                            </div>
                            <div className="down">
                                <ul className="d-flex align-items-center justify-content-between">
                                    <li>
                                        <NavLink to="/" exact>Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/News">News</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/Blogs">Blogs</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/Contact">Contact</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/About">About</NavLink>
                                    </li>
                                    <li>
                                        <button><i class="fa-solid fa-ticket"></i> Tickets</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;