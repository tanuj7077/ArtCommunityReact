import React from "react";

import car from "./tagImage/car.jpg";
import city from "./tagImage/city.jpg";
import insect from "./tagImage/insect.jpg";
import monochrome from "./tagImage/monochrome.jpg";
import landscape from "./tagImage/landscape.jpg";
import summer from "./tagImage/summer.jpg";
import river from "./tagImage/river.jpg";
import sky from "./tagImage/sky.jpg";

import fanart from "./tagImage/fanart.jpg";
import photography from "./tagImage/photography.jpg";
import snow from "./tagImage/snow.jpg";
import tree from "./tagImage/tree.jpg";
import waterColor from "./tagImage/waterColor.jpg";
import bird from "./tagImage//bird.jpg";

export const tags = [
  {
    id: "1tag",
    image: car,
    name: "Car",
  },
  {
    id: "2tag",
    image: city,
    name: "City",
  },
  {
    id: "3tag",
    image: insect,
    name: "Insect",
  },
  {
    id: "4tag",
    image: monochrome,
    name: "Monochrome",
  },
  {
    id: "5tag",
    image: landscape,
    name: "Landscapes",
  },
  {
    id: "6tag",
    image: summer,
    name: "Summer",
  },
  {
    id: "7tag",
    image: river,
    name: "River",
  },
  {
    id: "8tag",
    image: sky,
    name: "Sky",
  },
];

export const Posts = [
  {
    id: "Post1",
    image: car,
    name: "car",
    author: "u1",
    likes: 5,
    comments: 3,
    commentArr: ["c1", "c2", "c3"],
    likesArr: ["u3", "u2", "u4", "u7"],
  },
  {
    id: "Post2",
    image: city,
    name: "city",
    author: "u2",
    likes: 5,
    comments: 2,
    commentArr: ["c1", "c2"],
    likesArr: ["u3", "u1", "u4", "u7", "u5"],
  },
  {
    id: "Post3",
    image: fanart,
    name: "fanart",
    author: "u3",
    likes: 4,
    comments: 3,
    commentArr: ["c1", "c2", "c3"],
    likesArr: ["u3", "u2", "u4", "u7"],
  },
  {
    id: "Post4",
    image: landscape,
    name: "landscape",
    author: "u4",
    likes: 10,
    comments: 2,
    commentArr: ["c1", "c2"],
    likesArr: ["u3", "u2", "u4", "u7"],
  },
  {
    id: "Post5",
    image: photography,
    name: "photography",
    author: "u5",
    likes: 5,
    comments: 2,
    commentArr: ["c1", "c2"],
    likesArr: ["u3", "u2", "u4", "u7"],
  },
  {
    id: "Post6",
    image: snow,
    name: "snow",
    author: "u6",
    likes: 20,
    comments: 3,
    commentArr: ["c1", "c5", "c6"],
    likesArr: ["u3", "u2", "u4", "u7"],
  },
  {
    id: "Post7",
    image: tree,
    name: "tree",
    author: "u7",
    likes: 5,
    comments: 3,
    commentArr: ["c1", "c2", "c8"],
    likesArr: ["u3", "u2", "u4", "u7"],
  },
  {
    id: "Post8",
    image: waterColor,
    name: "waterColor",
    author: "u8",
    likes: 8,
    comments: 2,
    commentArr: ["c1", "c2"],
    likesArr: ["u3", "u2", "u4", "u7"],
  },
];

export const account = [
  {
    id: "1acc",
    name: "Account Settings",
    link: "#",
  },
  {
    id: "2acc",
    name: "Theme",
    link: "#",
  },
  {
    id: "3acc",
    name: "Logout",
    link: "#",
  },
];

export const notifications = [
  {
    id: "1not",
    name: "has sent you a friend request",
    sub: "Skank707",
  },
  {
    id: "2not",
    name: "got you 1k likes",
    sub: "Beautiful Nature",
  },
  {
    id: "3not",
    name: "now follows you",
    sub: "DwayneJohn",
  },
];
export const LoggedInSideNavItems = [
  {
    id: "side1",
    id2: "sideExp1",
    classname: "1",
    name: "home",
    icon: "home",
    link: "",
  },
  {
    id: "side2",
    id2: "sideExp2",
    classname: "2",
    name: "followed",
    icon: "people",
    link: "followed",
  },
  {
    id: "side3",
    id2: "sideExp3",
    classname: "3",
    name: "daily",
    icon: "today",
    link: "daily",
  },
  {
    id: "side4",
    id2: "sideExp4",
    classname: "4",
    name: "topic",
    icon: "image_search",
    link: "explore",
  },
  {
    id: "side5",
    id2: "sideExp5",
    classname: "5",
    name: "popular",
    icon: "new_releases",
    link: "popular",
  },
  {
    id: "side6",
    id2: "sideExp6",
    classname: "6",
    name: "new",
    icon: "fiber_new",
    link: "new",
  },
  {
    id: "side7",
    id2: "sideExp7",
    classname: "7",
    name: "poll",
    icon: "poll",
    link: "poll",
  },
];
export const SideNavItems = [
  {
    id: "side1",
    id2: "sideExp1",
    classname: "1",
    name: "home",
    icon: "home",
    link: "",
  },
  {
    id: "side2",
    id2: "sideExp2",
    classname: "2",
    name: "topic",
    icon: "image_search",
    link: "explore",
  },
  {
    id: "side3",
    id2: "sideExp3",
    classname: "3",
    name: "popular",
    icon: "new_releases",
    link: "popular",
  },
  {
    id: "side4",
    id2: "sideExp4",
    classname: "4",
    name: "new",
    icon: "fiber_new",
    link: "new",
  },
];

export const ExploreTags = [
  {
    id: "1tag",
    image: car,
    name: "car",
  },
  {
    id: "2tag",
    image: city,
    name: "city",
  },
  { id: "10tag", image: fanart, name: "fanart" },
  {
    id: "3tag",
    image: insect,
    name: "insect",
  },
  {
    id: "4tag",
    image: monochrome,
    name: "monochrome",
  },
  {
    id: "5tag",
    image: landscape,
    name: "landscapes",
  },
  {
    id: "6tag",
    image: summer,
    name: "summer",
  },
  { id: "14tag", image: tree, name: "tree" },
  {
    id: "15tag",
    image: waterColor,
    name: "waterColor",
  },
  {
    id: "7tag",
    image: river,
    name: "river",
  },
  { id: "9tag", image: bird, name: "bird" },
  {
    id: "8tag",
    image: sky,
    name: "sky",
  },
  {
    id: "11tag",
    image: landscape,
    name: "landscape",
  },
  {
    id: "12tag",
    image: photography,
    name: "photography",
  },
  { id: "13tag", image: snow, name: "snow" },
];

export const Users = [
  {
    id: "u1",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
    username: "maria ferguson",
    gender: "female",
    following: ["u2", "u3", "u4", "u5", "u6", "u7", "u8"],
    likedPost: [...Posts],
    posts: [Posts[1], Posts[2], Posts[3]],
  },
  {
    id: "u2",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    username: "john doe",
    gender: "male",
    following: ["u3", "u4", "u6", "u8"],
    likedPost: [...Posts],
    posts: [Posts[5], Posts[7], Posts[3]],
  },
  {
    id: "u3",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg",
    username: "peter smith",
    gender: "male",
    following: ["u2", "u4", "u5", "u6", "u7", "u8"],
    likedPost: [...Posts],
    posts: [Posts[1], Posts[2], Posts[3], Posts[4]],
  },
  {
    id: "u4",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    username: "susan andersen",
    gender: "female",
    following: ["u2", "u3", "u5", "u6", "u7", "u8"],
    likedPost: [...Posts],
    posts: [Posts[1], Posts[2], Posts[3]],
  },
  {
    id: "u5",
    username: "susan smith",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    gender: "female",
    following: ["u2", "u3", "u4", "u6", "u7", "u8"],
    likedPost: [...Posts],
    posts: [Posts[1], Posts[2], Posts[3]],
  },
  {
    id: "u6",
    username: "anna johnson",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    gender: "female",
    following: ["u2", "u3", "u4", "u5", "u7", "u8"],
    likedPost: [...Posts],
    posts: [Posts[1], Posts[2], Posts[3]],
  },
  {
    id: "u7",
    username: "peter jones",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    gender: "female",
    following: ["u2", "u3", "u4", "u5", "u6", "u8"],
    likedPost: [...Posts],
    posts: [Posts[1], Posts[2], Posts[3]],
  },
  {
    id: "u8",
    username: "bill anderson",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    gender: "female",
    following: ["u2", "u3", "u4", "u5", "u6", "u7"],
    likedPost: [...Posts],
    posts: [Posts[1], Posts[2], Posts[3]],
  },
];

export const Comments = [
  {
    id: "c1",
    text: "Looks Good",
    user: "u1",
    date: "10/9/2020",
    likes: ["u3", "u2", "u4", "u7"],
    reply: ["c2", "c3", "c4", "c5", "c6", "c7"],
  },
  {
    id: "c2",
    text: "Awesome Work",
    user: "u1",
    date: "10/9/2020",
    likes: ["u2", "u4", "u7"],
    reply: ["c3", "c4", "c5", "c7"],
  },
  {
    id: "c3",
    text: "Looking good mate!!",
    user: "u3",
    date: "10/9/2020",
    likes: ["u1", "u2", "u4", "u7"],
    reply: ["c2", "c5", "c6", "c7"],
  },
  {
    id: "c4",
    text: "Epic work",
    user: "u4",
    date: "10/9/2020",
    likes: ["u1", "u2", "u7"],
    reply: ["c2", "c3", "c5", "c6", "c7"],
  },
  {
    id: "c5",
    text: "Looks Good",
    user: "u2",
    date: "10/9/2020",
    likes: ["u1", "u4", "u7", "u8"],
    reply: ["c2", "c3", "c4", "c6", "c7"],
  },
  {
    id: "c6",
    text: "Looks Good",
    user: "u5",
    date: "10/9/2020",
    likes: ["u1", "u2", "u4", "u7"],
    reply: ["c2", "c3", "c4", "c5", "c7"],
  },
  {
    id: "c7",
    text: "Looks Good",
    user: "u7",
    date: "10/9/2020",
    likes: ["u1", "u2", "u4"],
    reply: ["c2", "c3", "c4", "c5", "c6"],
  },
  {
    id: "c8",
    text: "Looks Good",
    user: "u8",
    date: "10/9/2020",
    likes: ["u1", "u2", "u4", "u7"],
    reply: ["c2", "c3", "c4", "c5", "c6", "c7"],
  },
];
