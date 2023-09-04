import React from "react";
import Nav from "./Nav";
import { useEffect, useState } from "react";
import SideNav from "./SideNav";

function Users() {
  const [user, setUser] = useState([]);

  const fetchUsers = async () => {
    const resp = await fetch(`http://localhost:3030/api/accounts`);
    const user = await resp.json();
    setUser(user.user);
    console.log(user);
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      <Nav />

      <div className="pagedisplay">
        <div className="sideNav">
          <SideNav />
        </div>
      </div>
      <div className="leftside">
        <div className="userGrid">
          {user && user.length ? (
            user.map((userItem) => (
              <div key={userItem._id}>
                <span>{userItem._id}</span>
              </div>
            ))
          ) : (
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, perferendis? Quas iure magni ipsum, animi beatae tenetur praesentium pariatur. Quisquam iste iure in placeat qui sunt architecto atque a ccusantium ratione!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Users;
