import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { FaUpload } from "react-icons/fa";
import axios from "axios";
import { useGlobalContext } from "../../../context";
import { tags } from "../../../constants";

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

const SubmitModal2 = () => {
  const {
    userData,
    closeSubmitModal2,
    changeAlert,
    loading,
    setLoading,
    submitModal2,
  } = useGlobalContext();

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [tagInput, setTagInput] = useState("");

  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [image, setImage] = useState("");
  const [toSendImage, setToSendImage] = useState("");

  const handleImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      setToSendImage(e.target.files[0]);

      reader.onload = (e) => {
        setImage(e.target.result);
        setIsImageUploaded(true);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  }; //----------------Fetch Tags----------------
  const [selectedTags, setSelectedTags] = useState([]);

  const addToCategories = (tag) => {
    let newList = [...selectedTags];
    if (!newList.includes(tag)) {
      newList.push(tag);
      setSelectedTags(newList);
    }
  };
  const removeFromCategories = (tag) => {
    let newList = [...selectedTags];
    let index;
    newList.forEach((item, i) => {
      if (item === tag) {
        index = i;
      }
    });
    newList.splice(index, 1);
    setSelectedTags(newList);
  };

  const setDefault = () => {
    setImage("");
    setToSendImage("");
    setName("");
    setDesc("");
    setTagInput("");
    setSelectedTags([]);
    setIsImageUploaded(false);
  };

  async function handleSubmit() {
    setLoading(1);
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
            const post = {
              name: name,
              desc: desc,
              imageUrl: url,
              tags: selectedTags,
              author: { id: userData._id, username: userData.username },
            };
            axios
              .post(`${process.env.REACT_APP_BASE_URL}/posts/newPost`, post)
              .then((res) => {
                changeAlert(res.data.message);
                setDefault();
              });
            setLoading(0);
            closeSubmitModal2();
          });
      }
    );
  }
  return (
    <>
      {submitModal2 && (
        <div className="SubmitModal">
          <div
            className="SubmitModal-overlay"
            onClick={() => {
              closeSubmitModal2();
              setDefault();
            }}
          ></div>
          <div className="SubmitModal-modal">
            <IoClose
              className="closeIcon"
              onClick={() => {
                closeSubmitModal2();
                setDefault();
              }}
            />
            <div className="heading">Add Image</div>
            <div className="content">
              <div className="content-container">
                <div className="content-container-imgContainer">
                  {!isImageUploaded ? (
                    <>
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
                    </>
                  ) : (
                    <img
                      src={image}
                      alt="coverImg"
                      className="img"
                      onClick={setDefault}
                    />
                  )}
                </div>
                {isImageUploaded && (
                  <div className="content-container-textual">
                    <div className="content-container-textual-formGrp">
                      <label>name</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="content-container-textual-formGrp">
                      <label>Description</label>
                      <textarea
                        type="text"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                      ></textarea>
                    </div>
                    <div className="content-container-textual-tags">
                      <div className="tags">
                        <label>Tags:</label>
                        <ul className="selectedTags">
                          {selectedTags.map((tag) => {
                            return (
                              <li
                                key={`selectedTag_${tag}`}
                                className="selectedTags-tag"
                                onClick={() => removeFromCategories(tag)}
                              >
                                {tag}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                      <input
                        placeholder="search"
                        type="text"
                        value={tagInput}
                        onChange={(e) => setTagInput(e.target.value)}
                      />
                      <ul className="list">
                        {tags
                          .filter((item) => {
                            return item.includes(tagInput);
                          })
                          .map((tag) => {
                            return (
                              <li
                                key={`listTag_${tag}`}
                                className="list-item"
                                onClick={() => addToCategories(tag)}
                              >
                                {tag}
                              </li>
                            );
                          })}
                      </ul>
                    </div>
                  </div>
                )}
                {name.length > 0 && (
                  <button
                    className="content-container-btn"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
  /*return (
    <>
      <div className="addExtrasModal">
        <div className="modal">
          <span className="modal-heading">Add Image</span>

          <form className="modal-form" encType="multipart/form-data">
            {isImageUploaded ? (
              <>
                <div className="modal-photo">
                  <img
                    src={image}
                    alt="coverImg"
                    className="modal-photo-img"
                    onClick={() => {
                      setImage("");
                      setToSendImage("");
                      setIsImageUploaded(false);
                    }}
                  />
                </div>
                <div className="modal-buttons">
                  {!loading && (
                    <button className="add-btn" type="submit">
                      Submit
                    </button>
                  )}
                  {!loading && (
                    <span className="cancel-btn" onClick={closeSubmitModal2}>
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
                  <span className="cancel-btn" onClick={closeSubmitModal2}>
                    Cancel
                  </span>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );*/
};

export default SubmitModal2;
