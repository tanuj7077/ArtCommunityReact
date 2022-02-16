import React, { useEffect } from "react";
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
import Landing from "./pages/Landing";
import SubmitModal from "./components/Modals/SubmitModals/SubmitModal";

axios.defaults.withCredentials = true;
function App() {
  const { setIsLoggedIn, setUserData, isLoggedIn } = useGlobalContext();
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
        <Landing />
      </Route>
      <Route path="/" exact>
        <SubmitModal />
        <Home />
      </Route>
      <Route path="/user/:id">
        <SubmitModal />
        <UserPage />
      </Route>
      <Route path="/account/:id">
        <SubmitModal />
        {isLoggedIn ? <AccountSettingsPage /> : <Redirect to="/" exact />}
      </Route>
      <Route path="/post/:id">
        <SubmitModal />
        <PostPage />
      </Route>
      <Route path="/explore">
        <SubmitModal />
        <ExplorePage />
      </Route>
      <Route path="/followed">
        <SubmitModal />
        {isLoggedIn ? <FollowedPage /> : <Redirect to="/" exact />}
      </Route>
      <Route path="/popular">
        <SubmitModal />
        <PopularPage />
      </Route>
      <Route path="/tagSearch/:name">
        <SubmitModal />
        <TagSearchPage />
      </Route>
    </Switch>
  );
}

export default App;
