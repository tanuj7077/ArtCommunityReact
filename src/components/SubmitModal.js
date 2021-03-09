import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaUpload } from "react-icons/fa";
import axios from "axios";
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

const SubmitModal = () => {
  const [image, setImage] = useState("");
  const [toSendImage, setToSendImage] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);
  const { closeSubmitModal } = useGlobalContext();
  const handleImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      setToSendImage(e.target.files[0]);

      reader.onload = (e) => {
        setImage(e.target.result);
        setIsUploaded(true);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const handleSubmit = (e) => {
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
            const imageUrl = url;
            const name = document.getElementById("title").value;
            const desc = document.getElementById("desc").value;
            const post = {
              name: name,
              desc: desc,
              imageUrl: imageUrl,
            };
            axios
              .post("http://localhost:8000/posts/newPost", post)
              .then((res) => console.log(res.data));
            closeSubmitModal();
          });
      }
    );
  };
  return (
    <>
      <div className="loginModal">
        <div className="submitForm">
          <span className="closeIcon">
            <IoClose className="Icon" onClick={closeSubmitModal} />
          </span>

          <form
            className="form u-margin-top-big"
            onSubmit={handleSubmit}
            enctype="multipart/form-data"
          >
            <div class="form__group form__group--basic">
              <input
                name="name"
                type="text"
                id="title"
                className="form__input"
                placeholder="title"
                required
              />
              <label htmlFor="title" className="form__label">
                <span class="form__label__content">Title</span>
              </label>
            </div>
            <div class="form__group form__group--basic">
              <textarea
                name="desc"
                id="desc"
                cols="40"
                rows="4"
                className="form__input-textarea"
                autoComplete="off"
                spellCheck="false"
                placeholder="description"
              ></textarea>
              <label htmlFor="desc" className="form__label">
                <span class="form__label__content">Description</span>
              </label>
            </div>

            {isUploaded ? (
              <>
                <div className="submitForm-image">
                  <img src={image} alt="uploaded image" />
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

            <div className="submitForm-tags">Tags</div>
            <button className="btn btn-submit" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SubmitModal;