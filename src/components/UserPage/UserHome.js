import React, { useState, useEffect, useRef } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import { useGlobalContext } from "../../context";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import {
  FaBirthdayCake,
  FaFacebookSquare,
  FaPatreon,
  FaYoutube,
  FaCommentDots,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { CgGenderFemale, CgGenderMale } from "react-icons/cg";
import { HiLocationMarker } from "react-icons/hi";
import { AiOutlineLink, AiFillInstagram, AiFillLike } from "react-icons/ai";

const UserHome = ({ user, popular, liked, spotlight }) => {
  const { isLoggedIn, userData, changeAlert, setSignupModalVisibility } =
    useGlobalContext();
  const sliderRef = useRef(null);
  const rightBtnRef = useRef(null);
  const [btnVisibility, setBtnVisibility] = useState(false);

  const setButtonVisibility = () => {
    if (sliderRef && rightBtnRef && sliderRef.current && rightBtnRef.current) {
      if (
        sliderRef.current.clientWidth >=
        rightBtnRef.current.offsetLeft + 40
      ) {
        setBtnVisibility(true);
      }
      if (sliderRef.current.clientWidth < rightBtnRef.current.offsetLeft + 40) {
        setBtnVisibility(false);
      }
    }
  };

  async function handleLike() {
    if (!isLoggedIn) {
      setSignupModalVisibility(true);
    } else {
      const data = {
        user: userData,
      };
      await axios
        .post(
          `${process.env.REACT_APP_BASE_URL}/posts/post/${spotlight._id}/like`,
          data
        )
        .then((res) => {
          changeAlert(res.data.message);
          if (res.data.message.type === "success") {
            spotlight.likesArray.push(userData._id);
          }
        });
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setButtonVisibility();
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  useEffect(() => {
    const event = window.addEventListener("resize", setButtonVisibility);
    return () => window.removeEventListener("resize", event);
  }, []);

  const handleScroll = (side) => {
    if (side === "right") {
      sliderRef.current.scrollBy(500, 0);
    } else {
      sliderRef.current.scrollBy(-500, 0);
    }
  };

  return (
    <div className="userPage--home">
      {user.personalInfo &&
        user.extras &&
        user.extras.profession &&
        user.extras.extra &&
        user.personalInfo.dob && (
          <div className="userPage--home-about">
            <section className="subheading u-margin-bottom-small">
              About <span className="aboutName">{user.fullname}</span>
            </section>
            <div className="userPage--home-aboutInfo">
              {
                <div className="userPage--home-aboutInfo-item">
                  {user.extras.profession}
                </div>
              }
              {(user.personalInfo.dob ||
                user.personalInfo.location ||
                user.personalInfo.gender) && (
                <div className="userPage--home-aboutInfo-item group-column">
                  {user.personalInfo.dob && (
                    <div className="item">
                      <FaBirthdayCake className="aboutIcon" />
                      <span className="aboutText">
                        {user.personalInfo.dob.substring(0, 10)}
                      </span>
                    </div>
                  )}
                  {user.personalInfo.location && (
                    <div className="item">
                      <HiLocationMarker className="aboutIcon" />
                      <span className="aboutText">
                        {user.personalInfo.location}
                      </span>
                    </div>
                  )}
                  {user.personalInfo.gender && (
                    <div className="item">
                      {user.personalInfo.gender === "Female" ? (
                        <CgGenderFemale className="aboutIcon" />
                      ) : (
                        <CgGenderMale className="aboutIcon" />
                      )}
                      <span className="aboutText">
                        {user.personalInfo.gender}
                      </span>
                    </div>
                  )}
                </div>
              )}
              <div className="userPage--home-aboutInfo-item">
                Joined in {user.creationDate}
              </div>
              {user.extras.link && (
                <div className="userPage--home-aboutInfo-item">
                  <AiOutlineLink className="aboutIcon" />
                  <span className="aboutText"> {user.extras.link}</span>
                </div>
              )}
              {user.personalInfo.links && user.personalInfo.links.length > 0 && (
                <div className="userPage--home-aboutInfo-item group-row">
                  <span className="u-margin-bottom-small">Follow me on</span>
                  {user.personalInfo.links.map((link) => {
                    return (
                      <>
                        {link.includes("facebook.com") && (
                          <span className="item">
                            <FaFacebookSquare className="aboutIcon" />
                            <span className="aboutText">Facebook</span>
                          </span>
                        )}
                        {link.includes("instagram.com") && (
                          <span className="item">
                            <AiFillInstagram className="aboutIcon" />
                            <span className="aboutText">Instagram</span>
                          </span>
                        )}
                        {link.includes("gmail.com") && (
                          <span className="item">
                            <SiGmail className="aboutIcon" />
                            <span className="aboutText">Gmail</span>
                          </span>
                        )}
                        {link.includes("patreon.com") && (
                          <span className="item">
                            <FaPatreon className="aboutIcon" />
                            <span className="aboutText">Patreon</span>
                          </span>
                        )}
                        {link.includes("youtube.com") && (
                          <span className="item">
                            <FaYoutube className="aboutIcon" />
                            <span className="aboutText">Youtube</span>
                          </span>
                        )}
                      </>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        )}

      <div
        className={`userPage--home-spotlight ${
          !user.personalInfo ||
          !user.extras ||
          !user.extras.profession ||
          !user.extras.extra ||
          !user.personalInfo.dob
            ? "noAbout"
            : ""
        }`}
      >
        <section className="subheading u-margin-bottom-small">
          <span>Spotlight</span>
        </section>
        <section className="spotlight">
          <div className="spotlight-image">
            <img className="img-landscape" src={spotlight.image} alt="" />
          </div>
          <div className="spotlight-info">
            <Route
              render={({ history }) => (
                <span
                  onClick={() => {
                    history.push(`/post/${spotlight._id}`);
                  }}
                  className="spotlight-info-name"
                >
                  {spotlight.name}
                </span>
              )}
            />
            {/* <span className="spotlight-info-name">{spotlight.name}</span> */}
            <div className="spotlight-info-actions">
              {spotlight && spotlight.likesArray && (
                <span className="spotlight-info-actions-like">
                  <AiFillLike className="infoIcon" onClick={handleLike} />
                  <span className="text">{spotlight.likesArray.length}</span>
                </span>
              )}
              {spotlight && spotlight.comments && (
                <span className="spotlight-info-actions-comment">
                  <Route
                    render={({ history }) => (
                      <FaCommentDots
                        className="infoIcon"
                        onClick={() => {
                          history.push(`/post/${spotlight._id}`);
                        }}
                      />
                    )}
                  />
                  {/* <FaCommentDots className="infoIcon" /> */}
                  <span className="text">{spotlight.comments.length}</span>
                </span>
              )}
            </div>
          </div>
        </section>
      </div>

      <div className="userPage--home-posts">
        {popular && popular.length > 0 && (
          <div className="popular">
            <span className="subheading">Popular Uploads</span>
            <div className="popular-slider">
              <span
                className="popular-slider-leftButton"
                onClick={() => handleScroll("left")}
                style={{
                  visibility: `${btnVisibility ? "visible" : "hidden"}`,
                }}
              >
                <VscChevronLeft className="icon" />
              </span>
              <div className="popular-slider-slides" ref={sliderRef}>
                {popular.map((item) => {
                  return (
                    <Route
                      key={`popularSlider_${item._id}`}
                      render={({ history }) => (
                        <img
                          onClick={() => {
                            history.push(`/post/${item._id}`);
                          }}
                          className="slider-img"
                          src={item.image}
                          draggable="false"
                          alt=""
                        />
                      )}
                    />
                  );
                })}
              </div>

              <span
                className="popular-slider-rightButton"
                ref={rightBtnRef}
                onClick={() => handleScroll("right")}
                style={{
                  visibility: `${btnVisibility ? "visible" : "hidden"}`,
                }}
              >
                <VscChevronRight className="icon" />
              </span>
            </div>
          </div>
        )}

        <div className="LikedSection">
          {liked && liked.length > 0 && (
            <div className="subheading">Liked Posts</div>
          )}
          <div className="Liked">
            {liked.map((item) => {
              return (
                <div className="LikedImage" key={`likedImage_${item._id}`}>
                  <img
                    draggable="false"
                    src={item.image}
                    alt=""
                    className="image"
                  />
                  <div className="info">
                    <Route
                      render={({ history }) => (
                        <span
                          onClick={() => {
                            history.push(`/post/${item._id}`);
                          }}
                          className="name"
                        >
                          {item.name}
                        </span>
                      )}
                    />
                    <Route
                      render={({ history }) => (
                        <span
                          onClick={() => {
                            history.push(`/user/${item.author.username}`);
                          }}
                          className="author"
                        >
                          {item.author.username}
                        </span>
                      )}
                    />
                    {/* <span className="author">{item.author.username}</span> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
