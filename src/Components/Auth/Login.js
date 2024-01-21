import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Link} from "react-router-dom";
import './Login.scss'
import logo from '../../Assets/Img/logo.png';
import _ from 'lodash';

const Login = () => {
    const [showPass,setShowPass] = useState(false)

    const handleShow = () => {
        setShowPass(!showPass)
    }

    const dataDefault = {
        username: '',
        password: ''
    }

    const checkDefault = {
        username: true,
        password: true
    }

    const [data,setData] = useState(dataDefault)
    const [checkInput,setCheckInput] = useState(checkDefault)

    const ChangeInput = (value,name) => {
        let _data = _.cloneDeep(data)
        _data[name]=value
        setData(_data)
        setCheckInput(checkDefault)
    }

    const submitLogin = async () => {
        let check = validate()
        if(check === true) {
            console.log("Login success ",data)
            toast.success("Login success")
            setData(dataDefault)
        }
    }

    const validate = () => {
        setCheckInput(checkDefault)
        let check = true
        let arr = ['username','password']
        for(let i = 0; i < arr.length; i++ ) {
            if(!data[arr[i]]) {
                let _checkInput = _.cloneDeep(checkDefault)
                _checkInput[arr[i]] = false
                setCheckInput(_checkInput)
                check = false
                toast.error(`Invalid ${arr[i]}`)
                break
            }
        }
        return check
    }

    return(
        <>
          <div className='login'>
                <div className='login-form'>
                    <div className='container'>
                        <Link to="/" className="home"><i class="fa-solid fa-house"></i></Link>
                        <div className='form-group'>
                            <h2>Login</h2>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='username'>Username:</label>
                            <input value={data.username} className={checkInput.username ? "": "invalid"} onChange={(event)=>ChangeInput(event.target.value,'username')} type='text' id="username"/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>Password:</label>
                            <input value={data.password} className={checkInput.password ? "": "invalid"} onChange={(event)=>ChangeInput(event.target.value,'password')} type={showPass === true ? 'text' : 'password'} id="password"/>
                            <i onClick={()=>handleShow()} className={showPass === true ? "fa-solid fa-eye-slash show-pass" :"fa-solid fa-eye show-pass"}></i>
                        </div>
                        <div className='form-group'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <Link to="#">Forgot ?</Link>
                                <Link to="/register">Register</Link>
                            </div>
                        </div>
                        <div className='form-group'>
                            <button onClick={()=>submitLogin()}>Login</button>
                        </div>
                        <div className='form-group'>
                            <p>Via Social</p>
                            <ul>
                                <li>
                                    <Link to="#" className="fb"><i class="fa-brands fa-facebook-f"></i></Link>
                                </li>
                                <li>
                                    <Link to="#" className="tw"><i class="fa-brands fa-twitter"></i></Link>
                                </li>
                                <li>
                                    <Link to="#" className="gg"><i class="fa-brands fa-google"></i></Link>
                                </li>
                                <li>
                                    <Link to="#" className="lk"><i class="fa-brands fa-linkedin-in"></i></Link>
                                </li>
                                <li>
                                    <Link to="#" className="in"><i class="fa-brands fa-instagram"></i></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
          </div>  
        </>
    )
}

export default Login;