import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import SideNav from "./SideNav";
// import prodImg from './images/product.png'
// import userImg from './images/users.png'
// import cartImg from './images/shopping-cart.png'

function Dashboard() {
  const [story, setStory] = useState([]);

  const fetchStory = async () => {
    console.log("did this run?");
    const resp = await fetch("http://localhost:3030/api/stories");
    const stories = await resp.json();
    setStory(stories.data);
    console.log(stories.data);
  };

  const [update, setUpdate] = useState(false);

  const [user, setUser] = useState([]);
  const fetchUsers = async () => {
    console.log("Where are my users?");
    const resp = await fetch("http://localhost:3030/api/accounts");
    const users = await resp.json();
    setUser(users.data);
    console.log(users.data);
  };

  // var tenPosts = post.slice(0, 10);

  useEffect(() => {
    fetchStory();
    if (update) {
      fetchStory();
    }
    setUpdate(false);
  }, [update]);

  useEffect(() => {
    fetchUsers();
  });
  return (
    <div className="dashboard">
      <Nav />
      <div className="pagedisplay">
        <div className="sideNav">
          <SideNav />
        </div>

        <div className="leftside">
          <div className="leftblock">
            <div className="Totals">
              <div className="TotalBox">
                <img src="" alt="" />
                <h3>Total Stories on Medium</h3>
                <span>{story.length}</span>
              </div>
              <div className="TotalBox">
                <img src="" alt="" />
                <h3>Total Users</h3>
                <span>{user.length}</span>
              </div>
              <div className="TotalBox">
                <img src="" alt="" />
                <h3>Total Likes</h3>
                <span>10</span>
              </div>
              <div className="TotalBox">
                <img src="" alt="" />
                <h3>Total Likes</h3>
                <span>10</span>
              </div>
            </div>
          </div>
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

{/* <div>
    <table className='DashTable'>
      <tr className='headtr'>
        <th>Product Name</th>
        <th>Product Category</th>
        <th>Price</th>
      </tr>

      {post.filter((item) => item.category === "Costco Lenny").map((post, key) => {
        return(
          <tr key={key} className='bodytr'>
            <td>{post.name}</td>
            <td>{post.category}</td>
            <td>{post.price}</td>
          </tr>
        )
      })}
    </table>
  </div> */}