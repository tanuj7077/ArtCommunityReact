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
    tags: ["nature", "photography", "winter"],
    desc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, eos veritatis illo molestias quod minima architecto maxime dolore unde eum soluta, quae doloremque, veniam dolorum? Harum nisi blanditiis deserunt nulla temporibus sapiente, facere soluta impedit beatae recusandae placeat. Deserunt dolore nemo quasi architecto quidem, possimus officia laudantium saepe illum dolorem.",
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
    tags: ["nature", "photography", "winter"],
    desc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, eos veritatis illo molestias quod minima architecto maxime dolore unde eum soluta, quae doloremque, veniam dolorum? Harum nisi blanditiis deserunt nulla temporibus sapiente, facere soluta impedit beatae recusandae placeat. Deserunt dolore nemo quasi architecto quidem, possimus officia laudantium saepe illum dolorem.",
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
    tags: ["nature", "photography", "winter"],
    desc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, eos veritatis illo molestias quod minima architecto maxime dolore unde eum soluta, quae doloremque, veniam dolorum? Harum nisi blanditiis deserunt nulla temporibus sapiente, facere soluta impedit beatae recusandae placeat. Deserunt dolore nemo quasi architecto quidem, possimus officia laudantium saepe illum dolorem.",
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
    tags: ["nature", "photography", "winter"],
    desc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, eos veritatis illo molestias quod minima architecto maxime dolore unde eum soluta, quae doloremque, veniam dolorum? Harum nisi blanditiis deserunt nulla temporibus sapiente, facere soluta impedit beatae recusandae placeat. Deserunt dolore nemo quasi architecto quidem, possimus officia laudantium saepe illum dolorem.",
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
    tags: ["nature", "photography", "winter"],
    desc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, eos veritatis illo molestias quod minima architecto maxime dolore unde eum soluta, quae doloremque, veniam dolorum? Harum nisi blanditiis deserunt nulla temporibus sapiente, facere soluta impedit beatae recusandae placeat. Deserunt dolore nemo quasi architecto quidem, possimus officia laudantium saepe illum dolorem.",
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
    tags: ["nature", "photography", "winter"],
    desc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, eos veritatis illo molestias quod minima architecto maxime dolore unde eum soluta, quae doloremque, veniam dolorum? Harum nisi blanditiis deserunt nulla temporibus sapiente, facere soluta impedit beatae recusandae placeat. Deserunt dolore nemo quasi architecto quidem, possimus officia laudantium saepe illum dolorem.",
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
    tags: ["nature", "photography", "winter"],
    desc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, eos veritatis illo molestias quod minima architecto maxime dolore unde eum soluta, quae doloremque, veniam dolorum? Harum nisi blanditiis deserunt nulla temporibus sapiente, facere soluta impedit beatae recusandae placeat. Deserunt dolore nemo quasi architecto quidem, possimus officia laudantium saepe illum dolorem.",
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
    tags: ["nature", "photography", "winter"],
    desc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, eos veritatis illo molestias quod minima architecto maxime dolore unde eum soluta, quae doloremque, veniam dolorum? Harum nisi blanditiis deserunt nulla temporibus sapiente, facere soluta impedit beatae recusandae placeat. Deserunt dolore nemo quasi architecto quidem, possimus officia laudantium saepe illum dolorem.",
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
    followers: 21,
    posts: 5,
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
    followers: 21,
    posts: 5,
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
    followers: 21,
    posts: 5,
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
    followers: 21,
    posts: 5,
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
    followers: 21,
    posts: 5,
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
    followers: 21,
    posts: 5,
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
    followers: 21,
    posts: 5,
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
    followers: 21,
    posts: 5,
    following: ["u2", "u3", "u4", "u5", "u6", "u7"],
    likedPost: [...Posts],
    posts: [Posts[1], Posts[2], Posts[3]],
  },
  {
    id: "u9",
    username: "Joe Russo",
    image:
      "https://images.unsplash.com/photo-1506468203959-a06c860af8f0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGZhY2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    gender: "female",
    followers: 21,
    posts: 5,
    following: ["u2", "u3", "u4", "u5", "u6", "u7"],
    likedPost: [...Posts],
    posts: [Posts[1], Posts[2], Posts[3]],
  },
  {
    id: "u10",
    username: "Amanda",
    image:
      "https://images.unsplash.com/photo-1548142813-c348350df52b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fGZhY2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    gender: "female",
    followers: 21,
    posts: 5,
    following: ["u2", "u3", "u4", "u5", "u6", "u7"],
    likedPost: [...Posts],
    posts: [Posts[1], Posts[2], Posts[3]],
  },
  {
    id: "u11",
    username: "kate07",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGZhY2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    gender: "female",
    followers: 21,
    posts: 5,
    following: ["u2", "u3", "u4", "u5", "u6", "u7"],
    likedPost: [...Posts],
    posts: [Posts[1], Posts[2], Posts[3]],
  },
  {
    id: "u12",
    username: "yqisoma67bf7",
    image:
      "https://images.unsplash.com/photo-1509460913899-515f1df34fea?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhY2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    gender: "male",
    followers: 21,
    posts: 5,
    following: ["u2", "u3", "u4", "u5", "u6", "u7"],
    likedPost: [...Posts],
    posts: [Posts[1], Posts[2], Posts[3]],
  },
  {
    id: "u13",
    username: "bill anderson",
    image:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjB8fGZhY2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    gender: "female",
    followers: 21,
    posts: 5,
    following: ["u2", "u3", "u4", "u5", "u6", "u7"],
    likedPost: [...Posts],
    posts: [Posts[1], Posts[2], Posts[3]],
  },
  {
    id: "u14",
    username: "kitty",
    image:
      "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fGZhY2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    gender: "female",
    followers: 21,
    posts: 5,
    following: ["u2", "u3", "u4", "u5", "u6", "u7"],
    likedPost: [...Posts],
    posts: [Posts[1], Posts[2], Posts[3]],
  },
  {
    id: "u15",
    username: "jelly",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDB8fGZhY2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    gender: "female",
    followers: 21,
    posts: 5,
    following: ["u2", "u3", "u4", "u5", "u6", "u7"],
    likedPost: [...Posts],
    posts: [Posts[1], Posts[2], Posts[3]],
  },
  {
    id: "u16",
    username: "andrew",
    image:
      "https://images.unsplash.com/photo-1585675100414-add2e465a136?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDF8fGZhY2V8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60",
    gender: "female",
    followers: 21,
    posts: 5,
    following: ["u2", "u3", "u4", "u5", "u6", "u7"],
    likedPost: [...Posts],
    posts: [Posts[1], Posts[2], Posts[3]],
  },
];

export const Comments = [
  {
    id: "c1",
    text:
      "Looks Good Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt reprehenderit ex ut minus. Amet delectus facilis aliquam animi odio eveniet.",
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
