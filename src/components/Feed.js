import React, { useState } from "react";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import "./Feed.css";
import InputOption from "./InputOption";
import Post from "./Post";

function Feed() {
  const [posts, setPosts] = useState([]);

  const sendPost = (e) => {
    e.preventDefault();
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" placeholder="Search" />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputButtons">
          <InputOption Icon={ImageIcon} title="Photos" color="#4a63b6" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#c7a33e" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#cbcbcd" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#79c15e"
          />
        </div>
      </div>

      {posts.map((post) => (
        <Post />
      ))}
      <Post
        name="Muhammad Anas"
        description="This is a Test"
        message="Mazaa Aaya Bhai"
      />
    </div>
  );
}

export default Feed;
