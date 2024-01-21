import { Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.scss';
import logo from '../../Assets/Img/logo.png';
import Dropdown from 'react-bootstrap/Dropdown';
const Footer = (props) => {
    let today = new Date()

    const ScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
    }

    return(
        <div className="footer">
            <div className="container">
            <div className="row">
                <div className="col-12 col-sm-3">
                    <div className="footer-item">
                        <img src={logo}/>
                        <p>7th Harley Place, London W1G 8LZ United Kingdom</p>
                        <h6>Call us: (+880) 111 222 3456</h6>
                    </div>
                </div>
                <div className="col-12 col-sm-3">
                    <div className="footer-item">
                        <h4>Legal</h4>
                        <ul>
                            <li>
                                <Link to="#">Terms of Use</Link>
                            </li>
                            <li>
                                <Link to="#">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to="#">Security</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-12 col-sm-3">
                    <div className="footer-item">
                        <h4>My Account</h4>
                        <ul>
                            <li>
                                <Link to="#">My Account</Link>
                            </li>
                            <li>
                                <Link to="#">Watchlist</Link>
                            </li>
                            <li>
                                <Link to="#">Collections</Link>
                            </li>
                            <li>
                                <Link to="#">User Guide</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-12 col-sm-3">
                <div className="footer-item">
                        <h4>Newsletter</h4>
                        <p>Subscribe to our newsletter system now to get latest news from us.</p>
                        <input placeholder="Enter your email"/>
                        <button>SUBSCRIBE NOW</button>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <p>Templates {today.getFullYear()}</p>
                        </div>
                        <div className="col-6">
                            <button onClick={()=>ScrollToTop()}>Back to top <i className="fa-solid fa-up-long"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Footer;  