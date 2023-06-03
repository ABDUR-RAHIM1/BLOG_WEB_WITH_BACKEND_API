import React from 'react'
import { useState } from 'react'
import '../StyleComponent/userContainer.css'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { loggedInContext } from '../App';
import "../StyleComponent/Responsive.css"

function User() {
    const navigate = useNavigate();
    const [regMessage, setRegMessage] = useState('')
    const [message, setMessage] = useState("")
    const [form, setForm] = useState(false)
    const [isDesable, setIsDesable] = useState(false)
    const [login, setLogin] = useContext(loggedInContext)
    const [register, setRegister] = useState({
        username: '',
        email: "",
        password: ''
    })
    // Checkbox
    const handleForm = () => {
        setForm(!form)
    }


    const handleRegister = (e) => {
        setRegister({ ...register, [e.target.name]: e.target.value })
    }

    const handleResisterSubmit = (e) => {
        setIsDesable(true);
        fetch('http://localhost:5000/auth/register', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(register)
        })
            .then(res => res.json())
            .then(res => {
                setRegMessage(res.message)
            })
            .catch(err => console.log(err))
        alert("Register SuccessFull")
        e.preventDefault()

    }


    //  handle  login user 
    const handleLogin = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value })
    }

    const handleLoginSubmit = (e) => {
        setIsDesable(true);
        fetch('http://localhost:5000/auth/login', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(login)
        })
            .then(res => res.json())
            .then(res => {
                if (res.message === "Logged in successfully") {
                    setMessage(res.message)
                    navigate('/create')
                } else {
                    setMessage(res.message)
                }
            })
            .catch(err => {
                setMessage(err.message)
            })
        e.preventDefault()

    }
    return (
        <>
            <div className="userContainer">
                {/* Checkbox */}
                <div className='checBoxContainer'>
                    <input
                        onChange={handleForm}
                        className="form-check-input"
                        type="checkbox"
                        id="checkBox"
                        aria-label="..."
                    />
                    <label className='lable' htmlFor="checkBox">Register/ Sign in</label>
                </div>
                {/* Checkbox */}

                {form ?
                    (
                        <div className="registerForm">
                            <h3 className='text-primary'>Register Now</h3>
                            <form onSubmit={handleResisterSubmit}>
                                <input
                                    onChange={handleRegister}
                                    className='form-control my-3'
                                    type="text"
                                    name='username'
                                    placeholder='Username'
                                />
                                <input
                                    onChange={handleRegister}
                                    className='form-control my-3'
                                    required
                                    type="email"
                                    name='email'
                                    placeholder='Email'
                                />
                                <input
                                    onChange={handleRegister}
                                    className='form-control my-3'
                                    required
                                    type="password"
                                    name='password'
                                    placeholder='Password'
                                />
                                <button disabled={isDesable} className='btn btn-primary'>Register</button>
                            </form>
                        </div>
                    ) : (
                        /* Login form */
                        <div className="loginForm">
                            <h3 className='text-primary'>Sign In</h3>
                            <form onSubmit={handleLoginSubmit}>
                                <input
                                    onChange={handleLogin}
                                    className='form-control my-3'
                                    required
                                    type="email"
                                    name='email'
                                    placeholder='Email'
                                />
                                <input
                                    onChange={handleLogin}
                                    className='form-control my-3'
                                    required
                                    type="password"
                                    name='password'
                                    placeholder='Password'
                                />
                                <button disabled={isDesable} className='btn btn-primary'>Sign In</button>
                            </form>
                        </div>
                    )
                }
                <div className="message my-3 text-center">
                    {
                        message.length < 24 ? <h6 className='text-success'>{message}</h6> :
                            <h6 className="text-danger">{message}</h6>
                    }
                    <h6 className='text-center text-success'>{regMessage}</h6>

                </div>
            </div>
        </>
    )
}

export default User