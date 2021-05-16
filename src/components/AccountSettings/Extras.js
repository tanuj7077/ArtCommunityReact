import React, { useState, useEffect } from "react";
import axios from "axios";
import { useGlobalContext } from "../../context";

const Extras = () => {
  const { isLoggedIn, userData, setUserData } = useGlobalContext();
  const [showModal, setShowModal] = useState(false);

  const [tools, setTools] = useState("");
  const [favCategory, setFavCategory] = useState("");

  let url = "http://localhost:8000/users/user/editExtras/" + userData._id;

  const toggleModalDisplay = () => {
    setShowModal(!showModal);
  };

  const save = () => {
    var extrasInfo = {
      tools: tools,
      favCategory: favCategory,
      extra: [],
    };
    axios.post(url, extrasInfo).then((res) => {
      console.log(res.data.extras);
      setUserData(res.data);
    });
  };

  useEffect(() => {
    if (userData.extras) {
      if (userData.extras.tools) {
        setTools(userData.extras.tools);
      }
      if (userData.extras.favCategory) {
        setTools(userData.extras.favCategory);
      }
    }
  }, []);

  return (
    <>
      <span className="heading">Extras</span>
      <span className="btn" onClick={save}>
        Save Changes
      </span>
      <div className="profile-items">
        <div className="inputs">
          <div className="settings-group settings-group-extras">
            <label className="settings-group-label">
              Preferred production tools
            </label>
            <input
              type="text"
              className="settings-group-input"
              value={tools}
              onChange={(e) => setTools(e.target.value)}
            />
          </div>
          <div className="settings-group settings-group-extras">
            <label className="settings-group-label">
              Favourite art / photography category
            </label>
            <input
              type="text"
              className="settings-group-input"
              value={favCategory}
              onChange={(e) => setFavCategory(e.target.value)}
            />
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
