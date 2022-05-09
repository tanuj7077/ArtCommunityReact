import React, { useState, useEffect } from "react";
import { Wrapper } from "../../assets/wrappers/SideNav";
import { NavLink } from "react-router-dom";
import { sideNavLinks } from "../../utils/sideNavLinks";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme, toggleSidebar } from "../../features/utilitySlice";

const SideNav = () => {
  const dispatch = useDispatch();
  const { isSidebarOpen, isDarkMode } = useSelector((store) => store.utility);
  const [links, setLinks] = useState(sideNavLinks);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

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
          return (
            <>
              {item.isLink ? (
                <NavLink
                  to={item.path}
                  key={`sideNavBig-${item.id}`}
                  onMouseEnter={() => changeHoveredItem(item.id)}
                  onMouseLeave={() => removeHoveredItem(item.id)}
                  onClick={() => {
                    if (item.changeAble) {
                      dispatch(toggleTheme());
                    }
                    isSidebarOpen && dispatch(toggleSidebar());
                  }}
                  className={`sideNavItem ${
                    item.protected && !isLoggedIn ? "sideNavItem-hidden" : ""
                  } ${item.isHovered ? "sideNavItem-hovered" : ""}`}
                >
                  <div className="icon">{item.icon}</div>
                  <div className="text">{item.text}</div>
                </NavLink>
              ) : (
                <div
                  key={`sideNavBig-${item.id}`}
                  onClick={() => {
                    if (item.changeAble) {
                      dispatch(toggleTheme());
                    }
                    isSidebarOpen && dispatch(toggleSidebar());
                  }}
                  onMouseEnter={() => changeHoveredItem(item.id)}
                  onMouseLeave={() => removeHoveredItem(item.id)}
                  className={`sideNavItem ${
                    item.protected && !isLoggedIn ? "sideNavItem-hidden" : ""
                  } ${item.isHovered ? "sideNavItem-hovered" : ""}`}
                >
                  <div className="icon">{item.icon}</div>
                  <div className="text">{item.text}</div>
                </div>
              )}
            </>
          );
        })}
      </div>
      <div className="sideBarMinimal">
        {links.map((item) => {
          return (
            <>
              {item.isLink ? (
                <NavLink
                  to={item.path}
                  key={`sideNavBig-${item.id}`}
                  onMouseEnter={() => changeHoveredItem(item.id)}
                  onMouseLeave={() => removeHoveredItem(item.id)}
                  onClick={() => {
                    if (item.changeAble) {
                      dispatch(toggleTheme());
                    }
                    isSidebarOpen && dispatch(toggleSidebar());
                  }}
                  className={`sideNavItem ${
                    item.protected && !isLoggedIn ? "sideNavItem-hidden" : ""
                  } ${item.isHovered ? "sideNavItem-hovered" : ""}`}
                >
                  <div className="icon">{item.icon}</div>
                </NavLink>
              ) : (
                <div
                  key={`sideNavBig-${item.id}`}
                  onMouseEnter={() => changeHoveredItem(item.id)}
                  onMouseLeave={() => removeHoveredItem(item.id)}
                  onClick={() => {
                    if (item.changeAble) {
                      dispatch(toggleTheme());
                    }
                    isSidebarOpen && dispatch(toggleSidebar());
                  }}
                  className={`sideNavItem ${
                    item.protected && !isLoggedIn ? "sideNavItem-hidden" : ""
                  } ${item.isHovered ? "sideNavItem-hovered" : ""}`}
                >
                  <div className="icon">{item.icon}</div>
                </div>
              )}
            </>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default SideNav;
