import React, { useState, useEffect } from "react";

const Extras = () => {
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
        <span className="btn">Add More</span>
      </div>
    </>
  );
};
export default Extras;
