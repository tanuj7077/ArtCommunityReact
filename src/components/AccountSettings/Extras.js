import React, { useState, useEffect } from "react";

const Extras = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModalDisplay = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <span className="heading">Extras</span>
      <div className="profile-items">
        <div className="inputs">
          <div className="settings-group">
            <label className="settings-group-label">
              Preferred production tools
            </label>
            <input type="text" className="settings-group-input long" />
          </div>
          <div className="settings-group">
            <label className="settings-group-label">
              Favourite art / photography category
            </label>
            <input type="text" className="settings-group-input long" />
          </div>
        </div>
        <span className="btn" onClick={toggleModalDisplay}>
          Add More
        </span>
      </div>
      {showModal && (
        <div className="addExtrasModal">
          <div className="modal">
            <span className="modal-heading">Add another Field</span>
            <div className="modal-grp">
              <label className="modal-grp-label">Label</label>
              <input type="text" className="modal-grp-input" />
            </div>
            <div className="modal-grp">
              <label className="modal-grp-label">Value</label>
              <textarea
                name="modal-textarea"
                id=""
                cols="45"
                rows="5"
                className="modal-grp-textarea"
              ></textarea>
            </div>
            <div className="modal-buttons">
              <span className="add-btn">Add Field</span>
              <span className="cancel-btn" onClick={toggleModalDisplay}>
                Cancel
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Extras;
