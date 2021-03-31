import React, { useState, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { FaUpload } from "react-icons/fa";
import axios from "axios";
import AvatarEditor from "react-avatar-editor";
import { useGlobalContext } from "../context";

//-----------------------Firebase-----------------------
import firebase from "firebase/app";
import "firebase/storage";
var config = {
  apiKey: "AIzaSyDvMwMxRmt0N_On1efH-eHN5n6vz3DIqyw",
  authDomain: "artcomm707.firebaseapp.com",
  projectId: "artcomm707",
  storageBucket: "artcomm707.appspot.com",
  messagingSenderId: "1015814439095",
  appId: "1:1015814439095:web:d0b3ed402203702c9b8d32",
  measurementId: "G-HC2QXZ27V4",
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
  } = useGlobalContext();

  const [profileImage, setProfileImage] = useState("");
  const [toSendProfileImage, setToSendProfileImage] = useState("");
  const [isProfileUploaded, setIsProfileUploaded] = useState(false);
  const [borderRadius, setBorderRadius] = useState(0);
  const [angle, setAngle] = useState(0);
  const [scale, setScale] = useState(1);
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
                };
                axios
                  .post("http://localhost:8000/users/user/changeProfile", User)
                  .then((res) => {
                    console.log(res.data);
                    if (userData.username === res.data.username) {
                      setUserData(res.data);
                    }
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

  return (
    <>
      <div className="loginModal">
        <div className="submitForm">
          <span className="closeIcon">
            <IoClose className="Icon" onClick={closeSubmitProfilePicModal} />
          </span>

          <form
            className="form u-margin-top-big"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            {isProfileUploaded ? (
              <>
                <div className="submitForm-image">
                  <AvatarEditor
                    ref={setEditorRef}
                    image={profileImage}
                    width={250}
                    height={250}
                    scale={scale}
                    borderRadius={borderRadius}
                    rotate={angle}
                  />
                  {/* <img src={profileImage} alt="profileImg" /> */}
                </div>
              </>
            ) : (
              <>
                <div className="submitForm-imgHolder coverImageHolder u-margin-bottom-medium">
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

            <input
              type="range"
              min="0"
              max="125"
              value={borderRadius}
              class="slider"
              id="borderRadius"
              onChange={(e) => setBorderRadius(e.target.value)}
            ></input>
            <input
              type="range"
              min="0"
              max="360"
              value={angle}
              class="slider"
              id="rotation"
              onChange={(e) => setAngle(e.target.value)}
            ></input>
            <input
              type="range"
              min="1"
              max="2"
              step="0.01"
              value={scale}
              class="slider"
              id="scale"
              onChange={(e) => setScale(e.target.value)}
            ></input>

            <button className="btn btn-submit" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SubmitProfilePicModal;
