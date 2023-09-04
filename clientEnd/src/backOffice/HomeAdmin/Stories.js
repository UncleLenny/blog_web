import React from "react";
import Nav from "./Nav";
import { useEffect, useState } from "react";
import SideNav from "./SideNav";

function Stories() {
  const [adStory, setAdStory] = useState([]);

  const getAdStory = async () => {
    try {
      const response = await fetch("http://localhost:3030/api/stories");
      if (!response.ok) {
        throw new Error("Failed to fetch stories");
      }
      const storyData = await response.json();
      setAdStory(storyData.storyData);
      console.log(storyData);
    } catch (error) {
      console.error(error);
    }
  };

  const [edit, setEdit] = useState({});
  const [modal, setModal] = useState(false);
  const [id, setId] = useState(null);
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    getAdStory();
    if (updated) {
      getAdStory();
    }
    setUpdated(false);
  }, [updated]);

  const handleUpdate = (e) => {
    let { name, value } = e.target;
    setEdit({ ...edit, [name]: value });
  };

  const updateStory = (e) => {
    e.preventDefault();
    fetch("http://localhost:3030/api/update-story/" + id, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(edit),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setModal(false);
        setId(null);
        alert("Story has been Updated");
        setUpdated(true);
        console.log(data);
        console.log(id);
      });
  };

  const handleUpdateBtn = (account) => {
    setId(account._id);
    setModal(true);
    setEdit(account);
  };

  const deletePost = (id) => {
    fetch(`http://localhost:3030/api/delete-story/${id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then((data) => {
        alert("Story has successfully been deleted");
        setUpdated(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Nav />

      <div className="pagedisplay">
        <div className="sideNav">
          <SideNav />
        </div>
        <div className="leftside">
            {/* <h3>Total Number of Stories: {story.length}</h3> */}
          <div className="prodContainer">
              <div className="block">
                {adStory && adStory.length < 1 ? [] : adStory && adStory.map((individualStory, index) => (
                    <div
                      key={individualStory._id}
                      style={{
                        border: "1px solid #ccc",
                        padding: "10px",
                        marginBottom: "10px",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <img
                          src={`http://localhost:3030/api${individualStory.image}`}
                          alt=""
                          style={{ maxWidth: "100px", marginRight: "10px" }}
                        />
                        <div>
                          <h3>{individualStory.topic}</h3>
                          <span>{individualStory.category}</span>
                          <p>{individualStory.content}</p>
                          <div>
                            <button
                              style={{
                                backgroundColor: "blue",
                                color: "white",
                                marginRight: "10px",
                              }}
                              onClick={() => handleUpdateBtn(individualStory)}
                            >
                              Edit
                            </button>
                            <button
                              style={{
                                backgroundColor: "red",
                                color: "white",
                              }}
                              onClick={() => deletePost(individualStory._id)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                ))}
              </div>
          </div>

          {modal ? (
            <div>
              <h3>Update Story</h3>
              <form action="">
                <div class="form-group">
                  <label for="">Name of the Product:</label>
                  <span></span>
                  <input
                    type="text"
                    name="name"
                    class="inputs"
                    onChange={handleUpdate}
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="">Category of the Product:</label>
                  <span></span>
                  <input
                    type="text"
                    name="category"
                    class="inputs"
                    onChange={handleUpdate}
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="">Price of the Product:</label>
                  <span></span>
                  <input
                    type="text"
                    name="price"
                    class="inputs"
                    onChange={handleUpdate}
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="">Quantity of the Product:</label>
                  <span></span>
                  <input
                    type="text"
                    name="quantity"
                    class="inputs"
                    onChange={handleUpdate}
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="">Image of the Product:</label>
                  <span></span>
                  <input
                    type="file"
                    name="image"
                    class="inputs"
                    onChange={handleUpdate}
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="">Description of Product:</label>
                  <span></span>
                  <input
                    type="text"
                    name="description"
                    class="inputs"
                    onChange={handleUpdate}
                    required
                  />
                </div>
                <div class="form-group">
                  <button class="form-btn">Submit Product</button>
                </div>
              </form>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Stories;
