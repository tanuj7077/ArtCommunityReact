import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";

import { useGlobalContext } from "./context";

import Home from "./pages/Home";
import UserPage from "./pages/UserPage";
import PostPage from "./pages/PostPage";
import ExplorePage from "./pages/ExplorePage";
import FollowedPage from "./pages/FollowedPage";
import PopularPage from "./pages/PopularPage";
import TagSearchPage from "./pages/TagSearchPage";
import AccountSettingsPage from "./pages/AccountSettingsPage";

axios.defaults.withCredentials = true;
function App() {
  const { setIsLoggedIn, setUserData, isLoggedIn } = useGlobalContext();
  const getLoggedIn = async () => {
    const loggedInRes = await axios.get(
      // "https://shielded-woodland-79171.herokuapp.com/auth/loggedIn"
      "http://localhost:8000/auth/loggedIn"
    );
    if (loggedInRes.data.loggedIn) {
      setIsLoggedIn(true);
      setUserData(loggedInRes.data.userData);
    }
  };

  useEffect(() => {
    getLoggedIn();
  }, []);

  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/user/:id">
        <UserPage />
      </Route>
      <Route path="/account/:id">
        {isLoggedIn ? <AccountSettingsPage /> : <Redirect to="/" exact />}
      </Route>
      <Route path="/post/:id">
        <PostPage />
      </Route>
      <Route path="/explore">
        <ExplorePage />
      </Route>
      <Route path="/followed">
        {isLoggedIn ? <FollowedPage /> : <Redirect to="/" exact />}
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
