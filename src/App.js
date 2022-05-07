/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import {
  AccountSettingsPage,
  ExplorePage,
  FollowedPage,
  Home,
  Landing,
  PopularPage,
  PostPage,
  TagSearchPage,
  UserPage,
} from "./pages";

axios.defaults.withCredentials = true;
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="landing" element={<Landing />} />
        <Route path="/" element={<Home />} />
        <Route path="user/:id" element={<UserPage />} />
        <Route path="account/:id" element={<AccountSettingsPage />} />
        <Route path="post/:id" element={<PostPage />} />
        <Route path="explore" element={<ExplorePage />} />
        <Route path="followed" element={<FollowedPage />} />
        <Route path="popular" element={<PopularPage />} />
        <Route path="TagSearchPage" element={<TagSearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
