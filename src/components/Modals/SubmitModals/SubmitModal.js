import React, { useState, useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { FaUpload } from "react-icons/fa";
import axios from "axios";
import { useGlobalContext } from "../../../context";
import Select from "react-select";

//-----------------------Firebase-----------------------
import firebase from "firebase/app";
import "firebase/storage";
var config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(config);
} else {
  firebase.app(); // if already initialized, use that one
}
var storage = firebase.storage();

//-----------------React Select-----------------
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    //borderBottom: "1px dotted pink",
    borderBottom: "1px solid #525050",
    //color: state.isSelected ? "red" : "#80808080",
    fontSize: 20,
    letterSpacing: 4,
    color: "#A8A8A8",
    //backgroundColor: "#323232",
    backgroundColor: state.isFocused ? "black" : "#323232",
    textAlign: "left",
    cursor: "pointer",
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: "#323232",
    border: "1px solid #525050",
  }),
  menuList: (base) => ({
    ...base,

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
    width: "100%",
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
    width: "100%",
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
  multiValue: (base) => ({
    ...base,
    backgroundColor: "black",
    paddingLeft: 8,
    marginRight: 7,
    marginTop: 7,
  }),
  multiValueLabel: (base) => ({
    ...base,
    color: "white",
    backgroundColor: "black",
    padding: 6,
  }),
  multiValueRemove: (base) => ({
    ...base,
    color: "red",
    "&:hover": {
      backgroundColor: "#F87A6E ",
      color: "white",
    },
  }),
  input: (base) => ({
    ...base,
    color: "white",
  }),
};

const SubmitModal = () => {
  const { closeSubmitModal, userData, changeAlert, loading, setLoading } =
    useGlobalContext();

  const [image, setImage] = useState("");
  const [toSendImage, setToSendImage] = useState("");

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [submittedTags, setSubmittedTags] = useState([]);

  const [isUploaded, setIsUploaded] = useState(false);

  const handleImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      setToSendImage(e.target.files[0]);
      reader.onload = (e) => {
        console.log("executed");
        setImage(e.target.result);
        setIsUploaded(true);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSelectChange = (e) => {
    setSubmittedTags(Array.isArray(e) ? e.map((x) => x.value) : []);
  };

  async function handleSubmit(e) {
    setLoading(1);
    e.preventDefault();
    let currentImageName = "image-" + Date.now();
    let uploadImage = storage
      .ref(`images/${currentImageName}`)
      .put(toSendImage);

    uploadImage.on(
      "state-changed",
      (snapshot) => {},
      (error) => {
        alert(error);
      },
      () => {
        storage
          .ref("images")
          .child(currentImageName)
          .getDownloadURL()
          .then((url) => {
            //const imageUrl = url;
            //const name = document.getElementById("title").value;
            //const desc = document.getElementById("desc").value;
            const post = {
              name: name,
              desc: desc,
              imageUrl: url,
              tags: submittedTags,
              author: { id: userData._id, username: userData.username },
            };
            axios
              .post(
                "https://shielded-woodland-79171.herokuapp.com/posts/newPost",
                post
              )
              .then((res) => {
                changeAlert(res.data.message);
              });
            setLoading(0);
            closeSubmitModal();
          });
      }
    );
  }

  //----------------Fetch Tags----------------
  const [tags, setTags] = useState([]);
  const fetchTags = async () => {
    await axios
      .get("https://shielded-woodland-79171.herokuapp.com/tags/fetchTags")
      .then((res) => setTags(res.data));
    //Initialize all data
  };
  useEffect(() => {
    fetchTags();
  }, []);
  return (
    <>
      <div className="submitModal">
        <div className="modal">
          <div className="modal-heading">Add your image</div>

          <form
            className="modal-form"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <div className="modal-form-inputs">
              <div className="form__group form__group--basic">
                <input
                  name="name"
                  type="text"
                  id="title"
                  className="form__input modal-form-inputs-input"
                  placeholder="title"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="title" className="form__label">
                  <span className="form__label__content">Title</span>
                </label>
              </div>
              {tags && (
                <div className="form__group form__group--basic">
                  <Select
                    className="form__input-select modal-form-inputs-select"
                    id="select"
                    styles={customStyles}
                    closeMenuOnSelect={false}
                    isMulti
                    options={tags}
                    placeholder={<div>Select Tags...</div>}
                    onChange={handleSelectChange}
                  />
                  <label htmlFor="select" className="form__label">
                    <span className="form__label__content">Tags</span>
                  </label>
                </div>
              )}
              <div className="form__group form__group--basic">
                <textarea
                  name="desc"
                  id="desc"
                  cols="40"
                  rows="4"
                  className="form__input-textarea modal-form-inputs-textarea"
                  autoComplete="off"
                  spellCheck="false"
                  placeholder="description"
                  onChange={(e) => setDesc(e.target.value)}
                ></textarea>
                <label htmlFor="desc" className="form__label">
                  <span className="form__label__content">Description</span>
                </label>
              </div>
            </div>

            {isUploaded ? (
              <>
                <div className="modal-form-imgHolder uploadedImg">
                  <img
                    src={image}
                    alt="uploaded pic"
                    className="modal-form-imgHolder-img"
                  />
                </div>
                <div className="modal-form-buttons">
                  <button className="add-btn" type="submit">
                    Submit
                  </button>
                  <span className="cancel-btn" onClick={closeSubmitModal}>
                    Cancel
                  </span>
                </div>
              </>
            ) : (
              <>
                <div className="modal-form-imgHolder">
                  <label htmlFor="fileInput" className="uploadLabel">
                    <FaUpload className="uploadIcon" />
                    <span className="uploadText">Click to Upload</span>
                  </label>
                  <input
                    id="fileInput"
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    onChange={handleImage}
                  />
                </div>
                <div className="modal-form-buttons">
                  <span className="cancel-btn" onClick={closeSubmitModal}>
                    Cancel
                  </span>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
      {/* <div className="loginModal">
        <div className="submitForm">
          <span className="closeIcon">
            <IoClose className="Icon" onClick={closeSubmitModal} />
          </span>

          <form
            className="form u-margin-top-big"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <div className="form__group form__group--basic">
              <input
                name="name"
                type="text"
                id="title"
                className="form__input"
                placeholder="title"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="title" className="form__label">
                <span className="form__label__content">Title</span>
              </label>
            </div>
            <div className="form__group form__group--basic">
              <textarea
                name="desc"
                id="desc"
                cols="40"
                rows="4"
                className="form__input-textarea"
                autoComplete="off"
                spellCheck="false"
                placeholder="description"
                onChange={(e) => setDesc(e.target.value)}
              ></textarea>
              <label htmlFor="desc" className="form__label">
                <span className="form__label__content">Description</span>
              </label>
            </div>

            {tags && (
              <div className="form__group form__group--basic">
                <Select
                  className="form__input-select"
                  id="select"
                  styles={customStyles}
                  closeMenuOnSelect={false}
                  isMulti
                  options={tags}
                  placeholder={<div>Select Tags...</div>}
                  onChange={handleSelectChange}
                />
                <label htmlFor="select" className="form__label">
                  <span className="form__label__content">Tags</span>
                </label>
              </div>
            )}

            {isUploaded ? (
              <>
                <div className="submitForm-image">
                  <img src={image} alt="uploaded pic" />
                </div>
              </>
            ) : (
              <>
                <div className="submitForm-imgHolder">
                  <label htmlFor="fileInput">
                    <span className="uploadIcon">
                      <FaUpload className="Icon" />
                    </span>
                  </label>
                  <label htmlFor="fileInput">
                    <span className="uploadText">Click to Upload</span>
                  </label>
                  <input
                    id="fileInput"
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    onChange={handleImage}
                  />
                </div>
              </>
            )}

            <button
              className="btn btn-submit u-margin-top-medium"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div> */}
    </>
  );
};

export default SubmitModal;
