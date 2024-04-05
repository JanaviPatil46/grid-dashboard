import React, { useState } from "react";
import './adminlogin.css'
import logo from '../img/logoAdmin.png'
import { useFormik } from "formik";
import { basicSchema } from "./schemas";
import { Formik, Field } from 'formik';
import { Link } from 'react-router-dom';
import { FaFacebook, FaWeebly, FaInstagramSquare, FaLinkedin, FaTwitter, FaEye, FaEyeSlash } from "react-icons/fa";
import GooglePlayStore from '../img/GooglePlayStore.svg';
import AppStore from '../img/AppStore.png'
const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};
const AdminLogin = () => {
  const [darkMode, setDarkMode] = useState(false); // State for dark mode

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const [passShow, setPassShow] = useState(false);
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",

    },
    validationSchema: basicSchema,
    onSubmit,
  });

  console.log(errors);

  return (
    <>
      <div className={darkMode ? 'dark-mode' : ''}>
        <div className='adminlogin-container'>
          <div className='company-info'>
            <div className='intro'>
              <div className="logo">
                <img src={logo} alt="" />
              </div>
            </div>
            <h2>Welcome Back !</h2>
            <h5>"Welcome to "SNP Tax & Financials", where tax management meets simplicity. Our advanced software streamlines tax processes for individuals, businesses, and professionals, ensuring accuracy and efficiency. Experience a new era of financial ease with SNP Tax & Financials."</h5>
            <p>"Please log in to access your account."</p>
            <div className="social-icons">
              <FaTwitter className="sicon" />
              <FaFacebook className="sicon" />
              <FaLinkedin className="sicon" />
              <FaWeebly className="sicon" />
              <FaInstagramSquare className="sicon" />
            </div>
            <div className="toggle-container">
        <button onClick={toggleDarkMode} className="toggle-button">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
          </div>
          <div className='login-container' >
            <form onSubmit={handleSubmit} autoComplete="off" className='login-form'>
              <h2>Login Account</h2>
              <label htmlFor="email">Email</label>
              <input
                value={values.email}
                onChange={handleChange}
                id="email"
                type="email"
                placeholder="Enter your email"
                onBlur={handleBlur}
                className={errors.email && touched.email ? "input-error" : ""}
              />
              {errors.email && touched.email && <p className="error">{errors.email}</p>}


              {errors.age && touched.age && <p className="error">{errors.age}</p>}
              <label htmlFor="password">Password</label>
              <div className="two">
                <input
                  id="password"
                  type={passShow ? "text" : "password"}
                  placeholder="Enter your password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.password && touched.password ? "input-error" : ""}
                />
                <div className="showpass" onClick={() => setPassShow(!passShow)}>
                  {!passShow ? <FaEyeSlash  className="eye-icon"/> : <FaEye className="eye-icon"/>}
                </div>
              </div>
              {errors.password && touched.password && (
                <p className="error">{errors.password}</p>
              )}

              <p className="forgot-password-link">
                <Link to="/forgot-password" className="pass-link" style={{ textDecoration: 'none', fontWeight: 'bold', fontFamily: 'Isidora', cursor: 'pointer' }}>Forgot Password?</Link>
              </p>
              <label>Stay signed in for</label>
              <div>
                {/* <Select options={expiryTime}  value={inpval.expiryTime} onChange={setVal}   /> */}
                <Formik
                  initialValues={{ expiryTime: '30min' }} // Set initial value here
                  onSubmit={(values) => {
                    // Handle form submission
                  }}
                >
                  <Field as="select" name="expiryTime">
                    <option value="30min">30 minutes</option>
                    <option value="4hours">4 hours</option>
                    <option value="8hours">8 hours</option>
                  </Field>
                </Formik>
              </div>
              <button disabled={isSubmitting} type="submit" className="login-form-btn">
                Login
              </button>
              <p>
                Don't have a PMS solutions client portal Account ?
              </p>
              <p className="sign-in-link" style={{ marginLeft: '30%', }}>
                <Link to="/signup" className="link">Sign Up</Link>
              </p>
              <h6 style={{ marginBottom: "15px", fontSize: '0.8rem' }}>For the optimal mobile client exprience - get the app</h6>
              <div className="storeBtn" style={{ display: "flex", marginLeft: "-18px" }}>
                <div className="playstore">
                  <Link to="https://play.google.com/store/apps/details?id=com.linkedin.android&hl=en_IN&gl=US">
                    <img style={{ width: "190px" }} src={GooglePlayStore} alt="Logo" />
                  </Link>
                </div>
                <div className="appstore">
                  <div className="storeBtn">
                    <Link to="https://apps.apple.com/us/app/linkedin-network-job-finder/id288429040">
                      <img style={{ width: "150px", marginTop: "-7px" }} src={AppStore} alt="Logo" />
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        
      </div>
      
    </>
  )
}

export default AdminLogin