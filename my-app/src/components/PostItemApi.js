import React from "react";
import css from "./css/PostItem.module.css";

function PostItemApi(props) {
  return props.savedPosts.map((post) => {
    // Extra task destructuring
    const { id, user, type,tags, webformatURL } = post;
    return (
      <div className={css.SearchItem} key={id}>
        <p>{user}</p>
        <p>{type}</p>
        <p>{tags}</p>
        <img src={webformatURL} alt="random"/>
      </div>
    );
  });
}

export default PostItemApi;
