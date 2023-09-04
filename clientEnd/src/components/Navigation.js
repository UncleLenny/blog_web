import React, { useContext, useState } from "react";
import { Await, Link, Navigate, useNavigate } from "react-router-dom";
import logo from "./images/mediumMainLogo.png";
import { BlogContext } from "./dataContext/BlogContext";

function Navigation() {
  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const submitHandler = () => {
    setOpenModal(false);
  };

  //   REGISTER

  const [showRegister, setShowRegister] = useState(false);

  const showRegisterHandler = () => {
    setShowRegister(true);
    setOpenModal(false);
  };

  const closeRegisterHandler = () => {
    setShowRegister(false);
    setOpenModal(true);
  };

  const permCloseRegister = () => {
    setShowRegister(false);
  };

  // const submitRegister = (ev) => {
  //   ev.preventDefault();
  //   // fetch('http://localhost:3030/createAccount', {
  //     //   method: 'POST',
  //     //   body: JSON.stringify({}),
  //     //   headers: {'Content-Type':'application/json'}
  //     // })
  //     // you are to do your registration form validation here
  //   };

  //// REGISTER
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo, userInfo } = useContext(BlogContext);

  async function createAccount(ev) {
    setShowRegister(false);
    ev.preventDefault();
    const response = await fetch("http://localhost:3030/api/createAccount", {
      method: "POST",
      body: JSON.stringify({ fullname, phone, email, username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    console.log({ fullname, phone, email, username, password });

    if (response.status === 200) {
      const data = await response.json();
      const accountId = data._id;
      console.log({ fullname, phone, email, username, password, accountId });
      alert("Registration Successful");

      LoginAccount(accountId);
    } else {
      console.log(response);
      alert("Failed to Register Account");
    }
  }

  const register = (
    <>
      <div className="backdrop" onClick={permCloseRegister}></div>
      <div className="modal">
        <div className="formSection">
          <div className="welcome">
            <h2>Welcome,</h2>
            <h5 className="ariam">
              To register, fill in your information for your account.
            </h5>
          </div>
          <div className="emailwarning">
            <Link onClick={closeRegisterHandler} className="emailwarning">
              Already have an account? Click here
            </Link>
          </div>

          <div className="container">
            <div className="formBox">
              <form
                className="form"
                action="login"
                method="post"
                onSubmit={createAccount}
              >
                <div className="form-group">
                  <label>Full Name</label>
                  <div className="input-group" id="show_hide_password">
                    <input
                      className="form-control"
                      placeholder="Fullname"
                      name="fullname"
                      type="text"
                      id="firstName"
                      value={fullname}
                      onChange={(ev) => setFullname(ev.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Username</label>
                  <div className="input-group" id="show_hide_password">
                    <input
                      className="form-control"
                      placeholder="Username"
                      name="username"
                      type="text"
                      id="username"
                      value={username}
                      onChange={(ev) => setUsername(ev.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <div className="input-group">
                    <input
                      className="form-control pwdlength"
                      placeholder="Phone Number"
                      name="phone"
                      type="text"
                      id="phone"
                      value={phone}
                      onChange={(ev) => setPhone(ev.target.value)}
                    />
                    <i className="bi bi-eye-slash" id="togglePassword"></i>
                  </div>
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <div className="input-group">
                    <input
                      className="form-control pwdlength"
                      placeholder="Email Address"
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(ev) => setEmail(ev.target.value)}
                    />
                    <i className="bi bi-eye-slash" id="togglePassword"></i>
                  </div>
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <div className="input-group">
                    <input
                      className="form-control pwdlength"
                      placeholder="New Password"
                      type="password"
                      name="password"
                      id="password"
                      value={password}
                      onChange={(ev) => setPassword(ev.target.value)}
                    />
                    <i className="bi bi-eye-slash" id="togglePassword"></i>
                  </div>
                </div>
                <button className="signInbtn">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  // LOGIN

  async function LoginAccount(ev) {
    setOpenModal(false);
    ev.preventDefault();

    const response = await fetch("http://localhost:3030/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    if (response.status === 200) {
      const accountInfo = await response.json();
      setUserInfo(accountInfo);
      setRedirect(true);
      alert("Login Successful");
    } else {
      const token = response;
      const responseJson = await response.json();
      console.log(token);
      alert("User not Found");
    }
  }

  const signUp = (
    <>
      <div className="backdrop" onClick={closeModalHandler}></div>
      <div className="modal">
        <div className="formSection">
          <div className="welcome">
            <h2>Welcome,</h2>
            <h5 className="ariam">
              To sign in, type the email linked to your account and your
              password.
            </h5>
          </div>
          <div className="emailwarning">
            <Link onClick={showRegisterHandler} className="emailwarning">
              Don't have an account? Click here
            </Link>
          </div>

          <div className="container">
            <div className="formBox">
              <form className="form" onSubmit={LoginAccount}>
                <div className="form-group">
                  <label>Email</label>
                  <div className="input-group" id="show_hide_password">
                    <input
                      className="form-control"
                      name="email"
                      type="email"
                      id="phone"
                      value={email}
                      onChange={(ev) => setEmail(ev.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <div className="input-group">
                    <input
                      className="form-control pwdlength"
                      type="password"
                      name="password"
                      id="password"
                      value={password}
                      onChange={(ev) => setPassword(ev.target.value)}
                    />
                    <i className="bi bi-eye-slash" id="togglePassword"></i>
                  </div>
                </div>
                <p>
                  Forgot Password?{" "}
                  <a href="#" className="reset">
                    Reset it
                  </a>{" "}
                </p>
                <button className="signInbtn">Sign In</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  if (redirect) {
    return <Navigate to={"/write"} />;
  }

  // LOGOUT
  function Logout(ev) {
    ev.preventDefault();
    fetch("http://localhost:3030/api/logout", {
      method: "POST",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status === 200) {
          setUserInfo(null); // Set userInfo to null when user logs out
          navigate("/");
        } else {
          navigate("/");
        }
        console.log("Logout Successful");
      })
      .catch((error) => {
        console.error(error);
      });

      console.log("userInfo:", userInfo);
  }

  return (
    <>
      <div className="navigation">
        <div className="navBar">
          <div className="logo">
            <Link to="/" className="logoSvg">
              <img src={logo} alt="" />
            </Link>
          </div>

          <div className="navLinks">
            <ul>
              <li>
                <Link className="navLink" to="/">
                  Our Story
                </Link>
              </li>
              <li>
                <Link className="navLink" to="/">
                  Membership
                </Link>
              </li>
              <li>
                <Link className="navLink" to="/write">
                  Write
                </Link>
              </li>
              {userInfo._id === "" ? (
                <li onClick={openModalHandler}>
                  <Link className="navLink">Sign in</Link>
                </li>
              ) : (
                <li onClick={Logout}>
                  <Link className="navLink">Sign Out</Link>
                </li>
              )}
            </ul>
            <div className="navButton">
              <button>
                <Link to="/" className="startBtn">
                  Get Started
                </Link>
              </button>
            </div>
          </div>
        </div>
        {openModal && signUp}
        {showRegister && register}
      </div>
    </>
  );
}

export default Navigation;
