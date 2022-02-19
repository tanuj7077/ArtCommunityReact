/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";

import { useGlobalContext } from "./context";

import {
  Home,
  UserPage,
  PostPage,
  ExplorePage,
  FollowedPage,
  PopularPage,
  TagSearchPage,
  AccountSettingsPage,
  Landing,
  SubmitModal,
  SignupModal,
  Alert,
  Loading,
} from "./commonImports";

axios.defaults.withCredentials = true;
function App() {
  const { setIsLoggedIn, setUserData, isLoggedIn, setLoading } =
    useGlobalContext();

  axios.interceptors.request.use((request) => {
    //console.log(request.url.split("/").includes("hoverUser"));
    if (!request.url.split("/").includes("hoverUser")) {
      setLoading(true);
    }
    return request;
  });
  axios.interceptors.response.use((response) => {
    setLoading(false);
    return response;
  });

  const getLoggedIn = async () => {
    const loggedInRes = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/auth/loggedIn`
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
      <Route path="/landing">
        <SignupModal />
        <Landing />
      </Route>
      <>
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
        <SignupModal />
        <SubmitModal />
        <Alert />
        <Loading />
      </>
    </Switch>
  );
}

export default App;
