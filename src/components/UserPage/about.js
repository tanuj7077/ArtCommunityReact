import React from "react";
import {
  FaBirthdayCake,
  FaFacebookSquare,
  FaPatreon,
  FaYoutube,
} from "react-icons/fa";
import { Route } from "react-router-dom";
import { SiGmail } from "react-icons/si";
import { CgGenderFemale, CgGenderMale } from "react-icons/cg";
import { HiLocationMarker } from "react-icons/hi";
import { AiOutlineLink, AiFillInstagram } from "react-icons/ai";
import blank from "../../tagImage/blankProfile.png";

const About = ({ user, following, followers }) => {
  const openInNewTab = (url) => {
    var newUrl = "//" + url;
    const newWindow = window.open(newUrl, "_blank");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <div className="userPage--about">
      <div className="userPage--about-info">
        <div className="userPage--about-info-name">{user.username}</div>
        {user.extras && user.extras.profession && (
          <div className="userPage--about-info-profession">
            {/* Artist // Professional // Digital Art */}
            {user.extras.profession}
          </div>
        )}
        <div className="userPage--about-info-data">
          {user.personalInfo && user.personalInfo.dob && (
            <div className="item">
              <FaBirthdayCake className="infoIcon" />
              <span className="infoText">
                {user.personalInfo.dob.substring(0, 10)}
              </span>
            </div>
          )}
          {user.personalInfo && user.personalInfo.location && (
            <div className="item">
              <HiLocationMarker className="infoIcon" />
              <span className="infoText">{user.personalInfo.location}</span>
            </div>
          )}
          {user.personalInfo && user.personalInfo.gender && (
            <div className="item">
              {user.personalInfo.gender === "Female" ? (
                <CgGenderFemale className="infoIcon" />
              ) : (
                <CgGenderMale className="infoIcon" />
              )}
              <span className="infoText">{user.personalInfo.gender}</span>
            </div>
          )}
          {/* <span className="item">Joined in Sep 4 2012</span> */}
          <span className="item">Joined in {user.creationDate}</span>
        </div>
        {user.extras && user.extras.link && (
          <div className="userPage--about-info-link">
            <AiOutlineLink className="aboutIcon" />
            <span className="aboutText">{user.extras.link}</span>
          </div>
        )}
        {user.personalInfo &&
          user.personalInfo.links &&
          user.personalInfo.links.length > 0 && (
            <div className="userPage--about-info-followMe">
              <div className="subheading">Follow me on</div>
              <div className="items">
                {user.personalInfo.links.map((link) => {
                  return (
                    <>
                      {link.includes("facebook.com") && (
                        <span
                          className="item"
                          onClick={() => openInNewTab(link)}
                        >
                          <FaFacebookSquare className="aboutIcon" />
                          <span className="aboutText">Facebook</span>
                        </span>
                      )}
                      {link.includes("instagram.com") && (
                        <span
                          className="item"
                          onClick={() => openInNewTab(link)}
                        >
                          <AiFillInstagram className="aboutIcon" />
                          <span className="aboutText">Instagram</span>
                        </span>
                      )}
                      {link.includes("gmail.com") && (
                        <span
                          className="item"
                          onClick={() => openInNewTab(link)}
                        >
                          <SiGmail className="aboutIcon" />
                          <span className="aboutText">Gmail</span>
                        </span>
                      )}
                      {link.includes("patreon.com") && (
                        <span
                          className="item"
                          onClick={() => openInNewTab(link)}
                        >
                          <FaPatreon className="aboutIcon" />
                          <span className="aboutText">Patreon</span>
                        </span>
                      )}
                      {link.includes("youtube.com") && (
                        <span
                          className="item"
                          onClick={() => openInNewTab(link)}
                        >
                          <FaYoutube className="aboutIcon" />
                          <span className="aboutText">Youtube</span>
                        </span>
                      )}
                    </>
                  );
                })}
              </div>
            </div>
          )}
        {user.personalInfo && user.personalInfo.about && (
          <div className="userPage--about-info-bio">
            <span className="subheading">My Bio</span>
            <span className="bio">{user.personalInfo.about}</span>
          </div>
        )}
      </div>

      {user.extras &&
        (user.extras.tools ||
          user.extras.favCategory ||
          user.extras.extra.length > 0) && <hr class="solid"></hr>}

      {user.extras &&
        (user.extras.tools ||
          user.extras.favCategory ||
          user.extras.extra.length > 0) && (
          <div className="userPage--about-favourites">
            {user.extras.tools && (
              <div className="item">
                <span className="label">Tools I Use</span>
                <span className="answer">{user.extras.tools}</span>
              </div>
            )}
            {user.extras.favCategory && (
              <div className="item">
                <span className="label">
                  Preferred Art / Photography category
                </span>
                <span className="answer">{user.extras.favCategory}</span>
              </div>
            )}
            {user.extras.extra &&
              user.extras.extra.map((item) => {
                return (
                  <div className="item">
                    <span className="label">{item.label}</span>
                    <span className="answer">{item.value}</span>
                  </div>
                );
              })}
          </div>
        )}

      <hr class="solid"></hr>

      <div className="userPage--about-stats">
        <span className="subheading">Stats</span>
        <div className="items">
          <div className="item">
            <span className="label">Posts</span>
            <span className="count">{user.posts.length}</span>
          </div>
          <div className="item">
            <span className="label">Likes</span>
            <span className="count">567</span>
          </div>
          <div className="item">
            <span className="label">Following</span>
            <span className="count">{following.length}</span>
          </div>
          <div className="item">
            <span className="label">Followers</span>
            <span className="count">{followers.length}</span>
          </div>
          <div className="item">
            <span className="label">Comments Made</span>
            <span className="count">124</span>
          </div>
          <div className="item">
            <span className="label">Comments Recieved</span>
            <span className="count">45</span>
          </div>
        </div>
      </div>

      {following.length > 0 && <hr class="solid"></hr>}

      {following.length > 0 && (
        <div className="userPage--about-followers">
          <span className="subheading">Following</span>
          <div className="items">
            {following.map((user) => {
              return (
                <>
                  <Route
                    render={({ history }) => (
                      <div
                        onClick={() => {
                          history.push(`/user/${user.username}`);
                        }}
                        className="item"
                      >
                        {!user.image ? (
                          <div
                            className="img"
                            style={{
                              backgroundImage: `url(${blank})`,
                            }}
                          ></div>
                        ) : (
                          <div
                            className="img"
                            style={{
                              backgroundImage: `url(${user.image})`,
                              borderRadius: `${user.borderRad}%`,
                            }}
                          ></div>
                        )}

                        <span className="username">{user.username}</span>
                      </div>
                    )}
                  />
                  {/* <div key={user.id} className="item">
                    {!user.image ? (
                      <div
                        className="img"
                        style={{
                          backgroundImage: `url(${blank})`,
                        }}
                      ></div>
                    ) : (
                      <div
                        className="img"
                        style={{
                          backgroundImage: `url(${user.image})`,
                          borderRadius: `${user.borderRad}%`,
                        }}
                      ></div>
                    )}

                    <span className="username">{user.username}</span>
                  </div> */}
                </>
              );
            })}
            {following.length > 15 && (
              <span className="showMore">Show More</span>
            )}
          </div>
        </div>
      )}

      <hr class="solid"></hr>

      {followers.length > 0 && (
        <div className="userPage--about-followers">
          <span className="subheading">Followers</span>
          <div className="items">
            {followers.map((user) => {
              return (
                <div key={user.id} className="item">
                  {!user.image ? (
                    <div
                      className="img"
                      style={{
                        backgroundImage: `url(${blank})`,
                      }}
                    ></div>
                  ) : (
                    <div
                      className="img"
                      style={{
                        backgroundImage: `url(${user.image})`,
                        borderRadius: `${user.borderRad}%`,
                      }}
                    ></div>
                  )}

                  <span className="username">{user.username}</span>
                </div>
              );
            })}
            {followers.length > 15 && (
              <span className="showMore">Show More</span>
            )}
          </div>
          {/* <span className="showMore">Show More</span> */}
        </div>
      )}

      <div className="userPage--about-comments"></div>
    </div>
  );
};

export default About;
