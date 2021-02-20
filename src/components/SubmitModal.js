import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaUpload } from "react-icons/fa";

import { useGlobalContext } from "../context";

const SubmitModal = () => {
  const [image, setImage] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);
  const { closeSubmitModal } = useGlobalContext();
  const handleImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();

      reader.onload = (e) => {
        setImage(e.target.result);
        setIsUploaded(true);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  return (
    <>
      <div className="loginModal">
        <div className="submitForm">
          <span className="closeIcon">
            <IoClose className="Icon" onClick={closeSubmitModal} />
          </span>

          <form className="form u-margin-top-big">
            <div class="form__group form__group--basic">
              <input
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
                autocomplete="off"
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
          </form>
        </div>
      </div>
    </>
  );
};

export default SubmitModal;
