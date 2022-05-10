/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import React, { useState } from "react";
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
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./utils/themes";
import { Wrapper } from "./assets/wrappers/App";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./components/modals/Modal";
import LoginModal from "./components/modals/LoginModal";
import { toggleLoginModal } from "./features/utilitySlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

axios.defaults.withCredentials = true;
function App() {
  const dispatch = useDispatch();
  const { isDarkMode, isLoginModalOpen } = useSelector(
    (store) => store.utility
  );

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Wrapper>
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
          {isLoginModalOpen && (
            <Modal
              toggleHandler={() => {
                dispatch(toggleLoginModal());
              }}
            >
              <LoginModal />
            </Modal>
          )}
          <ToastContainer position="top-center" />
        </BrowserRouter>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
