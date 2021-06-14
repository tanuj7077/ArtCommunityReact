import React, { useState, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { FaUpload } from "react-icons/fa";
import axios from "axios";
import AvatarEditor from "react-avatar-editor";
import { useGlobalContext } from "../../../context";

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

const SubmitProfilePicModal = () => {
  const {
    userData,
    closeSubmitProfilePicModal,
    setUserData,
    changeAlert,
  } = useGlobalContext();

  const [profileImage, setProfileImage] = useState("");
  const [toSendProfileImage, setToSendProfileImage] = useState("");
  const [isProfileUploaded, setIsProfileUploaded] = useState(false);
  const [borderRadius, setBorderRadius] = useState(0);
  const [cssBorderRad, setCssBorderRad] = useState(0);
  const [angle, setAngle] = useState(0);
  const [scale, setScale] = useState(1);
  const [submitEnable, setSubmitEnable] = useState(false);
  const handleImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      setToSendProfileImage(e.target.files[0]);

      reader.onload = (e) => {
        setProfileImage(e.target.result);
        setIsProfileUploaded(true);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  let setEditorRef = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();

    const canvasScaled = setEditorRef.current
      .getImageScaledToCanvas()
      .toDataURL("image/jpg");

    let imageURL;
    fetch(canvasScaled)
      .then((res) => res.blob())
      .then((blob) => {
        imageURL = window.URL.createObjectURL(blob);
        let currentImageName = "image-" + Date.now();
        let uploadImage = storage
          .ref(`profilePics/${currentImageName}`)
          .put(blob);
        //.put(toSendProfileImage);

        uploadImage.on(
          "state-changed",
          (snapshot) => {},
          (error) => {
            alert(error);
          },
          () => {
            storage
              .ref("profilePics")
              .child(currentImageName)
              .getDownloadURL()
              .then((url) => {
                console.log(url);
                const User = {
                  userId: userData._id,
                  imageUrl: url,
                  borderRad: cssBorderRad,
                };
                axios.post("/users/user/changeProfile", User).then((res) => {
                  if (userData.username === res.data.user.username) {
                    setUserData(res.data.user);
                  }
                  changeAlert(res.data.message);
                });
                closeSubmitProfilePicModal();
              })
              .catch((err) => {
                console.log(err);
              });
          }
        );
      });
  }
  const handleBorderRad = (e) => {
    setBorderRadius(e.target.value);
    setCssBorderRad((e.target.value * 50) / 125);
  };

  return (
    <>
      <div className="addExtrasModal">
        <div className="modal">
          <span className="modal-heading">Add Profile Photo</span>
          {/* <span className="closeIcon">
            <IoClose className="Icon" onClick={closeSubmitProfilePicModal} />
          </span> */}

          <form
            className="modal-form"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            {isProfileUploaded ? (
              <>
                <div className="modal-photo">
                  <AvatarEditor
                    ref={setEditorRef}
                    image={profileImage}
                    width={250}
                    height={250}
                    scale={scale}
                    borderRadius={borderRadius}
                    rotate={angle}
                  />
                </div>
                <div className="modal-sliders">
                  <div className="inputSlider">
                    <label
                      htmlFor="borderRadius"
                      className="inputSlider--label"
                    >
                      Border Radius:{" "}
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="126"
                      value={borderRadius}
                      className="inputSlider--slider"
                      id="borderRadius"
                      onChange={(e) => handleBorderRad(e)}
                    ></input>
                  </div>
                  <div className="inputSlider">
                    <label htmlFor="rotation" className="inputSlider--label">
                      Rotation:{" "}
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="360"
                      value={angle}
                      className="inputSlider--slider"
                      id="rotation"
                      onChange={(e) => setAngle(e.target.value)}
                    ></input>
                  </div>
                  <div className="inputSlider">
                    <label htmlFor="scale" className="inputSlider--label">
                      Scale:{" "}
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="2"
                      step="0.01"
                      value={scale}
                      className="inputSlider--slider"
                      id="scale"
                      onChange={(e) => setScale(e.target.value)}
                    ></input>
                  </div>
                </div>

                <div className="modal-buttons">
                  <button className="add-btn" type="submit">
                    Submit
                  </button>
                  <span
                    className="cancel-btn"
                    onClick={closeSubmitProfilePicModal}
                  >
                    Cancel
                  </span>
                </div>
              </>
            ) : (
              <>
                <div className="modal-photo">
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
                <div className="modal-buttons">
                  <span
                    className="cancel-btn"
                    onClick={closeSubmitProfilePicModal}
                  >
                    Cancel
                  </span>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
      <></>
    </>
  );
};

export default SubmitProfilePicModal;