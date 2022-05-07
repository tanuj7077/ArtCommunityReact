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
  SharedLayout,
  About,
  Gallery,
  UserHome,
} from "./pages";

axios.defaults.withCredentials = true;
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="user/:id" element={<UserPage />}>
            <Route index element={<UserHome />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="post/:id" element={<PostPage />} />
          <Route path="explore" element={<ExplorePage />} />
          <Route path="followed" element={<FollowedPage />} />
          <Route path="popular" element={<PopularPage />} />
          <Route path="TagSearchPage" element={<TagSearchPage />} />
        </Route>
        <Route path="landing" element={<Landing />} />
        <Route path="account/:id" element={<AccountSettingsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
