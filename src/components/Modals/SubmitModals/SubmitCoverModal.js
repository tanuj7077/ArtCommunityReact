import React, { useState } from "react";
import axios from "axios";
import { useGlobalContext } from "../../../context";
import { FaUpload } from "../../../commonImports/reactIcons";
import { FIREBASE_CONFIG } from "../../../constants";

//-----------------------Firebase-----------------------
import firebase from "firebase/app";
import "firebase/storage";
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG);
} else {
  firebase.app(); // if already initialized, use that one
}
let storage = firebase.storage();

const SubmitCoverModal = () => {
  const {
    userData,
    closeSubmitCoverModal,
    setUserData,
    changeAlert,
    loading,
    setLoading,
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

  const handleDelete = async (e) => {
    setLoading(1);
    e.preventDefault();
    if (userData.coverPhoto) {
      let imageUrl = userData.coverPhoto.slice(69, -1);
      let ar = imageUrl
        .split("%2F")
        .join(",")
        .split("?")
        .join(",")
        .split("/")[0]
        .split(",");
      let imageName = ar[1];
      let firebaseFolder = ar[0];
      try {
        storage
          .ref(firebaseFolder)
          .child(imageName)
          .delete()
          .then(() => {
            console.log("Old cover photo deleted");
            handleSubmit();
          });
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("Adding new cover photo");
      handleSubmit();
    }
  };
  async function handleSubmit() {
    setLoading(1);
    //e.preventDefault();
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
            const User = {
              userId: userData._id,
              imageUrl: url,
            };
            axios
              .post(
                `${process.env.REACT_APP_BASE_URL}/users/user/changeCover`,
                User
              )
              .then((res) => {
                // if (userData.username === res.data.username) {
                //   setUserData(res.data);
                // }
                if (userData.username === res.data.user.username) {
                  setUserData(res.data.user);
                }
                changeAlert(res.data.message);
              });
            setLoading(0);
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
            onSubmit={handleDelete}
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
                  {!loading && (
                    <button className="add-btn" type="submit">
                      Submit
                    </button>
                  )}
                  {!loading && (
                    <span
                      className="cancel-btn"
                      onClick={closeSubmitCoverModal}
                    >
                      Cancel
                    </span>
                  )}
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
