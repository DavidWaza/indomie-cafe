export const Navlinks = [
  {
    link: "/",
    label: "Home",
  },
  {
    link: "about",
    label: "About Us",
  },
  {
    link: "location",
    label: "Locate Us",
  },
  {
    link: "",
    label: "Trybe Chef",
  },
];

export const CradDetails = [
  {
    link: "https://res.cloudinary.com/dgbl43ljm/image/upload/v1726959657/Frame_13_k2dbhr.svg",
    title: "Choose your location",
    label: `Search with your location to order the finest and more representative dishes.`,
  },
  {
    link: "https://res.cloudinary.com/dgbl43ljm/image/upload/v1726959656/Frame_13_1_tzt4dk.svg",
    title: "Choose your food",
    label:
      "Treat your taste buds with the finest taste of home from Indomie Cafe",
  },
  {
    link: "https://res.cloudinary.com/dgbl43ljm/image/upload/v1726959656/Frame_13_2_kdh6nz.svg",
    title: "Place your order",

    label:
      "If you are tired of your routine habits order from us, pay fast online or on delivery",
  },
  {
    link: "https://res.cloudinary.com/dgbl43ljm/image/upload/v1726959656/Frame_13_3_h9cy7k.svg",
    title: "Food is on the way",

    label:
      "The charm of the home like food comes with the combination of salt, sour, sweet and spices.",
  },
];

export const footLinks = [
  {
    link: "/",
    label: "Home",
  },
  {
    link: "#location",
    label: "Locate Us",
  },
  {
    link: "",
    label: "Order Online",
  },
];

export const socialLinks = [
  {
    icon: "https://res.cloudinary.com/dgbl43ljm/image/upload/v1727078555/Frame_39_xac9mb.svg",
    link: "https://web.facebook.com/IndomieCafe/?_rdc=1&_rdr",
  },
  {
    icon: "https://res.cloudinary.com/dgbl43ljm/image/upload/v1727078554/Frame_40_oizsws.svg",
    link: "https://www.instagram.com/indomiecafe/",
  },
  {
    icon: "https://res.cloudinary.com/dgbl43ljm/image/upload/v1727078554/Frame_41_w8lxd3.svg",
    link: "https://x.com/IndomieCafe?s=08",
  },
];

export interface ILocation {
  location:string;
  index:number;
  map:string

}
export const locations:ILocation[] = [
  {
    index: 1,
    location: "Indomie cafe Surulere",
    map: `http://maps.google.com/maps?q=6.4902331,3.3573441&ll=6.4902331,3.3573441&z=17`,
  },
  {
    index: 2,
    location: "Indomie cafe VI",
    map: `http://maps.google.com/maps?q=6.431398269508437,3.4195188312133684&ll=6.431398269508437,3.4195188312133684&z=17`,
  },
  {
    index: 3,
    location: "Indomie cafe Lekki",
    map: `http://maps.google.com/maps?q=6.438372889365079,3.5079388238036913&ll=6.438372889365079,3.5079388238036913&z=17`,
  },
  {
    index: 4,
    location: "Indomie cafe Ikeja",
    map: `http://maps.google.com/maps?q=6.5870786,3.3578276&ll=6.5870786,3.3578276&z=17`,
  },
  {
    index: 5,
    location: "Indomie cafe Fola Osibo Lekki 1",
    map: `http://maps.google.com/maps?q=6.442405854681529,3.473428427148808&ll=6.442405854681529,3.473428427148808&z=17`,
  },
  {
    index: 6,
    location: "Indomie cafe Festival Mall, Amugo Odofin",
    map: `http://maps.google.com/maps?q=6.464244,3.3045587&ll=6.464244,3.3045587&z=17`,
  },
  {
    index: 7,
    location: "Indomie cafe Yaba",
    map: `http://maps.google.com/maps?q=6.5065705,3.3753739&ll=6.5065705,3.3753739&z=17`,
  },
  {
    index: 8,
    location: "Indomie cafe Jara Mall, Ikeja",
    map: `http://maps.google.com/maps?q=6.592355099999999,3.338944199999999&ll=6.592355099999999,3.338944199999999&z=17`,
  },
  {
    index: 9,
    location: "Indomie cafe Domestic Airport Lagos",
    map: `http://maps.google.com/maps?q=6.5511269,3.3341105&ll=6.5511269,3.3341105&z=17`,
  },
  {
    index: 10,
    location: "Indomie cafe MMIA Lagos",
    map: `http://maps.google.com/maps?q=6.584636199999999,3.333078&ll=6.584636199999999,3.333078&z=17`,
  },
  {
    index: 11,
    location: "Indomie cafe Central Kitchen",
    map: `http://maps.google.com/maps?q=6.489671899999999,3.3530719&ll=6.489671899999999,3.3530719&z=17`,
  },
];
