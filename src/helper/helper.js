import Icons from "../constants/icon";
import { IPList, Route_Path } from "../apis/api";
import { BASE_PATH } from "@/apis/apiconstant";

export const Navlist = [
  {
    path: Route_Path.HOME,
    icon: Icons.Home,
    name: "Home",
  },
  // {
  //   path:  Route_Path.Application,
  //   icon: Icons.Factory,
  //   name: "Applications",
  // },
  {
    path: Route_Path.PRODUCTS,
    icon: Icons.Stroller,
    name: "Products",
  },
  {
    path: Route_Path.PRODUCT_FAMILY,
    icon: Icons.Diversity2,
    name: "Product Families",
  },
  {
    path: "/media-room",
    icon: Icons.Event,
    name: "News & Events",
  },
  {
    path: Route_Path.ABOUT,
    icon: Icons.Info,
    name: "About",
  },
  {
    path: Route_Path.LEADERSHIP,
    icon: Icons.Business,
    name: "Leardship",
  },
  {
    path: Route_Path.CAREERS,
    icon: Icons.EmojiObjects,
    name: "Careers",
  },
  {
    path: Route_Path.RFID_CONTACT,
    icon: Icons.Phone,
    name: "Contact",
  },
  {
    path: Route_Path.PARTNER_LOGIN,
    icon: Icons.Login,
    name: "Partners Login",
  },
];

export const NewsListData = new Array(10).fill("").map((_, index) => ({
  key: index,
  title: "Launch of CylTag™",
  url: "#",
  IsNew: index % 2 === 0 ? true : false,
  image: `https://picsum.photos/200/150?random=${index}`,
  description:
    "SIVA introduces CylTag™, a cost-effective UHF RFID tag for tracking returnable metallic cylinders like beer kegs, gas cylinders, and chemical drums.",
  date: "March 2024",
}));

export const EventListData = new Array(10).fill("").map((_, index) => ({
  key: index,
  title: "Quality in the Making since 1986",
  url: "#",
  IsNew: index % 2 === 0 ? true : false,
  image: `https://picsum.photos/200/150?random=${index}`,
  description:
    "When customers are working with SIVA, they feel assured of working with a high-quality manufacturer with technological.",
}));

export const FamiliesProductList = new Array(20).fill("").map((_, index) => ({
  // ImagePosition: index % 2 === 0 ? "left" : "right",
  ImagePosition: "left",
  ImageURL: `https://picsum.photos/300/150?random=${index}`,
  Title: "Ferro-MOM 10719",
  Desc: "The Ferro-MOM 10719 is a versatile all surface RFID label ideal for securing IT & Industrial assets.The Ferro-MOM 10719 is a versatile all surface RFID label ideal for securing IT & Industrial assets.",
}));

export const IndustriesList = new Array(2).fill("").map((_, index) => ({
  ImageURL: `https://picsum.photos/300/150?random=${index}`,
  alt: "image-" + index + 1,
  Title: "Industries",
  Desc: "The Ferro-MOM 10719 is a versatile all surface RFID label ideal for securing IT.",
}));

export const scrollByID = (id) => {
  setTimeout(() => {
    const section = document.getElementById(id);
    console.log("id", id, section);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, 100);

  //  setTimeout(() => {
  //   window.scrollTo(0,100)
  // }, 500);
};

export const validateEmail = (input) => {
  let valid = true;
  let mailformat =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let value = mailformat.test(input);
  if (value === true) {
    valid = true;
  } else {
    valid = false;
  }
  return valid;
};

export const setLocalStorage = (value = {}, key = "IOT_PU") => {
  try {
    let currentTime = new Date().getTime();
    let time = 24 * 60 * 60 * 1000;
    let data = {
      ...value,
      expiration: currentTime + time,
    };

    localStorage.setItem(key, JSON.stringify(data));

  } catch (ex) { }
};

export const getLocalStorage = (key = "IOT_PU") => {
  const data = localStorage.getItem(key);

  if (data) {
    const parsedData = JSON.parse(data);

    const currentTime = new Date().getTime();
    if (parsedData.expiration && currentTime < parsedData.expiration) {
      return parsedData;
    } else {
      localStorage.removeItem(key);
      return null;
    }
  } else {
    return null;
  }
};

export const removeLocalStorage = (key = "IOT_PU") => {
  localStorage.removeItem(key);
};

// export const getLocalStorage = (key = "IOT_PU") => {
//   const data = localStorage.getItem(key);
//   if (data) {
//     return JSON.parse(data);
//   } else return null;
// };

export const ValidateUser_Data = async () => {
  const currentTime = new Date();
  let isValid = false;

  try {
    const SUVdata = JSON.parse(localStorage.getItem("SUV"));
    const IOT_PU = getLocalStorage();

    if (IOT_PU !== undefined && IOT_PU !== null) {
      if (IOT_PU.Token) {
        isValid = true;
      }
    } else if (SUVdata !== undefined && SUVdata !== null) {
      const startTime = new Date(SUVdata.startTime);
      const endTime = new Date(SUVdata.endTime);

      isValid = currentTime >= startTime && currentTime <= endTime;
    }
  } catch (ex) { }
  return isValid || (await ValidateIPs());
};

export async function ValidateIPs() {
  const IPs = IPList ? IPList : [];
  let isValidIP = false;
  try {
    let response = await fetch("https://api.ipify.org?format=json")
      // let response = await fetch("https://ap.org?format=json")
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error fetching IP address:", error);
      });

    if (response?.ip) {
      isValidIP = IPs.some((ip) => ip === response.ip);
    }
  } catch (error) { }

  return isValidIP;
}

export const Countries = [
  { id: 1, name: "Afghanistan", value: "Afghanistan" },
  { id: 2, name: "Åland Islands", value: "Åland Islands" },
  { id: 3, name: "Albania", value: "Albania" },
  { id: 4, name: "Algeria", value: "Algeria" },
  { id: 5, name: "American Samoa", value: "American Samoa" },
  { id: 6, name: "Andorra", value: "Andorra" },
  { id: 7, name: "Angola", value: "Angola" },
  { id: 8, name: "Anguilla", value: "Anguilla" },
  { id: 9, name: "Antarctica", value: "Antarctica" },
  { id: 10, name: "Antigua and Barbuda", value: "Antigua and Barbuda" },
  { id: 11, name: "Argentina", value: "Argentina" },
  { id: 12, name: "Armenia", value: "Armenia" },
  { id: 13, name: "Aruba", value: "Aruba" },
  { id: 14, name: "Australia", value: "Australia" },
  { id: 15, name: "Austria", value: "Austria" },
  { id: 16, name: "Azerbaijan", value: "Azerbaijan" },
  { id: 17, name: "Bahamas", value: "Bahamas" },
  { id: 18, name: "Bahrain", value: "Bahrain" },
  { id: 19, name: "Bangladesh", value: "Bangladesh" },
  { id: 20, name: "Barbados", value: "Barbados" },
  { id: 21, name: "Belarus", value: "Belarus" },
  { id: 22, name: "Belgium", value: "Belgium" },
  { id: 23, name: "Belize", value: "Belize" },
  { id: 24, name: "Benin", value: "Benin" },
  { id: 25, name: "Bermuda", value: "Bermuda" },
  { id: 26, name: "Bhutan", value: "Bhutan" },
  { id: 27, name: "Bolivia", value: "Bolivia" },
  { id: 28, name: "Bosnia and Herzegovina", value: "Bosnia and Herzegovina" },
  { id: 29, name: "Botswana", value: "Botswana" },
  { id: 30, name: "Bouvet Island", value: "Bouvet Island" },
  { id: 31, name: "Brazil", value: "Brazil" },
  {
    id: 32,
    name: "British Indian Ocean Territory",
    value: "British Indian Ocean Territory",
  },
  { id: 33, name: "Brunei Darussalam", value: "Brunei Darussalam" },
  { id: 34, name: "Bulgaria", value: "Bulgaria" },
  { id: 35, name: "Burkina Faso", value: "Burkina Faso" },
  { id: 36, name: "Burundi", value: "Burundi" },
  { id: 37, name: "Cambodia", value: "Cambodia" },
  { id: 38, name: "Cameroon", value: "Cameroon" },
  { id: 39, name: "Canada", value: "Canada" },
  { id: 40, name: "Cape Verde", value: "Cape Verde" },
  { id: 41, name: "Cayman Islands", value: "Cayman Islands" },
  {
    id: 42,
    name: "Central African Republic",
    value: "Central African Republic",
  },
  { id: 43, name: "Chad", value: "Chad" },
  { id: 44, name: "Chile", value: "Chile" },
  { id: 45, name: "China", value: "China" },
  { id: 46, name: "Christmas Island", value: "Christmas Island" },
  { id: 47, name: "Cocos (Keeling) Islands", value: "Cocos (Keeling) Islands" },
  { id: 48, name: "Colombia", value: "Colombia" },
  { id: 49, name: "Comoros", value: "Comoros" },
  { id: 50, name: "Congo", value: "Congo" },
  {
    id: 51,
    name: "Congo, The Democratic Republic of The",
    value: "Congo, The Democratic Republic of The",
  },
  { id: 52, name: "Cook Islands", value: "Cook Islands" },
  { id: 53, name: "Costa Rica", value: "Costa Rica" },
  { id: 54, name: "Cote D'ivoire", value: "Cote D'ivoire" },
  { id: 55, name: "Croatia", value: "Croatia" },
  { id: 56, name: "Cuba", value: "Cuba" },
  { id: 57, name: "Cyprus", value: "Cyprus" },
  { id: 58, name: "Czech Republic", value: "Czech Republic" },
  { id: 59, name: "Denmark", value: "Denmark" },
  { id: 60, name: "Djibouti", value: "Djibouti" },
  { id: 61, name: "Dominica", value: "Dominica" },
  { id: 62, name: "Dominican Republic", value: "Dominican Republic" },
  { id: 63, name: "Ecuador", value: "Ecuador" },
  { id: 64, name: "Egypt", value: "Egypt" },
  { id: 65, name: "El Salvador", value: "El Salvador" },
  { id: 66, name: "Equatorial Guinea", value: "Equatorial Guinea" },
  { id: 67, name: "Eritrea", value: "Eritrea" },
  { id: 68, name: "Estonia", value: "Estonia" },
  { id: 69, name: "Ethiopia", value: "Ethiopia" },
  {
    id: 70,
    name: "Falkland Islands (Malvinas)",
    value: "Falkland Islands (Malvinas)",
  },
  { id: 71, name: "Faroe Islands", value: "Faroe Islands" },
  { id: 72, name: "Fiji", value: "Fiji" },
  { id: 73, name: "Finland", value: "Finland" },
  { id: 74, name: "France", value: "France" },
  { id: 75, name: "French Guiana", value: "French Guiana" },
  { id: 76, name: "French Polynesia", value: "French Polynesia" },
  {
    id: 77,
    name: "French Southern Territories",
    value: "French Southern Territories",
  },
  { id: 78, name: "Gabon", value: "Gabon" },
  { id: 79, name: "Gambia", value: "Gambia" },
  { id: 80, name: "Georgia", value: "Georgia" },
  { id: 81, name: "Germany", value: "Germany" },
  { id: 82, name: "Ghana", value: "Ghana" },
  { id: 83, name: "Gibraltar", value: "Gibraltar" },
  { id: 84, name: "Greece", value: "Greece" },
  { id: 85, name: "Greenland", value: "Greenland" },
  { id: 86, name: "Grenada", value: "Grenada" },
  { id: 87, name: "Guadeloupe", value: "Guadeloupe" },
  { id: 88, name: "Guam", value: "Guam" },
  { id: 89, name: "Guatemala", value: "Guatemala" },
  { id: 90, name: "Guernsey", value: "Guernsey" },
  { id: 91, name: "Guinea", value: "Guinea" },
  { id: 92, name: "Guinea-bissau", value: "Guinea-bissau" },
  { id: 93, name: "Guyana", value: "Guyana" },
  { id: 94, name: "Haiti", value: "Haiti" },
  {
    id: 95,
    name: "Heard Island and Mcdonald Islands",
    value: "Heard Island and Mcdonald Islands",
  },
  {
    id: 96,
    name: "Holy See (Vatican City State)",
    value: "Holy See (Vatican City State)",
  },
  { id: 97, name: "Honduras", value: "Honduras" },
  { id: 98, name: "Hong Kong", value: "Hong Kong" },
  { id: 99, name: "Hungary", value: "Hungary" },
  { id: 100, name: "Iceland", value: "Iceland" },
  { id: 101, name: "India", value: "India" },
  { id: 102, name: "Indonesia", value: "Indonesia" },
  {
    id: 103,
    name: "Iran, Islamic Republic of",
    value: "Iran, Islamic Republic of",
  },
  { id: 104, name: "Iraq", value: "Iraq" },
  { id: 105, name: "Ireland", value: "Ireland" },
  { id: 106, name: "Isle of Man", value: "Isle of Man" },
  { id: 107, name: "Israel", value: "Israel" },
  { id: 108, name: "Italy", value: "Italy" },
  { id: 109, name: "Jamaica", value: "Jamaica" },
  { id: 110, name: "Japan", value: "Japan" },
  { id: 111, name: "Jersey", value: "Jersey" },
  { id: 112, name: "Jordan", value: "Jordan" },
  { id: 113, name: "Kazakhstan", value: "Kazakhstan" },
  { id: 114, name: "Kenya", value: "Kenya" },
  { id: 115, name: "Kiribati", value: "Kiribati" },
  {
    id: 116,
    name: "Korea, Democratic People's Republic of",
    value: "Korea, Democratic People's Republic of",
  },
  { id: 117, name: "Korea, Republic of", value: "Korea, Republic of" },
  { id: 118, name: "Kuwait", value: "Kuwait" },
  { id: 119, name: "Kyrgyzstan", value: "Kyrgyzstan" },
  {
    id: 120,
    name: "Lao People's Democratic Republic",
    value: "Lao People's Democratic Republic",
  },
  { id: 121, name: "Latvia", value: "Latvia" },
  { id: 122, name: "Lebanon", value: "Lebanon" },
  { id: 123, name: "Lesotho", value: "Lesotho" },
  { id: 124, name: "Liberia", value: "Liberia" },
  { id: 125, name: "Libyan Arab Jamahiriya", value: "Libyan Arab Jamahiriya" },
  { id: 126, name: "Liechtenstein", value: "Liechtenstein" },
  { id: 127, name: "Lithuania", value: "Lithuania" },
  { id: 128, name: "Luxembourg", value: "Luxembourg" },
  { id: 129, name: "Macao", value: "Macao" },
  {
    id: 130,
    name: "Macedonia, The Former Yugoslav Republic of",
    value: "Macedonia, The Former Yugoslav Republic of",
  },
  { id: 131, name: "Madagascar", value: "Madagascar" },
  { id: 132, name: "Malawi", value: "Malawi" },
  { id: 133, name: "Malaysia", value: "Malaysia" },
  { id: 134, name: "Maldives", value: "Maldives" },
  { id: 135, name: "Mali", value: "Mali" },
  { id: 136, name: "Malta", value: "Malta" },
  { id: 137, name: "Marshall Islands", value: "Marshall Islands" },
  { id: 138, name: "Martinique", value: "Martinique" },
  { id: 139, name: "Mauritania", value: "Mauritania" },
  { id: 140, name: "Mauritius", value: "Mauritius" },
  { id: 141, name: "Mayotte", value: "Mayotte" },
  { id: 142, name: "Mexico", value: "Mexico" },
  {
    id: 143,
    name: "Micronesia, Federated States of",
    value: "Micronesia, Federated States of",
  },
  { id: 144, name: "Moldova, Republic of", value: "Moldova, Republic of" },
  { id: 145, name: "Monaco", value: "Monaco" },
  { id: 146, name: "Mongolia", value: "Mongolia" },
  { id: 147, name: "Montenegro", value: "Montenegro" },
  { id: 148, name: "Montserrat", value: "Montserrat" },
  { id: 149, name: "Morocco", value: "Morocco" },
  { id: 150, name: "Mozambique", value: "Mozambique" },
  { id: 151, name: "Myanmar", value: "Myanmar" },
  { id: 152, name: "Namibia", value: "Namibia" },
  { id: 153, name: "Nauru", value: "Nauru" },
  { id: 154, name: "Nepal", value: "Nepal" },
  { id: 155, name: "Netherlands", value: "Netherlands" },
  { id: 156, name: "Netherlands Antilles", value: "Netherlands Antilles" },
  { id: 157, name: "New Caledonia", value: "New Caledonia" },
  { id: 158, name: "New Zealand", value: "New Zealand" },
  { id: 159, name: "Nicaragua", value: "Nicaragua" },
  { id: 160, name: "Niger", value: "Niger" },
  { id: 161, name: "Nigeria", value: "Nigeria" },
  { id: 162, name: "Niue", value: "Niue" },
  { id: 163, name: "Norfolk Island", value: "Norfolk Island" },
  {
    id: 164,
    name: "Northern Mariana Islands",
    value: "Northern Mariana Islands",
  },
  { id: 165, name: "Norway", value: "Norway" },
  { id: 166, name: "Oman", value: "Oman" },
  { id: 167, name: "Pakistan", value: "Pakistan" },
  { id: 168, name: "Palau", value: "Palau" },
  {
    id: 169,
    name: "Palestinian Territory, Occupied",
    value: "Palestinian Territory, Occupied",
  },
  { id: 170, name: "Panama", value: "Panama" },
  { id: 171, name: "Papua New Guinea", value: "Papua New Guinea" },
  { id: 172, name: "Paraguay", value: "Paraguay" },
  { id: 173, name: "Peru", value: "Peru" },
  { id: 174, name: "Philippines", value: "Philippines" },
  { id: 175, name: "Pitcairn", value: "Pitcairn" },
  { id: 176, name: "Poland", value: "Poland" },
  { id: 177, name: "Portugal", value: "Portugal" },
  { id: 178, name: "Puerto Rico", value: "Puerto Rico" },
  { id: 179, name: "Qatar", value: "Qatar" },
  { id: 180, name: "Reunion", value: "Reunion" },
  { id: 181, name: "Romania", value: "Romania" },
  { id: 182, name: "Russian Federation", value: "Russian Federation" },
  { id: 183, name: "Rwanda", value: "Rwanda" },
  { id: 184, name: "Saint Helena", value: "Saint Helena" },
  { id: 185, name: "Saint Kitts and Nevis", value: "Saint Kitts and Nevis" },
  { id: 186, name: "Saint Lucia", value: "Saint Lucia" },
  {
    id: 187,
    name: "Saint Pierre and Miquelon",
    value: "Saint Pierre and Miquelon",
  },
  {
    id: 188,
    name: "Saint Vincent and The Grenadines",
    value: "Saint Vincent and The Grenadines",
  },
  { id: 189, name: "Samoa", value: "Samoa" },
  { id: 190, name: "San Marino", value: "San Marino" },
  { id: 191, name: "Sao Tome and Principe", value: "Sao Tome and Principe" },
  { id: 192, name: "Saudi Arabia", value: "Saudi Arabia" },
  { id: 193, name: "Senegal", value: "Senegal" },
  { id: 194, name: "Serbia", value: "Serbia" },
  { id: 195, name: "Seychelles", value: "Seychelles" },
  { id: 196, name: "Sierra Leone", value: "Sierra Leone" },
  { id: 197, name: "Singapore", value: "Singapore" },
  { id: 198, name: "Slovakia", value: "Slovakia" },
  { id: 199, name: "Slovenia", value: "Slovenia" },
  { id: 200, name: "Solomon Islands", value: "Solomon Islands" },
  { id: 201, name: "Somalia", value: "Somalia" },
  { id: 202, name: "South Africa", value: "South Africa" },
  {
    id: 203,
    name: "South Georgia and The South Sandwich Islands",
    value: "South Georgia and The South Sandwich Islands",
  },
  { id: 204, name: "Spain", value: "Spain" },
  { id: 205, name: "Sri Lanka", value: "Sri Lanka" },
  { id: 206, name: "Sudan", value: "Sudan" },
  { id: 207, name: "Suriname", value: "Suriname" },
  { id: 208, name: "Svalbard and Jan Mayen", value: "Svalbard and Jan Mayen" },
  { id: 209, name: "Swaziland", value: "Swaziland" },
  { id: 210, name: "Sweden", value: "Sweden" },
  { id: 211, name: "Switzerland", value: "Switzerland" },
  { id: 212, name: "Syrian Arab Republic", value: "Syrian Arab Republic" },
  {
    id: 213,
    name: "Taiwan, Province of China",
    value: "Taiwan, Province of China",
  },
  { id: 214, name: "Tajikistan", value: "Tajikistan" },
  {
    id: 215,
    name: "Tanzania, United Republic of",
    value: "Tanzania, United Republic of",
  },
  { id: 216, name: "Thailand", value: "Thailand" },
  { id: 217, name: "Timor-leste", value: "Timor-leste" },
  { id: 218, name: "Togo", value: "Togo" },
  { id: 219, name: "Tokelau", value: "Tokelau" },
  { id: 220, name: "Tonga", value: "Tonga" },
  { id: 221, name: "Trinidad and Tobago", value: "Trinidad and Tobago" },
  { id: 222, name: "Tunisia", value: "Tunisia" },
  { id: 223, name: "Turkey", value: "Turkey" },
  { id: 224, name: "Turkmenistan", value: "Turkmenistan" },
  {
    id: 225,
    name: "Turks and Caicos Islands",
    value: "Turks and Caicos Islands",
  },
  { id: 226, name: "Tuvalu", value: "Tuvalu" },
  { id: 227, name: "Uganda", value: "Uganda" },
  { id: 228, name: "Ukraine", value: "Ukraine" },
  { id: 229, name: "United Arab Emirates", value: "United Arab Emirates" },
  { id: 230, name: "United Kingdom", value: "United Kingdom" },
  { id: 231, name: "United States", value: "United States" },
  {
    id: 232,
    name: "United States Minor Outlying Islands",
    value: "United States Minor Outlying Islands",
  },
  { id: 233, name: "Uruguay", value: "Uruguay" },
  { id: 234, name: "Uzbekistan", value: "Uzbekistan" },
  { id: 235, name: "Vanuatu", value: "Vanuatu" },
  { id: 236, name: "Venezuela", value: "Venezuela" },
  { id: 237, name: "Viet Nam", value: "Viet Nam" },
  {
    id: 238,
    name: "Virgin Islands, British",
    value: "Virgin Islands, British",
  },
  { id: 239, name: "Virgin Islands, U.S.", value: "Virgin Islands, U.S." },
  { id: 240, name: "Wallis and Futuna", value: "Wallis and Futuna" },
  { id: 241, name: "Western Sahara", value: "Western Sahara" },
  { id: 242, name: "Yemen", value: "Yemen" },
  { id: 243, name: "Zambia", value: "Zambia" },
  { id: 244, name: "Zimbabwe", value: "Zimbabwe" },
];

export const WristbandsCardsKeyList = [
  {
    id: 1,
    image: "icons/Cashless-Payments.png",
    name: "Cashless Payments",
    desc: "Equipped with payment capabilities, enable cashless purchases at establishments, replacing cash/cards",
  },
  {
    id: 2,
    image: "icons/Crowd-Management.png",
    name: "Crowd Management",
    desc: "Grant keyless access to facilities with a simple tap - quick, easy, and convenient",
  },
  {
    id: 3,
    image: "icons/Fraud.png",
    name: "Reduction in Fraud",
    desc: "Enhance security and mitigate the risk of theft or fraud by preventing unauthorized access",
  },
  {
    id: 4,
    image: "icons/Access-Control.png",
    name: "VIP Access/Access Control",
    desc: "Faster access control compared to keys or paper tickets, reducing wait times and improving efficiency",
  },
  {
    id: 5,
    image: "icons/Increase-in-Revenue.png",
    name: "Increase in Revenue",
    desc: "Encourages guests to spend more on food, drinks and souvenirs due to convenient cashless transactions",
  },
  {
    id: 6,
    image: "icons/Brand-Promotion.png",
    name: "Brand Promotion",
    desc: "Collect valuable guest data for targeted promotions, boosting revenue and improving marketing effectiveness",
  },
];

export const WristbandsProductList = [
  {
    id: 1,
    name: "Direct Thermal",
    url: Route_Path.WB_ULTIMOID_DIRECTTHERMAL,
    image: "images/UltimoID-Direct-Thermal.jpg",
    alt: "Direct Thermal Wristbands",
    detailsList: [
      {
        id: 1,
        name: "Fade-proof direct thermal printing",
      },
      {
        id: 2,
        name: "Kiosk Compatible",
      },
      {
        id: 3,
        name: "Print variable data at the point of issue",
      },
    ],
  },
  {
    id: 2,
    name: "EcoDura™",
    url: Route_Path.WB_ULTIMOID_ECODURA,
    image: "images/UltimoID-Ecodura.jpg",
    alt: "Eco Friendly Wristbands",
    detailsList: [
      {
        id: 1,
        name: "Up to full-color photo quality artwork print",
      },
      {
        id: 2,
        name: "Durable snap locking mechanism",
      },
      {
        id: 3,
        name: "Ideal for multi-day use",
      },
    ],
  },
  {
    id: 3,
    name: "Silicone",
    url: Route_Path.WB_ULTIMOID_SILICON,
    image: "images/Silicone-RFID.jpg",
    alt: "RFID Silicone Wristbands",
    detailsList: [
      {
        id: 1,
        name: "Ideal for Multi-day & Long-term use",
      },
      {
        id: 2,
        name: "Re-wearable & adjustable locking mechanism",
      },
      {
        id: 3,
        name: "Great solution for season pass holders",
      },
    ],
  },
  {
    id: 4,
    name: "Poly in Sheets",
    url: Route_Path.WB_POLY_IN_SHEETS,
    image: "images/poly-in-sheet-card-img.png",
    alt: "RFID Silicone Wristbands",
    detailsList: [
      {
        id: 1,
        name: "Vibrant high-quality full-color printing",
      },
      {
        id: 2,
        name: "Tamper evident adhesive closure",
      },
      {
        id: 3,
        name: "Suitable for multi-day use",
      },
    ],
  },

  {
    id: 5,
    name: "Poly in Roll",
    url: Route_Path.WB_ULTIMOID_POLY,
    image: "images/UltimoID-Poly.jpg",
    alt: "Laminated Wristbands",
    detailsList: [
      {
        id: 1,
        name: "Vibrant high-quality full-color printing",
      },
      {
        id: 2,
        name: "Tamper evident adhesive closure",
      },
      {
        id: 3,
        name: "Suitable for multi-day use",
      },
    ],
  },
  {
    id: 6,
    name: "Fabric",
    url: Route_Path.WB_ULTIMOID_FABRIC,
    image: "images/UltimoID-Fabric.jpg",
    alt: "Fabric Wristbands",
    detailsList: [
      {
        id: 1,
        name: "VIP management; faster transactions, shorter lines",
      },
      {
        id: 2,
        name: "Keyless lockers. Cashless payments",
      },
      {
        id: 3,
        name: "High-impact full-color printing",
      },
    ],
  },
  {
    id: 7,
    name: "Tyband",
    url: Route_Path.WB_ULTIMOID_TYVEK,
    image: "images/UltimoID-Tyvek.jpg",
    alt: "Tyband",
    detailsList: [
      {
        id: 1,
        name: "Prevent counterfeiting & fraudulent activities",
      },
      {
        id: 2,
        name: "Tear-resistant & water-resistant",
      },
      {
        id: 3,
        name: "Collect & analyze guest data",
      },
    ],
  },
];

export const NewProduct = [
  {
    CSeq: 12,
    name: "Leisure & Entertainment",
    desc: "UHF & NFC wristbands for events, waterparks, museums, live events , cards & key fobs for access control",
    IsActive: true,
    BannerImage: "Leisure-and-Ent.webp",
    IsExternalURL: false,
    IsExpanded: false,
    IsClickable: true,
    productList: [
      {
        image: "Slide1.png",
        name: "RFID Wristbands, Cards & Key Fobs",
        desc: "UHF & NFC wristbands for events, waterparks, museums, live events and more",
        dimensions: "419.1 x 30 mm\n16.5 x 1.18 in\n",
        ReadRange: "Up to 9.5 m",
        link: "/wb",
        IsNew: false,
        Datasheets: [],
        ImageList: [
          {
            id: 1,
            ID: 86,
            ProductImage: "Slide1.png",
            IsActive: true,
            SeqNo: 0,
            URLLink: "#",
            Alt: "RFID Wristbands",
          },
        ],
      },
      {
        image: "smart-ticketing.png",
        name: "Smart NFC Ticketing",
        desc: "Contactless UHF / NFC ticketing for events, public transportation, ski resorts and more",
        dimensions: "419.1 x 30 mm\n16.5 x 1.18 in\n",
        ReadRange: "Up to 9.5 m",
        link: "/thermal-rfid-event-ticketing",
        IsNew: false,
        Datasheets: [],
        ImageList: [
          {
            id: 1,
            ID: 86,
            ProductImage: "smart-ticketing.png",
            IsActive: true,
            SeqNo: 0,
            URLLink: "#",
            Alt: "RFID Wristbands",
          },
        ],
      },
    ],
  },
];

// export const HighlightText = (text, query) => {
//   if (!query) return text;
//   const regex = new RegExp(`(${query})`, "gi");
//   return text.replace(regex, "<mark>$1</mark>");
// };

export const escapeRegExp = (string) => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};

export const highlightText = (text, query) => {
  if (!query) return text;
  const escapedQuery = escapeRegExp(query);
  const parts = text.split(new RegExp(`(${escapedQuery})`, "gi"));
  return parts.map((T, index) =>
    T.toLowerCase() === query.toLowerCase() ? (
      <mark key={index}>{T}</mark>
    ) : (
      T
    )
  );
};

export const CustomizedServiceList = [
  {
    Title: "Antenna Designing",
    Description:
      "SIVA deploys the absolute best in antenna design software + RF engineers to design finely tuned UHF/NFC antennas and can also offer antenna on alternative substrates like paper. SIVA offers a wide variety of IC’s from NXP / Impinj / STM / EM / RF Micron and others.",
    Image: BASE_PATH.DesignLabImages + "design-lab-2.png",
  },
  {
    Title: "Fast Prototyping",
    Description:
      "Our R&D lab is equipped to provide fast prototyping. Samples with custom designed antenna can be offered within days. Hard tag prototyping is also possible, and our setup enables lower cost prototyping. Prototyping gives customers a good sense of the look & feel of the tag and its performance prior to scaling up for commercial production.",
    Image: BASE_PATH.DesignLabImages + "design-lab-1.png",
    video: BASE_PATH.DesignLabImages + "video.mp4",
  },
  {
    Title: "R&D based in the factory",
    Description:
      "Our R&D team is based within the factory, close to production machinery and this enables R&D on production machines, obtaining critical feedback from production teams, vital to the successful development of custom labels & tags. Whether it is converting or personalisation related, development needs to be done ensuring end-to-end process compatibility.",
    Image: BASE_PATH.DesignLabImages + "rnd.png",
  },
  {
    Title: "Alternative substrates",
    Description:
      "SIVA can develop labels made using a variety of flexible substrates, but can also offer eco-friendly sustainable labels such as Plastic-Free Paper labels. Such labels eliminate the need for the transparent PET carrier antenna film. For several specific applications, SIVA can apply antennas “direct-to-substrate”.  This provides a wide scope of development.",
    Image: BASE_PATH.DesignLabImages + "Personaliztion.png",
  },
];

export const PartnerSideBarButtonList = [
  {
    title: "My Favorite",
    url: Route_Path.PARTNERS,
  },
  {
    title: "Products",
    url: Route_Path.PARTNERS_PRODUCTS,
  },
  {
    title: "Product Families",
    url: Route_Path.PARTNERS_PRODUCT_FAMILY,
  },
  {
    title: "NDA",
    url: Route_Path.PARTNERS_NDA,
  },
  {
    title: "Price List",
    url: Route_Path.PARTNERS_PRICE_LIST,
  },
  {
    title: "Contact Us",
    url: Route_Path.PARTNERS_RFID_CONTACT,
  },
];