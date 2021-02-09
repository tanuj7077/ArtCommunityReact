import React from "react";
import { Link } from "react-router-dom";

const SideNavTopic = ({ topic }) => {
  return (
    <section className="sideNavTopic">
      <div className="sideNavTopic-container">
        <span className="sideNavTopic--title">{topic}</span>
      </div>
    </section>
  );
};

export default SideNavTopic;
