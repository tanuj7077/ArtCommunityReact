import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";

import { useGlobalContext } from "./context";

import Home from "./pages/Home";
import UserPage from "./pages/UserPage";
import PostPage from "./pages/PostPage";
import ExplorePage from "./pages/ExplorePage";
import DailyPage from "./pages/DailyPage";
import FollowedPage from "./pages/FollowedPage";
import NewPage from "./pages/NewPage";
import PollPage from "./pages/PollPage";
import PopularPage from "./pages/PopularPage";
import TagSearchPage from "./pages/TagSearchPage";

axios.defaults.withCredentials = true;
function App() {
  const { setIsLoggedIn, setUserData } = useGlobalContext();
  const getLoggedIn = async () => {
    const loggedInRes = await axios.get("http://localhost:8000/auth/loggedIn");
    console.log(loggedInRes);
    if (loggedInRes.data.loggedIn) {
      setIsLoggedIn(true);
      setUserData(loggedInRes.data.userData);

      //Initialize all data
    }
  };

  useEffect(() => {
    getLoggedIn();
  }, []);

  ///-----------IMPORTANT-----------------
  //we need to add LOADING and Conditional rendering
  //Otherwise sidenav error

  // var tags;
  // const fetchTags = async () => {
  //   tags = await axios.get("http://localhost:8000/tags/fetchTags");
  //   console.log(tags.data);
  //   //Initialize all data
  // };
  // useEffect(() => {
  //   fetchTags();
  // }, []);

  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/user/:id">
        <UserPage />
      </Route>
      <Route path="/post/:id">
        <PostPage />
      </Route>
      <Route path="/explore">
        <ExplorePage />
      </Route>
      <Route path="/daily">
        <DailyPage />
      </Route>
      <Route path="/followed">
        <FollowedPage />
      </Route>
      <Route path="/new">
        <NewPage />
      </Route>
      <Route path="/poll">
        <PollPage />
      </Route>
      <Route path="/popular">
        <PopularPage />
      </Route>

      <Route path="/tagSearch/:name">
        <TagSearchPage />
      </Route>
    </Switch>
  );
}

export default App;
