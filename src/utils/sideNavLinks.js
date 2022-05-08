import {
  AiFillHome,
  IoPeople,
  FaWpexplorer,
  MdAccountCircle,
  IoMdPower,
  MdDarkMode,
  BsFillSunFill,
} from "../commonImports/reactIcons";

export const sideNavLinks = [
  {
    id: 1,
    text: "home",
    path: "/",
    icon: <AiFillHome />,
    isLink: true,
    changeAble: false,
    protected: false,
    isHovered: false,
  },
  {
    id: 2,
    text: "topics",
    path: "explore",
    icon: <FaWpexplorer />,
    isLink: true,
    changeAble: false,
    protected: false,
    isHovered: false,
  },
  {
    id: 3,
    text: "followed",
    path: "followed",
    icon: <IoPeople />,
    isLink: true,
    changeAble: false,
    protected: true,
    isHovered: false,
  },
  {
    id: 4,
    text: "settings",
    path: "account",
    icon: <MdAccountCircle />,
    isLink: true,
    changeAble: false,
    protected: true,
    isHovered: false,
  },
  {
    id: 5,
    selected: 0,
    text: "Dark Mode",
    textOptions: ["Dark Mode", "Light Mode"],
    icon: <MdDarkMode />,
    icons: [<MdDarkMode />, <BsFillSunFill />],
    isLink: false,
    changeAble: true,
    protected: false,
    isHovered: false,
  },
  {
    id: 6,
    text: "logout",
    icon: <IoMdPower />,
    isLink: false,
    changeAble: false,
    protected: true,
    isHovered: false,
  },
];
