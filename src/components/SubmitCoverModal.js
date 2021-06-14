import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaUpload } from "react-icons/fa";
import axios from "axios";
import { useGlobalContext } from "../context";

//-----------------------Firebase-----------------------
import firebase from "firebase/app";
import "firebase/storage";
// var config = {
//   apiKey: "AIzaSyDvMwMxRmt0N_On1efH-eHN5n6vz3DIqyw",
//   authDomain: "artcomm707.firebaseapp.com",
//   projectId: "artcomm707",
//   storageBucket: "artcomm707.appspot.com",
//   messagingSenderId: "1015814439095",
//   appId: "1:1015814439095:web:d0b3ed402203702c9b8d32",
//   measurementId: "G-HC2QXZ27V4",
// };
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

const SubmitCoverModal = () => {
  const {
    userData,
    closeSubmitCoverModal,
    setUserData,
    changeAlert,
  } = useGlobalContext();

  const [coverImage, setCoverImage] = useState("");
  const [toSendCoverImage, setToSendCoverImage] = useState("");
  const [isCoverUploaded, setIsCoverUploaded] = useState(false);

  const handleImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      setToSendCoverImage(e.target.files[0]);

      reader.onload = (e) => {
        setCoverImage(e.target.result);
        setIsCoverUploaded(true);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  async function handleSubmit(e) {
    console.log("submit pressed");
    e.preventDefault();
    let currentImageName = "image-" + Date.now();
    let uploadImage = storage
      .ref(`coverPhotos/${currentImageName}`)
      .put(toSendCoverImage);

    uploadImage.on(
      "state-changed",
      (snapshot) => {},
      (error) => {
        alert(error);
      },
      () => {
        storage
          .ref("coverPhotos")
          .child(currentImageName)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            const User = {
              userId: userData._id,
              imageUrl: url,
            };
            axios.post("/users/user/changeCover", User).then((res) => {
              // if (userData.username === res.data.username) {
              //   setUserData(res.data);
              // }
              if (userData.username === res.data.user.username) {
                setUserData(res.data.user);
              }
              changeAlert(res.data.message);
            });
            closeSubmitCoverModal();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    );
  }
  return (
    <>
      <div className="addExtrasModal">
        <div className="modal">
          <span className="modal-heading">Add Cover Photo</span>

          <form
            className="modal-form"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            {isCoverUploaded ? (
              <>
                <div className="modal-photo">
                  <img
                    src={coverImage}
                    alt="coverImg"
                    className="modal-photo-img"
                  />
                </div>
                <div className="modal-buttons">
                  <button className="add-btn" type="submit">
                    Submit
                  </button>
                  <span className="cancel-btn" onClick={closeSubmitCoverModal}>
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
                  <span className="cancel-btn" onClick={closeSubmitCoverModal}>
                    Cancel
                  </span>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default SubmitCoverModal;
