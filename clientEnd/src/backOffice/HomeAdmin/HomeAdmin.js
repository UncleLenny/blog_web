import React, { useState } from 'react'
import Dashboard from './Dashboard';
import LoginFom from './LoginFom';
import { Link } from 'react-router-dom';


function HomeAdmin() {
  const adminUser = {
    email: "admin@gmail.com",
    password: "mediumAdmin321"
  }

  const [user, setUser] = useState ({name:"", email: ""});
  const [pass, setPass] = useState ({password: ""});
  const [error, setError] = useState (""); 

  const Login = details => {
    console.log(details);
    if (details.email == adminUser.email && details.password == adminUser.password){
      alert("Logged In")
      setUser({
        name: details.name,
        email: details.email
      });
    } else {
      alert("Details do not match")
    }
  }

  const Logout = () => {
    console.log("logout");
  }

  return (
    <div>
      {(user.email != "") ? (
        <div>
          <Dashboard />
          <Link to='/Dashboard'></Link>
        </div>
      ) : (
        <LoginFom Login={Login} error={error} />
      )}
    </div>
  )
}

export default HomeAdmin