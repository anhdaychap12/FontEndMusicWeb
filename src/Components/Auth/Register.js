import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Link} from "react-router-dom";
import './Register.scss'
import _ from 'lodash';

const Register = () => {
    const [showPass,setShowPass] = useState(false)

    const handleShow = () => {
        setShowPass(!showPass)
    }

    const dataDefault = {
        username: '',
        email: '',
        phone: '',
        password: ''
    }

    const checkDefault = {
        username: true,
        email: true,
        phone: true,
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

    const submitRegister = async () => {
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
        let arr = ['username','email','phone','password']
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
          <div className='register'>
                <div className='login-form'>
                    <div className='container'>
                        <Link to="/" className="home"><i class="fa-solid fa-house"></i></Link>
                        <div className='form-group'>
                            <h2>Register</h2>
                        </div>
                        <div className='row'>
                            <div className='form-group col-12 col-sm-6'>
                                <label htmlFor='username'>Username:</label>
                                <input value={data.username} className={checkInput.username ? "": "invalid"} onChange={(event)=>ChangeInput(event.target.value,'username')} type='text' id="username"/>
                            </div>
                            <div className='form-group col-12 col-sm-6'>
                                <label htmlFor='email'>Email:</label>
                                <input value={data.email} className={checkInput.email ? "": "invalid"} onChange={(event)=>ChangeInput(event.target.value,'email')} type='email' id="email"/>
                            </div>
                            <div className='form-group col-12 col-sm-6'>
                                <label htmlFor='phone'>Phone:</label>
                                <input value={data.phone} className={checkInput.phone ? "": "invalid"} onChange={(event)=>ChangeInput(event.target.value,'phone')} type='number' id="phone"/>
                            </div>
                            <div className='form-group col-12 col-sm-6'>
                                <label htmlFor='password'>Password:</label>
                                <input value={data.password} className={checkInput.password ? "": "invalid"} onChange={(event)=>ChangeInput(event.target.value,'password')} type={showPass === true ? 'text' : 'password'} id="password"/>
                                <i onClick={()=>handleShow()} className={showPass === true ? "fa-solid fa-eye-slash show-pass" :"fa-solid fa-eye show-pass"}></i>
                            </div>
                        </div>
                        <div className='form-group'>
                            <div className='d-flex justify-content-end align-items-center'>
                                <Link to="/login">Login</Link>
                            </div>
                        </div>
                        <div className='form-group'>
                            <button onClick={()=>submitRegister()}>Register</button>
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

export default Register;