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

export const posts = [
  { image: car, name: "car", author: "author", likes: 5, comments: 3 },
  { image: city, name: "city", author: "author", likes: 7, comments: 2 },
  { image: fanart, name: "fanart", author: "author", likes: 9, comments: 3 },
  {
    image: landscape,
    name: "landscape",
    author: "author",
    likes: 10,
    comments: 7,
  },
  {
    image: photography,
    name: "photography",
    author: "author",
    likes: 5,
    comments: 2,
  },
  { image: snow, name: "snow", author: "author", likes: 20, comments: 7 },
  { image: tree, name: "tree", author: "author", likes: 5, comments: 3 },
  {
    image: waterColor,
    name: "waterColor",
    author: "author",
    likes: 8,
    comments: 4,
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
