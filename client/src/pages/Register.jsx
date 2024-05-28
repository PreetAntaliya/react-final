import React, { useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form Submitted');
        console.log('Form Values:', { name, email, password, cpassword });

        try {

            const response = await axios.post('http://localhost:8000/v1/userAdd', {
                name,
                email,
                password,
                cpassword,
            });
            navigate('/')

            toast.success(response.data.message);
        } catch (error) {
            if (error.response && error.response.data && error.response.data.error) {
                toast.error(error.response.data.error);
            } else {
                toast.error(error.message);
            }
        }
        
    };

  return (
    <div>
      <Header />
      <ToastContainer />
      <section className="register-page">
        <div className="container">
          <div className="row">
            <div className="login-contain">
              <div className="col-xxl-12 d-flex align-items-center py-5">
                <div className="col-xxl-6 d-flex col-lg-6 d-flex justify-content-end d-xs-none d-sm-none d-md-none d-lg-flex">
                  <img src="assets/img/sign-up.png" className="img-fluid" alt="sign-up" />
                </div>
                <div className="col-xxl-6 col-xs-12 col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center">
                  <div className="col-xxl-8 d-flex justify-content-end">
                    <div className="login-container d-flex">
                      <div className="">
                        <h2>Welcome To Fastkart</h2>
                        <span>Create New Account</span>
                      </div>
                      <form onSubmit={handleSubmit}>
                        <div className="form-group">
                          <input
                            type="text"
                            id="text"
                            name="text"
                            placeholder="Full Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            id="cpassword"
                            name="cpassword"
                            placeholder="Confirm Password"
                            value={cpassword}
                            onChange={(e) => setCpassword(e.target.value)}
                            required
                          />
                        </div>
                        <div className="form-group d-flex align-items-center justify-content-between">
                          <div className="d-flex">
                            <input type="checkbox" id="remember" name="remember" />
                            <label htmlFor="remember">
                              I agree with <a href="#">terms</a> and <a href="#">Privacy</a>
                            </label>
                          </div>
                        </div>
                        <button type="submit" className="login-btn">
                          Sign Up
                        </button>
                      </form>
                      <h6>
                        <span>OR</span>
                      </h6>
                      <div className="options">
                        <button className="login-facebook">
                          <i className="ri-facebook-fill fb" />
                          Sign Up with Facebook
                        </button>
                        <button className="login-google">
                          <i className="ri-google-fill gl" />
                          Sign Up with Google
                        </button>
                      </div>
                      <h6 />
                      <div className="sign-up text-center">
                        <p>Already have an account?</p> <a href="login.html">Log In</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
