import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import User from "./pages/User";
import PostPage from "./pages/PostPage";
import ExplorePage from "./pages/ExplorePage";
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
    </Switch>
  );
}

export default App;
