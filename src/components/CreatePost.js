import React from "react";
import "./CreatePost.css";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState();
  const [postText, setPostText] = useState();

  const navigate = useNavigate();

  const createPost = async () => {
    await addDoc(collection(db, "posts"), {
      title: title,
      postsText: postText,
      author: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    });
    navigate("/");
  };

  return (
    <div className="createPostPage">
      <div className="postContainer">
        <h1>new post</h1>
        <div className="inputPost">
          <div>Title</div>
          <input
            type="text"
            placeholder="Title input"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="inputPost">
          <div>Detail</div>
          <textarea
            placeholder="input detail"
            name=""
            id=""
            cols="30"
            rows="10"
            onChange={(e) => setPostText(e.target.value)}
          ></textarea>
        </div>
        <button className="postButton" onClick={createPost}>
          post!!
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
