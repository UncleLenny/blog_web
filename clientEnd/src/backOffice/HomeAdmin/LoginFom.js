import React, { useState } from 'react'
import logo from './images/mediumMainLogo.png'

function LoginFom({ Login, error }) {
    const [details, setDetails] = useState({name: "", email: "", password: ""});

    const submitHandler = (e) => {
        e.preventDefault();

        Login(details);
    }

  return (
    <div>
        <div className='LoginNav'>
            <img src={logo} alt="" />
        </div>
        <div className='hnflbh'>
            <div className='AdminLogin'>
                <h1>Admin Sign In</h1>
                <form className='form' onSubmit={submitHandler}>
                    <div className="form-login">
                        <span></span>
                        <input type="email" placeholder='Enter Your Email Address' name="name" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                    </div>

                    <div className='form-login'>
                        <span></span>
                        <input type="password" placeholder='Enter Your Password' name="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                    </div>

                    <p className='forgot'>Forget Password?</p>

                    <input className='check' type="checkbox" name="" id="" />Keep me signed in
                    <p className='privDev'>Check this box when using a private device.</p>

                    <input className='Signbutton' type="submit" value="Sign In" />
                </form>
            </div>
        </div>
      <div className='LoginFooter'>
            <ul>
                <li>Terms and Conditions</li>
                <li>Privacy Rights</li>
            </ul>
            <span>© 2023 Medium Corporation. All rights reserved.</span>
      </div>
    </div>
  )
}

export default LoginFom