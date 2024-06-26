import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { useAuth } from '../context/AuthContext'

const Login = () => {
    const navigate = useNavigate()
    const [auth, setAuth] = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('http://localhost:8000/v1/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            })
            
            const data = await response.json()
            if (!response.ok) {
                throw new Error(data.error || 'Login failed')
            }

            toast.success(data.message)
            const { token, user } = data
            localStorage.setItem('auth', JSON.stringify({ token, user }))
            setAuth({ token, user })

            if (user?.role === 'admin') {
                navigate('/category')
            } else {
                navigate('/')
            }
        } catch (error) {
            toast.error(error.message || 'Something went wrong')
        }
    }

    return (
        <div>
            <Header />
            <ToastContainer />
            <section className="login-page">
                <div className="container">
                    <div className="row">
                        <div className="login-contain">
                            <div className="col-xxl-12 d-flex  align-items-center py-5">
                                <div className="col-xxl-6 col-lg-6 d-flex justify-content-end d-xs-none d-sm-none d-md-none d-lg-flex">
                                    <img src="assets/img/log-in.png" className="img-fluid" alt="log-in" />
                                </div>
                                <div className="col-xxl-6 col-xs-12 col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center">
                                    <div className=" col-xxl-8 d-flex justify-content-end">
                                        <div className="login-container d-flex ">
                                            <div>
                                                <h2>Welcome To Fastkart</h2>
                                                <span>Log In Your Account</span>
                                            </div>
                                            <form onSubmit={handleSubmit}>
                                                <div className="form-group">
                                                    <input type="email" id="email" name="email" placeholder="Email address" onChange={(e) => setEmail(e.target.value)} required />
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" id="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                                                </div>
                                                <div className="form-group d-flex align-items-center justify-content-between">
                                                    <div className="d-flex">
                                                        <input type="checkbox" id="remember" name="remember" />
                                                        <label htmlFor="remember">Remember me</label>
                                                    </div>
                                                    <a href="Forgot-Password.html">Forgot Password?</a>
                                                </div>
                                                <button type="submit" className="login-btn">Login</button>
                                            </form>
                                            <h6><span>OR</span></h6>
                                            <div className="options">
                                                <a href="#"><button className="login-facebook"><i className="ri-facebook-fill fb" />Login with Facebook</button></a>
                                                <a href="#"><button className="login-google"><i className="ri-google-fill gl" />Login with Google</button></a>
                                            </div>
                                            <h6 />
                                            <div className="sign-up text-center">
                                                <p>Don't have an account?</p> <a href="#">Sign up</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Login
