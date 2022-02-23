import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useGlobalContext } from "../../context";
import axios from "axios";
import { COUNTRIES } from "../../constants";

import {
  AiFillInstagram,
  FaFacebookSquare,
  FaPatreon,
  FaYoutube,
  FaPlus,
  SiGmail,
} from "../../commonImports/reactIcons";

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px solid #525050",
    fontSize: 20,
    letterSpacing: 4,
    color: "#A8A8A8",
    //backgroundColor: "#323232",
    backgroundColor: state.isFocused ? "black" : "#323232",
    textAlign: "left",
    cursor: "pointer",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "rgb(168, 168, 168)",
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: "#323232",
    border: "1px solid #525050",
    width: "136%",
  }),
  menuList: (base) => ({
    ...base,
    height: "27rem",

    "::-webkit-scrollbar": {
      width: "9px",
    },
    "::-webkit-scrollbar-track": {
      background: "black",
    },
    "::-webkit-scrollbar-thumb": {
      //background: "#3e3f3e",
      background: "#6ecf86",
      borderRadius: "5px",
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "#555",
    },
  }),
  container: (base) => ({
    ...base,
    width: "136%",
    height: "4rem",
  }),
  control: (base, state) => ({
    ...base,
    //height: 32,
    padding: 5,
    paddingLeft: 10,
    minHeight: 32,
    fontSize: 20,
    letterSpacing: 4,
    border: "none",
    boxShadow: "none",
    width: "136%",
    textAlign: "left",
    cursor: "pointer",
    backgroundColor: "#80808080",
    color: "gray",
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    //display: "none",
    color: "gray",
  }),
  indicatorSeparator: (base) => ({
    ...base,
    display: "none",
  }),
  valueContainer: (base) => ({
    ...base,
    padding: 0,
    paddingLeft: 2,
  }),
  input: (base) => ({
    ...base,
    color: "rgb(168, 168, 168)",
  }),
};

const Personal = () => {
  const { isLoggedIn, userData, setUserData, changeAlert } = useGlobalContext();
  let url = `${process.env.REACT_APP_BASE_URL}/users/user/editPersonal/${userData._id}`;
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const toggleModalDisplay = () => {
    setShowModal(!showModal);
  };
  const toggleEditModalDisplay = () => {
    setShowEditModal(!showEditModal);
  };
  const [about, setAbout] = useState("");
  const [dob, setDob] = useState("");
  const [location, setLocation] = useState(); //dont set initially
  const [gender, setGender] = useState("");
  const [links, setLinks] = useState([]);
  const [linkValid, setLinkValid] = useState(false);
  const [link, setLink] = useState("");
  const [message, setMessage] = useState("");
  const [uneditable, setUneditable] = useState("");
  const [index, setIndex] = useState();

  const validateLink = (e) => {
    let item = e.target.value;
    setLink(item);
    if (
      item.includes("facebook.com") ||
      item.includes("instagram.com") ||
      item.includes("patreon.com") ||
      item.includes("gmail.com") ||
      item.includes("youtube.com")
    ) {
      if (links.includes(item)) {
        setMessage("* This link is already added");
        setLinkValid(false);
      } else {
        let toCheck, linkType;
        let validity = true;
        if (item.includes("facebook.com")) {
          toCheck = "facebook.com";
          linkType = "Facebook";
        } else if (item.includes("instagram.com")) {
          toCheck = "instagram.com";
          linkType = "Instagram";
        } else if (item.includes("patreon.com")) {
          toCheck = "patreon.com";
          linkType = "Patreon";
        } else if (item.includes("gmail.com")) {
          toCheck = "gmail.com";
          linkType = "Gmail";
        } else if (item.includes("youtube.com")) {
          toCheck = "youtube.com";
          linkType = "Youtube";
        }
        links.forEach((l) => {
          if (l.includes(toCheck)) {
            setMessage("* You have already added your " + linkType + " link");
            validity = false;
          }
        });
        setLinkValid(validity);
      }
    } else {
      setLinkValid(false);
      setMessage("");
    }
  };
  const validateEditLink = (e) => {
    let item = e.target.value;
    if (item.length <= uneditable.length || !item.includes(uneditable)) {
      setLink(uneditable);
    } else {
      setLink(item);
    }
    //setLink(item);
    if (
      item.includes("facebook.com") ||
      item.includes("instagram.com") ||
      item.includes("patreon.com") ||
      item.includes("gmail.com") ||
      item.includes("youtube.com")
    ) {
      if (links.includes(item)) {
        setMessage(
          "* This link is already added or you have not edited the link"
        );
        setLinkValid(false);
      } else {
        setLinkValid(true);
        setMessage("");
      }
    } else {
      setLinkValid(false);
      setMessage("");
    }
  };
  const checkLinkType = (item) => {
    if (item.includes("facebook.com")) {
      return "fb";
    }
    if (item.includes("instagram.com")) {
      return "insta";
    }
    if (item.includes("patreon.com")) {
      return "patreon";
    }
    if (item.includes("gmail.com")) {
      return "gmail";
    }
    if (item.includes("youtube.com")) {
      return "youtube";
    }
  };
  const addLink = () => {
    let arr = links;
    if (!arr.includes(link)) {
      arr.push(link);
    }
    setLinks(arr);
  };
  const editLink = () => {
    let arr = links;
    let toRemove, indexToRemove;
    if (link.includes("facebook.com")) {
      toRemove = "facebook.com";
    } else if (link.includes("instagram.com")) {
      toRemove = "instagram.com";
    } else if (link.includes("patreon.com")) {
      toRemove = "patreon.com";
    } else if (link.includes("gmail.com")) {
      toRemove = "gmail.com";
    } else if (link.includes("youtube.com")) {
      toRemove = "youtube.com";
    }
    arr.forEach((item, i) => {
      if (item.includes(toRemove)) {
        indexToRemove = i;
      }
    });
    arr.splice(indexToRemove, 1, link);
    setLinks(arr);
  };
  const uneditablePart = (item) => {
    let comIndex = item.indexOf(".com");
    let st = item.substring(0, comIndex + 4);
    setUneditable(st);
  };
  const deleteLink = (i) => {
    let arr = links;
    arr.splice(i, 1);
    setLinks(arr);
  };

  const save = () => {
    let personalInfo = {
      about: about,
      dob: dob,
      location: location ? location.value : "",
      gender: gender,
      links: links,
    };
    axios.post(url, personalInfo).then((res) => {
      setUserData(res.data.user);
      changeAlert(res.data.message);
    });
  };

  useEffect(() => {
    if (userData.personalInfo) {
      if (userData.personalInfo.about) {
        setAbout(userData.personalInfo.about);
      }
      if (userData.personalInfo.dob) {
        setDob(userData.personalInfo.dob.substring(0, 10));
      }
      if (userData.personalInfo.gender) {
        setGender(userData.personalInfo.gender);
      }
      if (userData.personalInfo.location) {
        setLocation({
          label: userData.personalInfo.location,
          value: userData.personalInfo.location,
        });
      }
      if (userData.personalInfo.links) {
        setLinks(userData.personalInfo.links);
      }
    }
  }, []);

  return (
    <>
      <div className="headingSection">
        <span className="heading">Personal Info</span>
      </div>

      <div className="profile-items">
        {/* <div className="inputs inputs-personalInfo"> */}
        <div className="settings-group settings-group-personalInfo-textarea">
          <label htmlFor="about" className="settings-group-label">
            About
          </label>
          <textarea
            cols="54"
            rows="4"
            type="text"
            id="about"
            className="settings-group-textarea"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          ></textarea>
        </div>
        <div className="settings-group dob settings-group-personalInfo">
          <label htmlFor="dob" className="settings-group-label">
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            className="settings-group-input"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div className="settings-group settings-group-personalInfo">
          <label htmlFor="location" className="settings-group-label">
            Location
          </label>
          <Select
            id="location"
            styles={customStyles}
            className="location-select"
            classNamePrefix="select"
            defaultValue={COUNTRIES[0]}
            isDisabled={false}
            isLoading={false}
            isClearable={true}
            isRtl={false}
            isSearchable={true}
            name="color"
            options={COUNTRIES}
            value={location}
            onChange={(e) => {
              setLocation(e);
            }}
          />
        </div>
        <div className="settings-group">
          <label className="settings-group-label">Gender</label>
          <div className="radios" onChange={(e) => setGender(e.target.value)}>
            <label className="radio-container">
              <input
                type="radio"
                name="radio"
                value="Male"
                checked={gender === "Male"}
              />
              <span className="checkmark"></span>
              Male
            </label>
            <label className="radio-container">
              <input
                type="radio"
                name="radio"
                value="Female"
                checked={gender === "Female"}
              />
              <span className="checkmark"></span>
              Female
            </label>
            <label className="radio-container">
              <input
                type="radio"
                name="radio"
                value="Other"
                checked={gender === "Other"}
              />
              <span className="checkmark"></span>
              Other
            </label>
          </div>
        </div>
        {/* </div> */}
        <div className="settings-group link-label">
          <label className="settings-group-label labelLink">
            Links
            <span className="supported">
              (youtube, instagram, facebook, patreon, gmail)
            </span>
          </label>
          <div className="links">
            {links.map((item, i) => {
              return (
                <>
                  {checkLinkType(item) === "youtube" && (
                    <div
                      className="add"
                      key={item}
                      onClick={() => {
                        setLink(item);
                        uneditablePart(item);
                        toggleEditModalDisplay();
                        setIndex(i);
                      }}
                    >
                      <FaYoutube className="icon" />
                    </div>
                  )}
                  {checkLinkType(item) === "fb" && (
                    <div
                      className="add"
                      key={item}
                      onClick={() => {
                        setLink(item);
                        uneditablePart(item);
                        setIndex(i);
                        toggleEditModalDisplay();
                      }}
                    >
                      <FaFacebookSquare className="icon" />
                    </div>
                  )}
                  {checkLinkType(item) === "insta" && (
                    <div
                      className="add"
                      key={item}
                      onClick={() => {
                        setLink(item);
                        uneditablePart(item);
                        setIndex(i);
                        toggleEditModalDisplay();
                      }}
                    >
                      <AiFillInstagram className="icon" />
                    </div>
                  )}
                  {checkLinkType(item) === "patreon" && (
                    <div
                      className="add"
                      key={item}
                      onClick={() => {
                        setLink(item);
                        uneditablePart(item);
                        setIndex(i);
                        toggleEditModalDisplay();
                      }}
                    >
                      <FaPatreon className="icon" />
                    </div>
                  )}

                  {checkLinkType(item) === "gmail" && (
                    <div
                      className="add"
                      key={item}
                      onClick={() => {
                        setLink(item);
                        uneditablePart(item);
                        setIndex(i);
                        toggleEditModalDisplay();
                      }}
                    >
                      <SiGmail className="icon" />
                    </div>
                  )}
                </>
              );
            })}
            <div
              className="add"
              onClick={() => {
                setLink("");
                toggleModalDisplay();
              }}
            >
              <FaPlus className="icon" />
            </div>
          </div>
        </div>
        <span className="saveBtn" onClick={save}>
          Save Changes
        </span>
      </div>
      {showModal && (
        <div className="addExtraModal">
          <div className="modal">
            <span className="modal-heading">Add Links</span>
            <div className="modal-grp">
              <label className="modal-grp-label">Link</label>
              <input
                type="text"
                className="modal-grp-input"
                value={link}
                onChange={(e) => validateLink(e)}
              />
              <span className="modal-grp-msg">{message}</span>
            </div>

            <div className="modal-buttons">
              {linkValid && (
                <span
                  className="add-btn"
                  onClick={() => {
                    addLink();
                    toggleModalDisplay();
                    setMessage("");
                  }}
                >
                  Add Link
                </span>
              )}
              <span
                className="cancel-btn"
                onClick={() => {
                  toggleModalDisplay();
                  setMessage("");
                }}
              >
                Cancel
              </span>
            </div>
          </div>
        </div>
      )}

      {showEditModal && (
        <div className="addExtraModal ">
          <div className="modal editModal">
            <span className="modal-heading">Edit Links</span>
            <div className="modal-grp">
              <label className="modal-grp-label">Link</label>
              <input
                type="text"
                className="modal-grp-input"
                value={link}
                onChange={(e) => validateEditLink(e)}
              />
              <span className="modal-grp-msg">{message}</span>
            </div>

            <div className="modal-buttons">
              {linkValid && (
                <span
                  className="add-btn"
                  onClick={() => {
                    editLink();
                    toggleEditModalDisplay();
                    setMessage("");
                  }}
                >
                  Edit Link
                </span>
              )}
              <span
                className="delete-btn"
                onClick={() => {
                  deleteLink(index);
                  toggleEditModalDisplay();
                  setMessage("");
                }}
              >
                Delete
              </span>
              <span
                className="cancel-btn"
                onClick={() => {
                  toggleEditModalDisplay();
                  setMessage("");
                  setLinkValid(false);
                }}
              >
                Cancel
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Personal;
