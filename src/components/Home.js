import React, { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import "./Home.css";
import { db } from "../firebase";
const Home = () => {
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));

      console.log(data.docs.map((doc) => ({ ...doc.data().author.username })));
    };
    getPosts();
  }, []);

  return (
    <div className="homePage">
      <div className="postContents">
        <div className="postHeader">
          <h1>Title</h1>
        </div>

        <div className="postTextContainer">
          now Reactddddddddddddd ssfdssfsfsfssfsfs learning
        </div>
        <div className="nameAndDeleteButton">
          <h3>@sssssSssss</h3>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
