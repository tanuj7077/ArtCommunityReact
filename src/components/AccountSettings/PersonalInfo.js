import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import Select from "react-select";
import { useGlobalContext } from "../../context";
import axios from "axios";
import { FaFacebookSquare, FaPatreon, FaYoutube } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px solid #525050",
    fontSize: 20,
    letterSpacing: 4,
    color: "#A8A8A8",
    //backgroundColor: "#323232",
    backgroundColor: state.isFocused ? "black" : "#323232",
    textAlign: "left",
    cursor: "pointer",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "rgb(168, 168, 168)",
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: "#323232",
    border: "1px solid #525050",
    width: "118%",
  }),
  menuList: (base) => ({
    ...base,
    height: "27rem",

    "::-webkit-scrollbar": {
      width: "9px",
    },
    "::-webkit-scrollbar-track": {
      background: "black",
    },
    "::-webkit-scrollbar-thumb": {
      //background: "#3e3f3e",
      background: "#6ecf86",
      borderRadius: "5px",
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "#555",
    },
  }),
  container: (base) => ({
    ...base,
    width: "118%",
    height: "4rem",
  }),
  control: (base, state) => ({
    ...base,
    //height: 32,
    padding: 5,
    paddingLeft: 10,
    minHeight: 32,
    fontSize: 20,
    letterSpacing: 4,
    border: "none",
    boxShadow: "none",
    width: "118%",
    textAlign: "left",
    cursor: "pointer",
    backgroundColor: "#80808080",
    color: "gray",
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    //display: "none",
    color: "gray",
  }),
  indicatorSeparator: (base) => ({
    ...base,
    display: "none",
  }),
  valueContainer: (base) => ({
    ...base,
    padding: 0,
    paddingLeft: 2,
  }),
  input: (base) => ({
    ...base,
    color: "rgb(168, 168, 168)",
  }),
};

const Personal = () => {
  const { isLoggedIn, userData, setUserData } = useGlobalContext();
  let url = "http://localhost:8000/users/user/editPersonal/" + userData._id;
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const toggleModalDisplay = () => {
    setShowModal(!showModal);
  };
  const toggleEditModalDisplay = () => {
    setShowEditModal(!showEditModal);
  };
  const [about, setAbout] = useState("");
  const [dob, setDob] = useState("");
  const [location, setLocation] = useState(); //dont set initially
  const [gender, setGender] = useState("");
  const [links, setLinks] = useState([]);
  const [linkValid, setLinkValid] = useState(false);
  const [link, setLink] = useState("");
  const [message, setMessage] = useState("");
  const [uneditable, setUneditable] = useState("");
  const [index, setIndex] = useState();

  const validateLink = (e) => {
    let item = e.target.value;
    setLink(item);
    if (
      item.includes("facebook.com") ||
      item.includes("instagram.com") ||
      item.includes("patreon.com") ||
      item.includes("gmail.com") ||
      item.includes("youtube.com")
    ) {
      if (links.includes(item)) {
        setMessage("* This link is already added");
        setLinkValid(false);
      } else {
        var toCheck, linkType;
        var validity = true;
        if (item.includes("facebook.com")) {
          toCheck = "facebook.com";
          linkType = "Facebook";
        } else if (item.includes("instagram.com")) {
          toCheck = "instagram.com";
          linkType = "Instagram";
        } else if (item.includes("patreon.com")) {
          toCheck = "patreon.com";
          linkType = "Patreon";
        } else if (item.includes("gmail.com")) {
          toCheck = "gmail.com";
          linkType = "Gmail";
        } else if (item.includes("youtube.com")) {
          toCheck = "youtube.com";
          linkType = "Youtube";
        }
        links.forEach((l) => {
          if (l.includes(toCheck)) {
            setMessage("* You have already added your " + linkType + " link");
            validity = false;
          }
        });
        setLinkValid(validity);
      }
    } else {
      setLinkValid(false);
      setMessage("");
    }
  };
  const validateEditLink = (e) => {
    let item = e.target.value;
    if (item.length <= uneditable.length || !item.includes(uneditable)) {
      setLink(uneditable);
    } else {
      setLink(item);
    }
    //setLink(item);
    if (
      item.includes("facebook.com") ||
      item.includes("instagram.com") ||
      item.includes("patreon.com") ||
      item.includes("gmail.com") ||
      item.includes("youtube.com")
    ) {
      if (links.includes(item)) {
        setMessage(
          "* This link is already added or you have not edited the link"
        );
        setLinkValid(false);
      } else {
        setLinkValid(true);
        setMessage("");
      }
    } else {
      setLinkValid(false);
      setMessage("");
    }
  };
  const checkLinkType = (item) => {
    if (item.includes("facebook.com")) {
      return "fb";
    }
    if (item.includes("instagram.com")) {
      return "insta";
    }
    if (item.includes("patreon.com")) {
      return "patreon";
    }
    if (item.includes("gmail.com")) {
      return "gmail";
    }
    if (item.includes("youtube.com")) {
      return "youtube";
    }
  };
  const addLink = () => {
    var arr = links;
    if (!arr.includes(link)) {
      arr.push(link);
    }
    setLinks(arr);
  };
  const editLink = () => {
    var arr = links;
    var toRemove, indexToRemove;
    if (link.includes("facebook.com")) {
      toRemove = "facebook.com";
    } else if (link.includes("instagram.com")) {
      toRemove = "instagram.com";
    } else if (link.includes("patreon.com")) {
      toRemove = "patreon.com";
    } else if (link.includes("gmail.com")) {
      toRemove = "gmail.com";
    } else if (link.includes("youtube.com")) {
      toRemove = "youtube.com";
    }
    arr.forEach((item, i) => {
      if (item.includes(toRemove)) {
        indexToRemove = i;
      }
    });
    arr.splice(indexToRemove, 1, link);
    setLinks(arr);
  };
  const uneditablePart = (item) => {
    var comIndex = item.indexOf(".com");
    var st = item.substring(0, comIndex + 4);
    setUneditable(st);
  };
  const deleteLink = (i) => {
    var arr = links;
    arr.splice(i, 1);
    console.log(arr);
    setLinks(arr);
  };

  const save = () => {
    var personalInfo = {
      about: about,
      dob: dob,
      location: location ? location.value : "",
      gender: gender,
      links: links,
    };
    axios.post(url, personalInfo).then((res) => {
      console.log(res.data);
      setUserData(res.data);
    });
  };

  useEffect(() => {
    if (userData.personalInfo) {
      if (userData.personalInfo.about) {
        setAbout(userData.personalInfo.about);
      }
      if (userData.personalInfo.dob) {
        setDob(userData.personalInfo.dob.substring(0, 10));
      }
      if (userData.personalInfo.gender) {
        setGender(userData.personalInfo.gender);
      }
      if (userData.personalInfo.location) {
        setLocation({
          label: userData.personalInfo.location,
          value: userData.personalInfo.location,
        });
      }
      if (userData.personalInfo.links) {
        setLinks(userData.personalInfo.links);
      }
    }
  }, []);

  const countries = [
    {
      label: "Afghanistan",
      value: "Afghanistan",
    },
    {
      label: "Åland Islands",
      value: "Åland Islands",
    },
    {
      label: "Albania",
      value: "Albania",
    },
    {
      label: "Algeria",
      value: "Algeria",
    },
    {
      label: "American Samoa",
      value: "American Samoa",
    },
    {
      label: "AndorrA",
      value: "AndorrA",
    },
    {
      label: "Angola",
      value: "Angola",
    },
    {
      label: "Anguilla",
      value: "Anguilla",
    },
    {
      label: "Antarctica",
      value: "Antarctica",
    },
    {
      label: "Antigua and Barbuda",
      value: "Antigua and Barbuda",
    },
    {
      label: "Argentina",
      value: "Argentina",
    },
    {
      label: "Armenia",
      value: "Armenia",
    },
    {
      label: "Aruba",
      value: "Aruba",
    },
    {
      label: "Australia",
      value: "Australia",
    },
    {
      label: "Austria",
      value: "Austria",
    },
    {
      label: "Azerbaijan",
      value: "Azerbaijan",
    },
    {
      label: "Bahamas",
      value: "Bahamas",
    },
    {
      label: "Bahrain",
      value: "Bahrain",
    },
    {
      label: "Bangladesh",
      value: "Bangladesh",
    },
    {
      label: "Barbados",
      value: "Barbados",
    },
    {
      label: "Belarus",
      value: "Belarus",
    },
    {
      label: "Belgium",
      value: "Belgium",
    },
    {
      label: "Belize",
      value: "Belize",
    },
    {
      label: "Benin",
      value: "Benin",
    },
    {
      label: "Bermuda",
      value: "Bermuda",
    },
    {
      label: "Bhutan",
      value: "Bhutan",
    },
    {
      label: "Bolivia",
      value: "Bolivia",
    },
    {
      label: "Bosnia and Herzegovina",
      value: "Bosnia and Herzegovina",
    },
    {
      label: "Botswana",
      value: "Botswana",
    },
    {
      label: "Bouvet Island",
      value: "Bouvet Island",
    },
    {
      label: "Brazil",
      value: "Brazil",
    },
    {
      label: "British Indian Ocean Territory",
      value: "British Indian Ocean Territory",
    },
    {
      label: "Brunei Darussalam",
      value: "Brunei Darussalam",
    },
    {
      label: "Bulgaria",
      value: "Bulgaria",
    },
    {
      label: "Burkina Faso",
      value: "Burkina Faso",
    },
    {
      label: "Burundi",
      value: "Burundi",
    },
    {
      label: "Cambodia",
      value: "Cambodia",
    },
    {
      label: "Cameroon",
      value: "Cameroon",
    },
    {
      label: "Canada",
      value: "Canada",
    },
    {
      label: "Cape Verde",
      value: "Cape Verde",
    },
    {
      label: "Cayman Islands",
      value: "Cayman Islands",
    },
    {
      label: "Central African Republic",
      value: "Central African Republic",
    },
    {
      label: "Chad",
      value: "Chad",
    },
    {
      label: "Chile",
      value: "Chile",
    },
    {
      label: "China",
      value: "China",
    },
    {
      label: "Christmas Island",
      value: "Christmas Island",
    },
    {
      label: "Cocos (Keeling) Islands",
      value: "Cocos (Keeling) Islands",
    },
    {
      label: "Colombia",
      value: "Colombia",
    },
    {
      label: "Comoros",
      value: "Comoros",
    },
    {
      label: "Congo",
      value: "Congo",
    },
    {
      label: "Congo, The Democratic Republic of the",
      value: "Congo, The Democratic Republic of the",
    },
    {
      label: "Cook Islands",
      value: "Cook Islands",
    },
    {
      label: "Costa Rica",
      value: "Costa Rica",
    },
    {
      label: 'Cote D"Ivoire',
      value: 'Cote D"Ivoire',
    },
    {
      label: "Croatia",
      value: "Croatia",
    },
    {
      label: "Cuba",
      value: "Cuba",
    },
    {
      label: "Cyprus",
      value: "Cyprus",
    },
    {
      label: "Czech Republic",
      value: "Czech Republic",
    },
    {
      label: "Denmark",
      value: "Denmark",
    },
    {
      label: "Djibouti",
      value: "Djibouti",
    },
    {
      label: "Dominica",
      value: "Dominica",
    },
    {
      label: "Dominican Republic",
      value: "Dominican Republic",
    },
    {
      label: "Ecuador",
      value: "Ecuador",
    },
    {
      label: "Egypt",
      value: "Egypt",
    },
    {
      label: "El Salvador",
      value: "El Salvador",
    },
    {
      label: "Equatorial Guinea",
      value: "Equatorial Guinea",
    },
    {
      label: "Eritrea",
      value: "Eritrea",
    },
    {
      label: "Estonia",
      value: "Estonia",
    },
    {
      label: "Ethiopia",
      value: "Ethiopia",
    },
    {
      label: "Falkland Islands (Malvinas)",
      value: "Falkland Islands (Malvinas)",
    },
    {
      label: "Faroe Islands",
      value: "Faroe Islands",
    },
    {
      label: "Fiji",
      value: "Fiji",
    },
    {
      label: "Finland",
      value: "Finland",
    },
    {
      label: "France",
      value: "France",
    },
    {
      label: "French Guiana",
      value: "French Guiana",
    },
    {
      label: "French Polynesia",
      value: "French Polynesia",
    },
    {
      label: "French Southern Territories",
      value: "French Southern Territories",
    },
    {
      label: "Gabon",
      value: "Gabon",
    },
    {
      label: "Gambia",
      value: "Gambia",
    },
    {
      label: "Georgia",
      value: "Georgia",
    },
    {
      label: "Germany",
      value: "Germany",
    },
    {
      label: "Ghana",
      value: "Ghana",
    },
    {
      label: "Gibraltar",
      value: "Gibraltar",
    },
    {
      label: "Greece",
      value: "Greece",
    },
    {
      label: "Greenland",
      value: "Greenland",
    },
    {
      label: "Grenada",
      value: "Grenada",
    },
    {
      label: "Guadeloupe",
      value: "Guadeloupe",
    },
    {
      label: "Guam",
      value: "Guam",
    },
    {
      label: "Guatemala",
      value: "Guatemala",
    },
    {
      label: "Guernsey",
      value: "Guernsey",
    },
    {
      label: "Guinea",
      value: "Guinea",
    },
    {
      label: "Guinea-Bissau",
      value: "Guinea-Bissau",
    },
    {
      label: "Guyana",
      value: "Guyana",
    },
    {
      label: "Haiti",
      value: "Haiti",
    },
    {
      label: "Heard Island and Mcdonald Islands",
      value: "Heard Island and Mcdonald Islands",
    },
    {
      label: "Holy See (Vatican City State)",
      value: "Holy See (Vatican City State)",
    },
    {
      label: "Honduras",
      value: "Honduras",
    },
    {
      label: "Hong Kong",
      value: "Hong Kong",
    },
    {
      label: "Hungary",
      value: "Hungary",
    },
    {
      label: "Iceland",
      value: "Iceland",
    },
    {
      label: "India",
      value: "India",
    },
    {
      label: "Indonesia",
      value: "Indonesia",
    },
    {
      label: "Iran, Islamic Republic Of",
      value: "Iran, Islamic Republic Of",
    },
    {
      label: "Iraq",
      value: "Iraq",
    },
    {
      label: "Ireland",
      value: "Ireland",
    },
    {
      label: "Isle of Man",
      value: "Isle of Man",
    },
    {
      label: "Israel",
      value: "Israel",
    },
    {
      label: "Italy",
      value: "Italy",
    },
    {
      label: "Jamaica",
      value: "Jamaica",
    },
    {
      label: "Japan",
      value: "Japan",
    },
    {
      label: "Jersey",
      value: "Jersey",
    },
    {
      label: "Jordan",
      value: "Jordan",
    },
    {
      label: "Kazakhstan",
      value: "Kazakhstan",
    },
    {
      label: "Kenya",
      value: "Kenya",
    },
    {
      label: "Kiribati",
      value: "Kiribati",
    },
    {
      label: 'Korea, Democratic People"S Republic of',
      value: 'Korea, Democratic People"S Republic of',
    },
    {
      label: "Korea, Republic of",
      value: "Korea, Republic of",
    },
    {
      label: "Kuwait",
      value: "Kuwait",
    },
    {
      label: "Kyrgyzstan",
      value: "Kyrgyzstan",
    },
    {
      label: 'Lao People"S Democratic Republic',
      value: 'Lao People"S Democratic Republic',
    },
    {
      label: "Latvia",
      value: "Latvia",
    },
    {
      label: "Lebanon",
      value: "Lebanon",
    },
    {
      label: "Lesotho",
      value: "Lesotho",
    },
    {
      label: "Liberia",
      value: "Liberia",
    },
    {
      label: "Libyan Arab Jamahiriya",
      value: "Libyan Arab Jamahiriya",
    },
    {
      label: "Liechtenstein",
      value: "Liechtenstein",
    },
    {
      label: "Lithuania",
      value: "Lithuania",
    },
    {
      label: "Luxembourg",
      value: "Luxembourg",
    },
    {
      label: "Macao",
      value: "Macao",
    },
    {
      label: "Macedonia, The Former Yugoslav Republic of",
      value: "Macedonia, The Former Yugoslav Republic of",
    },
    {
      label: "Madagascar",
      value: "Madagascar",
    },
    {
      label: "Malawi",
      value: "Malawi",
    },
    {
      label: "Malaysia",
      value: "Malaysia",
    },
    {
      label: "Maldives",
      value: "Maldives",
    },
    {
      label: "Mali",
      value: "Mali",
    },
    {
      label: "Malta",
      value: "Malta",
    },
    {
      label: "Marshall Islands",
      value: "Marshall Islands",
    },
    {
      label: "Martinique",
      value: "Martinique",
    },
    {
      label: "Mauritania",
      value: "Mauritania",
    },
    {
      label: "Mauritius",
      value: "Mauritius",
    },
    {
      label: "Mayotte",
      value: "Mayotte",
    },
    {
      label: "Mexico",
      value: "Mexico",
    },
    {
      label: "Micronesia, Federated States of",
      value: "Micronesia, Federated States of",
    },
    {
      label: "Moldova, Republic of",
      value: "Moldova, Republic of",
    },
    {
      label: "Monaco",
      value: "Monaco",
    },
    {
      label: "Mongolia",
      value: "Mongolia",
    },
    {
      label: "Montserrat",
      value: "Montserrat",
    },
    {
      label: "Morocco",
      value: "Morocco",
    },
    {
      label: "Mozambique",
      value: "Mozambique",
    },
    {
      label: "Myanmar",
      value: "Myanmar",
    },
    {
      label: "Namibia",
      value: "Namibia",
    },
    {
      label: "Nauru",
      value: "Nauru",
    },
    {
      label: "Nepal",
      value: "Nepal",
    },
    {
      label: "Netherlands",
      value: "Netherlands",
    },
    {
      label: "Netherlands Antilles",
      value: "Netherlands Antilles",
    },
    {
      label: "New Caledonia",
      value: "New Caledonia",
    },
    {
      label: "New Zealand",
      value: "New Zealand",
    },
    {
      label: "Nicaragua",
      value: "Nicaragua",
    },
    {
      label: "Niger",
      value: "Niger",
    },
    {
      label: "Nigeria",
      value: "Nigeria",
    },
    {
      label: "Niue",
      value: "Niue",
    },
    {
      label: "Norfolk Island",
      value: "Norfolk Island",
    },
    {
      label: "Northern Mariana Islands",
      value: "Northern Mariana Islands",
    },
    {
      label: "Norway",
      value: "Norway",
    },
    {
      label: "Oman",
      value: "Oman",
    },
    {
      label: "Pakistan",
      value: "Pakistan",
    },
    {
      label: "Palau",
      value: "Palau",
    },
    {
      label: "Palestinian Territory, Occupied",
      value: "Palestinian Territory, Occupied",
    },
    {
      label: "Panama",
      value: "Panama",
    },
    {
      label: "Papua New Guinea",
      value: "Papua New Guinea",
    },
    {
      label: "Paraguay",
      value: "Paraguay",
    },
    {
      label: "Peru",
      value: "Peru",
    },
    {
      label: "Philippines",
      value: "Philippines",
    },
    {
      label: "Pitcairn",
      value: "Pitcairn",
    },
    {
      label: "Poland",
      value: "Poland",
    },
    {
      label: "Portugal",
      value: "Portugal",
    },
    {
      label: "Puerto Rico",
      value: "Puerto Rico",
    },
    {
      label: "Qatar",
      value: "Qatar",
    },
    {
      label: "Reunion",
      value: "Reunion",
    },
    {
      label: "Romania",
      value: "Romania",
    },
    {
      label: "Russian Federation",
      value: "Russian Federation",
    },
    {
      label: "RWANDA",
      value: "RWANDA",
    },
    {
      label: "Saint Helena",
      value: "Saint Helena",
    },
    {
      label: "Saint Kitts and Nevis",
      value: "Saint Kitts and Nevis",
    },
    {
      label: "Saint Lucia",
      value: "Saint Lucia",
    },
    {
      label: "Saint Pierre and Miquelon",
      value: "Saint Pierre and Miquelon",
    },
    {
      label: "Saint Vincent and the Grenadines",
      value: "Saint Vincent and the Grenadines",
    },
    {
      label: "Samoa",
      value: "Samoa",
    },
    {
      label: "San Marino",
      value: "San Marino",
    },
    {
      label: "Sao Tome and Principe",
      value: "Sao Tome and Principe",
    },
    {
      label: "Saudi Arabia",
      value: "Saudi Arabia",
    },
    {
      label: "Senegal",
      value: "Senegal",
    },
    {
      label: "Serbia and Montenegro",
      value: "Serbia and Montenegro",
    },
    {
      label: "Seychelles",
      value: "Seychelles",
    },
    {
      label: "Sierra Leone",
      value: "Sierra Leone",
    },
    {
      label: "Singapore",
      value: "Singapore",
    },
    {
      label: "Slovakia",
      value: "Slovakia",
    },
    {
      label: "Slovenia",
      value: "Slovenia",
    },
    {
      label: "Solomon Islands",
      value: "Solomon Islands",
    },
    {
      label: "Somalia",
      value: "Somalia",
    },
    {
      label: "South Africa",
      value: "South Africa",
    },
    {
      label: "South Georgia and the South Sandwich Islands",
      value: "South Georgia and the South Sandwich Islands",
    },
    {
      label: "Spain",
      value: "Spain",
    },
    {
      label: "Sri Lanka",
      value: "Sri Lanka",
    },
    {
      label: "Sudan",
      value: "Sudan",
    },
    {
      label: "Suriname",
      value: "Suriname",
    },
    {
      label: "Svalbard and Jan Mayen",
      value: "Svalbard and Jan Mayen",
    },
    {
      label: "Swaziland",
      value: "Swaziland",
    },
    {
      label: "Sweden",
      value: "Sweden",
    },
    {
      label: "Switzerland",
      value: "Switzerland",
    },
    {
      label: "Syrian Arab Republic",
      value: "Syrian Arab Republic",
    },
    {
      label: "Taiwan, Province of China",
      value: "Taiwan, Province of China",
    },
    {
      label: "Tajikistan",
      value: "Tajikistan",
    },
    {
      label: "Tanzania, United Republic of",
      value: "Tanzania, United Republic of",
    },
    {
      label: "Thailand",
      value: "Thailand",
    },
    {
      label: "Timor-Leste",
      value: "Timor-Leste",
    },
    {
      label: "Togo",
      value: "Togo",
    },
    {
      label: "Tokelau",
      value: "Tokelau",
    },
    {
      label: "Tonga",
      value: "Tonga",
    },
    {
      label: "Trinidad and Tobago",
      value: "Trinidad and Tobago",
    },
    {
      label: "Tunisia",
      value: "Tunisia",
    },
    {
      label: "Turkey",
      value: "Turkey",
    },
    {
      label: "Turkmenistan",
      value: "Turkmenistan",
    },
    {
      label: "Turks and Caicos Islands",
      value: "Turks and Caicos Islands",
    },
    {
      label: "Tuvalu",
      value: "Tuvalu",
    },
    {
      label: "Uganda",
      value: "Uganda",
    },
    {
      label: "Ukraine",
      value: "Ukraine",
    },
    {
      label: "United Arab Emirates",
      value: "United Arab Emirates",
    },
    {
      label: "United Kingdom",
      value: "United Kingdom",
    },
    {
      label: "United States",
      value: "United States",
    },
    {
      label: "United States Minor Outlying Islands",
      value: "United States Minor Outlying Islands",
    },
    {
      label: "Uruguay",
      value: "Uruguay",
    },
    {
      label: "Uzbekistan",
      value: "Uzbekistan",
    },
    {
      label: "Vanuatu",
      value: "Vanuatu",
    },
    {
      label: "Venezuela",
      value: "Venezuela",
    },
    {
      label: "Viet Nam",
      value: "Viet Nam",
    },
    {
      label: "Virgin Islands, British",
      value: "Virgin Islands, British",
    },
    {
      label: "Virgin Islands, U.S.",
      value: "Virgin Islands, U.S.",
    },
    {
      label: "Wallis and Futuna",
      value: "Wallis and Futuna",
    },
    {
      label: "Western Sahara",
      value: "Western Sahara",
    },
    {
      label: "Yemen",
      value: "Yemen",
    },
    {
      label: "Zambia",
      value: "Zambia",
    },
    {
      label: "Zimbabwe",
      value: "Zimbabwe",
    },
  ];
  return (
    <>
      <span className="heading">Personal Info</span>
      <span className="btn" onClick={save}>
        Save Changes
      </span>

      <div className="profile-items">
        <div className="inputs inputs-personalInfo">
          <div className="settings-group settings-group-personalInfo-textarea">
            <label htmlFor="about" className="settings-group-label">
              About
            </label>
            <textarea
              cols="54"
              rows="4"
              type="text"
              id="about"
              className="settings-group-textarea"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            ></textarea>
          </div>
          <div className="settings-group dob settings-group-personalInfo">
            <label htmlFor="dob" className="settings-group-label">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              className="settings-group-input"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <div className="settings-group settings-group-personalInfo">
            <label htmlFor="location" className="settings-group-label">
              Location
            </label>
            <Select
              id="location"
              styles={customStyles}
              className="location-select"
              classNamePrefix="select"
              defaultValue={countries[0]}
              isDisabled={false}
              isLoading={false}
              isClearable={true}
              isRtl={false}
              isSearchable={true}
              name="color"
              options={countries}
              value={location}
              onChange={(e) => {
                setLocation(e);
              }}
            />
          </div>
          <div className="settings-group">
            <label className="settings-group-label">Gender</label>
            <div className="radios" onChange={(e) => setGender(e.target.value)}>
              <label class="radio-container">
                <input
                  type="radio"
                  name="radio"
                  value="Male"
                  checked={gender === "Male"}
                />
                <span class="checkmark"></span>
                Male
              </label>
              <label class="radio-container">
                <input
                  type="radio"
                  name="radio"
                  value="Female"
                  checked={gender === "Female"}
                />
                <span class="checkmark"></span>
                Female
              </label>
              <label class="radio-container">
                <input
                  type="radio"
                  name="radio"
                  value="Other"
                  checked={gender === "Other"}
                />
                <span class="checkmark"></span>
                Other
              </label>
            </div>
          </div>
        </div>
        <div className="settings-group link-label">
          <label className="settings-group-label">Links</label>
          <div className="links">
            {links.map((item, i) => {
              return (
                <>
                  {checkLinkType(item) === "youtube" && (
                    <div
                      className="add"
                      key={item}
                      onClick={() => {
                        setLink(item);
                        uneditablePart(item);
                        toggleEditModalDisplay();
                        setIndex(i);
                      }}
                    >
                      <FaYoutube className="icon" />
                    </div>
                  )}
                  {checkLinkType(item) === "fb" && (
                    <div
                      className="add"
                      key={item}
                      onClick={() => {
                        setLink(item);
                        uneditablePart(item);
                        setIndex(i);
                        toggleEditModalDisplay();
                      }}
                    >
                      <FaFacebookSquare className="icon" />
                    </div>
                  )}
                  {checkLinkType(item) === "insta" && (
                    <div
                      className="add"
                      key={item}
                      onClick={() => {
                        setLink(item);
                        uneditablePart(item);
                        setIndex(i);
                        toggleEditModalDisplay();
                      }}
                    >
                      <AiFillInstagram className="icon" />
                    </div>
                  )}
                  {checkLinkType(item) === "patreon" && (
                    <div
                      className="add"
                      key={item}
                      onClick={() => {
                        setLink(item);
                        uneditablePart(item);
                        setIndex(i);
                        toggleEditModalDisplay();
                      }}
                    >
                      <FaPatreon className="icon" />
                    </div>
                  )}

                  {checkLinkType(item) === "gmail" && (
                    <div
                      className="add"
                      key={item}
                      onClick={() => {
                        setLink(item);
                        uneditablePart(item);
                        setIndex(i);
                        toggleEditModalDisplay();
                      }}
                    >
                      <SiGmail className="icon" />
                    </div>
                  )}
                </>
              );
            })}
            <div
              className="add"
              onClick={() => {
                setLink("");
                toggleModalDisplay();
              }}
            >
              <FaPlus className="icon" />
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="addExtrasModal">
          <div className="modal">
            <span className="modal-heading">Add Links</span>
            <div className="modal-grp">
              <label className="modal-grp-label">Link</label>
              <input
                type="text"
                className="modal-grp-input"
                value={link}
                onChange={(e) => validateLink(e)}
              />
              <span className="modal-grp-msg">{message}</span>
            </div>

            <div className="modal-buttons">
              {linkValid && (
                <span
                  className="add-btn"
                  onClick={() => {
                    addLink();
                    toggleModalDisplay();
                    setMessage("");
                  }}
                >
                  Add Link
                </span>
              )}
              <span
                className="cancel-btn"
                onClick={() => {
                  toggleModalDisplay();
                  setMessage("");
                }}
              >
                Cancel
              </span>
            </div>
          </div>
        </div>
      )}

      {showEditModal && (
        <div className="addExtrasModal ">
          <div className="modal editModal">
            <span className="modal-heading">Edit Links</span>
            <div className="modal-grp">
              <label className="modal-grp-label">Link</label>
              <input
                type="text"
                className="modal-grp-input"
                value={link}
                onChange={(e) => validateEditLink(e)}
              />
              <span className="modal-grp-msg">{message}</span>
            </div>

            <div className="modal-buttons">
              {linkValid && (
                <span
                  className="add-btn"
                  onClick={() => {
                    editLink();
                    toggleEditModalDisplay();
                    setMessage("");
                  }}
                >
                  Edit Link
                </span>
              )}
              <span
                className="delete-btn"
                onClick={() => {
                  deleteLink(index);
                  toggleEditModalDisplay();
                  setMessage("");
                }}
              >
                Delete
              </span>
              <span
                className="cancel-btn"
                onClick={() => {
                  toggleEditModalDisplay();
                  setMessage("");
                  setLinkValid(false);
                }}
              >
                Cancel
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Personal;
