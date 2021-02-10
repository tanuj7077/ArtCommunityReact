import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import User from "./pages/User";
import PostPage from "./pages/PostPage";
import ExplorePage from "./pages/ExplorePage";
import DailyPage from "./pages/DailyPage";
import FollowedPage from "./pages/FollowedPage";
import NewPage from "./pages/NewPage";
import PollPage from "./pages/PollPage";
import PopularPage from "./pages/PopularPage";
import TagSearchPage from "./pages/TagSearchPage";
function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/user/:id">
        <User />
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
      <Route path="/user/:id">
        <User />
      </Route>
    </Switch>
  );
}

export default App;
