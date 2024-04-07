
import {
  DollarIcon,
  EmojiIcon,
  FacebookIcon,
  FireIcon,
  InstagramIcon,
  LinkedInIcon,
  LocationIcon,
  TwitterIcon,
  YouTubeIcon,
} from "./svgImages";

// MENU DATA
export const menuData = [
  {
    id: 1,
    parent: "home",
    link: "/",
  },

  {
    id: 2,
    parent: "contact",
    link: "/contact",
  },
];

// COUNTER DATA
export const counterData = [
  {
    id: 1,
    count: 1000,
    rightIcon: "+",
    Icon: <DollarIcon />,
    description: "number_of_properties_managed",
  },
  {
    id: 2,
    count: 15,
    rightIcon: "year",
    Icon: <LocationIcon />,
    description: "years_of_experience",
  },
  {
    id: 3,
    count: 500,
    leftIcon: "",
    rightIcon: "",
    Icon: <FireIcon />,
    description: "daily_completed_transactions",
  },
  {
    id: 4,
    count: 600,
    leftIcon: "$",
    rightIcon: "+",
    Icon: <EmojiIcon />,
    description: "regular_clients",
  },
];
// TESTIMONIAL DATA

/*export const testimonialData = [
  {
    id: 1,
    review:
      " I am constantly on the lookout for high quality apartments for my clients, They are always very responsive, professional and offer a great variety of apartments to my clients. From the initial options offered, to their presentation at viewings and move-ins, I can highly recommend their high quality services!",
    user: {
      name: "Mianda S.",
      img: "/images/testimonial/client1.jpg",
      position: "Destination Consultant - Alfa",
    },
  },
  {
    id: 2,
    review:
      "It is always easy to work with the nice and professional employees at Stay Sthlm when we are looking for housing for our corporate customers. I can warmly recommend Stay Sthlm when you are looking for corporate housing.",
    user: {
      name: "Viktoria L.",
      img: "/images/testimonial/client2.jpg",
      position: "Senior Relocation Consultant- Nordic Relocation Group AB",
    },
  },
  {
    id: 3,
    review:
      "A professional and responsive company offering affordable short and long term accommodation to suit all needs. Stay Sthlm are efficient and friendly, one of our most trusted and reliable property agencies",
    user: {
      name: "Jenny D.",
      img: "/images/testimonial/client3.jpg",
      position: "Alfa - The Scandinavian Mobility Services Company",
    },
  },
]; */



// SOCIAL MEDIA DATA
export const socialMediaData = [
  {
    id: 1,
    name: "Facebook",
    icon: <FacebookIcon />,
    path: "https://www.facebook.com/yourpage",
  },
  {
    id: 2,
    name: "Twitter",
    icon: <TwitterIcon />,
    path: "https://www.twitter.com/yourpage",
  },
  {
    id: 3,
    name: "Instragram",
    icon: <InstagramIcon />,
    path: "https://www.instagram.com/yourpage",
  },
  {
    id: 4,
    name: "LinkedIn",
    icon: <LinkedInIcon />,
    path: "https://www.linkedin.com/company/yourpage",
  },
  {
    id: 5,
    name: "Youtube",
    icon: <YouTubeIcon />,
    path: "https://www.youtube.com",
  },
];
