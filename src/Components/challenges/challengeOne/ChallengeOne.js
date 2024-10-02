import Header from "./header/Header";
import React from "react";
import Post from "./post/Post";
import SideMenu from "./sideMenu/SideMenu";

const showCategories = true;

function ChallengeOne() {
  return (
    <div className="ChallengeOne">
      <Header />

      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* POSTS & SIDE MENU CONTAINER */}
        <div style={{ display: "flex" }}>
          {/* POSTS CONTAINER*/}
          <div style={{ width: "70%" }}>
            <Post postTitle="Title One" postBody="Body One" />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
          {/* ==POSTS CONTAINER== */}

          {/* SIDE MENU CONTAINER */}
          <div style={{ width: "30%" }}>
            <ChallengeOneMenu />
          </div>
          {/* SIDE MENU CONTAINER */}
        </div>
      </div>
      {/*== POSTS & SIDE MENU CONTAINER ==*/}
    </div>
  );
}

function ChallengeOneMenu() {
  if (showCategories === true) {
    return <SideMenu />;
  } else {
    return null;
  }
}

export default ChallengeOne;
