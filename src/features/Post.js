import React from "react";
import "../css/post.css";
import person from "../asset/images/person.png";
import postImg from "../asset/images/flower.jpg";

function Post() {
  return (
    <div className="post">
      <div className="post-head">
        <img src={person} alt="profile-pic" className="post-profile" />
        <h4 className="post-user-name">Shohidul Islam</h4>
      </div>
      <p className="time">just now</p>
      <img src={postImg} alt="post_image" className="post-img" />
      <p className="post-text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. At libero
        minima praesentium hic amet exercitationem perspiciatis explicabo
        sapiente ad, suscipit sunt incidunt harum eaque, vero fugiat cumque enim
        voluptas adipisci illo totam quaerat recusandae assumenda. Quos
        voluptates at placeat fugit, nobis repellendus nesciunt facilis, eius
        architecto esse porro, perferendis laudantium.
      </p>
    </div>
  );
}

export default Post;
