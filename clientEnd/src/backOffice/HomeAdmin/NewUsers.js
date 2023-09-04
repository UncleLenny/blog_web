import { useState } from 'react';
import Nav from './Nav';
import SideNav from './SideNav';

function NewUsers() {
    const [user, setUser] = useState({
        fullname: "",
        username: "",
        phone: "",
        email: "",
        password: "",
    });

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({ ...user, [name]:value});
    };

    let newUser = {
        name : user.name,
        phone : user.phone,
        email : user.email,
        password : user.password,
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3030/api/createAccount", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(user),
        })
          .then((resp) => resp.json())
          .then((data) => {
            alert("New User has been Created");
            console.log(data);
          });
    };


  return (
    <div>
        <Nav />

        <div className="pagedisplay">
            <div className="sideNav">
                <SideNav />
            </div>
        </div>
        <div className='newStory leftside'>
            <h1>Register a New User</h1>
            <form className='form formbox' method="post" onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="">Full Name:</label><span></span>
                    <input type="text" name="fullname" class="inputs" onChange={handleInput} required/>
                </div>
                <div class="form-group">
                    <label for="">Username:</label><span></span>
                    <input type="text" name="username" class="inputs" onChange={handleInput} required/>
                </div>
                <div class="form-group">
                    <label for="">Email Address:</label><span></span>
                    <input type="email" name="email" class="inputs"  onChange={handleInput} required/>   
                </div>
                <div class="form-group">
                    <label for="">Phone Number:</label><span></span>
                    <input type="text" name="phone" class="inputs" onChange={handleInput} required/>
                </div>
                <div class="form-group">
                    <label for="">Password:</label><span></span>
                    <input type="text" name="password" class="inputs" onChange={handleInput} required/>
                </div>
                <div class="form-group">
                    <button class="form-btn block">
                        Create User
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default NewUsers