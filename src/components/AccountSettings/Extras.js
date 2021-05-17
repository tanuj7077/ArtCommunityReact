import React, { useState, useEffect } from "react";
import axios from "axios";
import { useGlobalContext } from "../../context";

const Extras = () => {
  const { isLoggedIn, userData, setUserData } = useGlobalContext();
  const [showModal, setShowModal] = useState(false);

  const [tools, setTools] = useState("");
  const [favCategory, setFavCategory] = useState("");
  const [extras, setExtras] = useState([]);
  const [extraLabel, setExtraLabel] = useState("");
  const [extraValue, setExtraValue] = useState("");

  let url = "http://localhost:8000/users/user/editExtras/" + userData._id;

  const toggleModalDisplay = () => {
    setShowModal(!showModal);
  };

  const addField = () => {
    let extra = { label: extraLabel, value: extraValue };
    var arr = extras;
    arr.push(extra);
    setExtras(arr);
    console.log(extras);
  };

  const save = () => {
    var extrasInfo = {
      tools: tools,
      favCategory: favCategory,
      extra: extras,
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
        setFavCategory(userData.extras.favCategory);
      }
      if (userData.extras.extra) {
        setExtras(userData.extras.extra);
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
          {extras.map((item) => {
            return (
              <div
                key={item.label}
                className="settings-group settings-group-extras"
              >
                <label className="settings-group-label">{item.label}</label>
                <input
                  type="text"
                  className="settings-group-input"
                  value={item.value}
                  //onChange={(e) => setFavCategory(e.target.value)}
                />
              </div>
            );
          })}
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
              <input
                type="text"
                className="modal-grp-input"
                value={extraLabel}
                onChange={(e) => setExtraLabel(e.target.value)}
              />
            </div>
            <div className="modal-grp">
              <label className="modal-grp-label">Value</label>
              <textarea
                name="modal-textarea"
                id=""
                cols="45"
                rows="5"
                className="modal-grp-textarea"
                value={extraValue}
                onChange={(e) => setExtraValue(e.target.value)}
              ></textarea>
            </div>
            <div className="modal-buttons">
              <span
                className="add-btn"
                onClick={() => {
                  addField();
                  toggleModalDisplay();
                }}
              >
                Add Field
              </span>
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
