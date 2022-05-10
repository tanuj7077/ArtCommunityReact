import React, { useState, useEffect } from "react";
import { Wrapper } from "../../assets/wrappers/SideNav";
import { NavLink } from "react-router-dom";
import { sideNavLinks } from "../../utils/sideNavLinks";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme, toggleSidebar } from "../../features/utilitySlice";
import { logoutUser } from "../../features/userSlice";

const SideNav = () => {
  const dispatch = useDispatch();
  const { isSidebarOpen, isDarkMode } = useSelector((store) => store.utility);
  const { user } = useSelector((store) => store.user);
  const [links, setLinks] = useState(sideNavLinks);

  const changeHoveredItem = (id) => {
    setLinks(
      links.map((item) => {
        if (item.id === id) {
          item.isHovered = true;
        }
        return item;
      })
    );
  };
  const removeHoveredItem = (id) => {
    setLinks(
      links.map((item) => {
        if (item.id === id) {
          item.isHovered = false;
        }
        return item;
      })
    );
  };

  // sideNav will have home, topic, light/dark, followed, settings, logout
  return (
    <Wrapper>
      <div
        className={`sideBarFull ${!isSidebarOpen ? "sideBarFull-hidden" : ""}`}
      >
        {links.map((item) => {
          if (item.protected && !user) return null;
          return (
            <div key={`sideNavBig-${item.id}`}>
              {item.isLink ? (
                <NavLink
                  to={item.path}
                  onMouseEnter={() => changeHoveredItem(item.id)}
                  onMouseLeave={() => removeHoveredItem(item.id)}
                  onClick={() => {
                    if (item.changeAble) {
                      dispatch(toggleTheme());
                    }
                    if (item.type === "logout") {
                      dispatch(logoutUser("Logging out..."));
                      removeHoveredItem(item.id);
                    }
                    isSidebarOpen && dispatch(toggleSidebar());
                  }}
                  className={`sideNavItem ${
                    item.isHovered ? "sideNavItem-hovered" : ""
                  }`}
                >
                  <div className="icon">{item.icon}</div>
                  <div className="text">{item.text}</div>
                </NavLink>
              ) : (
                <div
                  onClick={() => {
                    if (item.changeAble) {
                      dispatch(toggleTheme());
                    }
                    if (item.type === "logout") {
                      dispatch(logoutUser("Logging out..."));
                      removeHoveredItem(item.id);
                    }
                    isSidebarOpen && dispatch(toggleSidebar());
                  }}
                  onMouseEnter={() => changeHoveredItem(item.id)}
                  onMouseLeave={() => removeHoveredItem(item.id)}
                  className={`sideNavItem ${
                    item.isHovered ? "sideNavItem-hovered" : ""
                  }`}
                >
                  <div className="icon">{item.icon}</div>
                  <div className="text">{item.text}</div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="sideBarMinimal">
        {links.map((item) => {
          if (item.protected && !user) return null;
          return (
            <div key={`sideNavMinimal-${item.id}`}>
              {item.isLink ? (
                <NavLink
                  to={item.path}
                  onMouseEnter={() => changeHoveredItem(item.id)}
                  onMouseLeave={() => removeHoveredItem(item.id)}
                  onClick={() => {
                    if (item.changeAble) {
                      dispatch(toggleTheme());
                    }
                    if (item.type === "logout") {
                      dispatch(logoutUser("Logging out..."));
                      removeHoveredItem(item.id);
                    }
                    isSidebarOpen && dispatch(toggleSidebar());
                  }}
                  className={`sideNavItem ${
                    item.isHovered ? "sideNavItem-hovered" : ""
                  }`}
                >
                  <div className="icon">{item.icon}</div>
                </NavLink>
              ) : (
                <div
                  onMouseEnter={() => changeHoveredItem(item.id)}
                  onMouseLeave={() => removeHoveredItem(item.id)}
                  onClick={() => {
                    if (item.changeAble) {
                      dispatch(toggleTheme());
                    }
                    if (item.type === "logout") {
                      dispatch(logoutUser("Logging out..."));
                      removeHoveredItem(item.id);
                    }
                    isSidebarOpen && dispatch(toggleSidebar());
                  }}
                  className={`sideNavItem ${
                    item.isHovered ? "sideNavItem-hovered" : ""
                  }`}
                >
                  <div className="icon">{item.icon}</div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default SideNav;
