import React, { useState, useEffect } from "react";
import axios from "axios";
import css from "./css/Content.module.css";
import { savedPosts } from "../posts.json";
import PostItemApi from "./PostItemApi";
import Loader from "./Loader";
import API_KEY from "../secret";

export default function ContentApiHooks() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState([]);
  const [savedPosts, setSavedPosts] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const response = await axios.get(
      "https://pixabay.com/api/?key=40670153-43e7f27c969f3de7330f00488&per_page=100"
    );
    const fetchedPosts = response.data.hits;
    setIsLoaded(true);
    setPosts(fetchedPosts);
    setSavedPosts(fetchedPosts);
  };

  const handleChange = (e) => {
    const name = e.target.value.toLowerCase();
    const filteredPosts = savedPosts.filter((post) => {
      return post.user.toLowerCase().includes(name);
    });

    setPosts(filteredPosts);
  };

  return (
    <div className={css.Content}>
      <div className={css.TitleBar}>
        <h1>My Photos</h1>
        <form>
          <label htmlFor="searchinput">Search</label>
          <input
            type="search"
            id="searchinput"
            placeholder="By Author"
            onChange={(e) => handleChange(e)}
          />
          <h4>posts found {posts.length}</h4>
        </form>
      </div>

      <div className={css.SearchResults}>
        {
        isLoaded ?
        <PostItemApi savedPosts={posts} />
        :
        <Loader />
}
      </div>
    </div>
  );
}
