import React, { useState } from "react";
import axios from "axios";
import { useGlobalContext } from "../../../context";
import { TAGS } from "../../../constants";
import { IoClose, FaUpload } from "../../../commonImports/reactIcons";
import { FIREBASE_CONFIG } from "../../../constants";
import imageCompression from "browser-image-compression";

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

const SubmitModal = () => {
  const { userData, closeSubmitModal, changeAlert, setLoading, submitModal } =
    useGlobalContext();

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [tagInput, setTagInput] = useState("");

  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [image, setImage] = useState("");
  const [files, setFiles] = useState([0, 0, 0]);
  const [urls, setUrls] = useState([0, 0, 0]);

  let options1 = {
    maxSizeMB: 0.15,
    maxWidthOrHeight: 1000,
    useWebWorker: true,
  };
  let options2 = {
    maxSizeMB: 0.015,
    maxWidthOrHeight: 300,
    useWebWorker: true,
  };

  const handleImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      //setToSendImage(e.target.files[0]);
      imageCompression(e.target.files[0], options1).then((compressed) => {
        let f = files;
        f[0] = e.target.files[0];
        f[1] = compressed;
        setFiles(f);
        //setToSendImageMd(compressed);
      });
      imageCompression(e.target.files[0], options2).then((compressed) => {
        let f = files;
        f[2] = compressed;
        setFiles(f);
        //setToSendImageThumb(compressed);
      });
      //setFiles([e.target.files[0], toSendImageMd, toSendImageThumb]);

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
    setName("");
    setDesc("");
    setTagInput("");
    setSelectedTags([]);
    setFiles([0, 0, 0]);
    setUrls([0, 0, 0]);
    setIsImageUploaded(false);
  };

  async function handleSubmit() {
    setLoading(1);
    let currentImageName = "image-" + Date.now();
    const promises = [];
    files.forEach((file, index) => {
      const uploadTask = storage
        .ref()
        .child(`images/${currentImageName + index.toString()}`)
        .put(file);

      promises.push(uploadTask);

      uploadTask.on(
        "state-changed",
        (snapshot) => {},
        (error) => {
          alert(error);
        },
        async () => {
          await storage
            .ref("images")
            .child(currentImageName + index.toString())
            .getDownloadURL()
            .then((url) => {
              let u = urls;
              u[index] = url;
              setUrls(u);
            });
        }
      );
    });

    Promise.all(promises)
      .then((d) => {
        setTimeout(() => {
          const post = {
            name: name,
            desc: desc,
            imageUrl: urls[0],
            imageMdUrl: urls[1],
            imageThumbUrl: urls[2],
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
          closeSubmitModal();
        }, 4000);
      })
      .catch((err) => console.log(err.code));
  }
  return (
    <>
      {submitModal && (
        <div className="SubmitModal">
          <div
            className="SubmitModal-overlay"
            onClick={() => {
              closeSubmitModal();
              setDefault();
            }}
          ></div>
          <div className="SubmitModal-modal">
            <IoClose
              className="closeIcon"
              onClick={() => {
                closeSubmitModal();
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
                        {TAGS.filter((item) => {
                          return item.includes(tagInput);
                        }).map((tag) => {
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
};

export default SubmitModal;
