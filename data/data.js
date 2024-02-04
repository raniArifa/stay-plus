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
    parent: "Home",
    link: "/",
/*     megamenu: false,
    children: [
      {
        id: 1.1,
        parent: "Home Page 1",
        
      },
      {
        id: 1.2,
        parent: "Home Page 2",
        link: "/homepage2",
      }, 
    ], */
  },
  {
    id: 2,
    parent: "About",
    link: "/about",
  },
  {
    id: 3,
    parent: "Listings",
    link: "/property",
  },
  /* {
    id: 4,
    parent: "Agents",
    megamenu: false,
    children: [
      {
        id: 4.1,
        parent: "Agent List",
        link: "/agent",
      },
      {
        id: 4.2,
        parent: "Agent Profile",
        link: "/agent/1",
      },
    ],
  }, */
  {
    id: 5,
    parent: "Contact",
    link: "/contact"
   /*  megamenu: true,
    children: [
      {
        id: 5.1,
        parent: "Blog",
        link: "/blogs",
      },
      {
        id: 5.2,
        parent: "Blog Single",
        link: "/blogs/10-Delightful-Dining-Room-Decor-Trends-for-Spring",
      },
      {
        id: 5.3,
        parent: "Contact",
        link: "/contact",
      },
      {
        id: 5.4,
        parent: "Privacy Policy",
        link: "/privacy",
      },
      {
        id: 5.5,
        parent: "License",
        link: "/license",
      },
      {
        id: 5.6,
        parent: "404 Page",
        link: "/notFound",
      },
      {
        id: 5.7,
        parent: "Log In",
        link: "#login",
      },
      {
        id: 5.8,
        parent: "Enter OTP",
        link: "#otp",
      },
      {
        id: 5.9,
        parent: "New Password",
        link: "#newPassword",
      },
      {
        id: 6.0,
        parent: "Reset Password",
        link: "#resetPassword",
      },
      {
        id: 6.1,
        parent: "Create Account",
        link: "#createAccount",
      },
    ], */
  },
];

// COUNTER DATA
export const counterData = [
  {
    id: 1,
    count: 150,
    leftIcon: "$",
    rightIcon: "+",
    Icon: <DollarIcon />,
    description: "Owned from <br> Properties transactions",
  },
  {
    id: 2,
    count: 25,
    leftIcon: "",
    rightIcon: "K+",
    Icon: <LocationIcon />,
    description: "Properties for Buy <br> &amp; sell Successfully",
  },
  {
    id: 3,
    count: 500,
    leftIcon: "",
    rightIcon: "",
    Icon: <FireIcon />,
    description: "Daily completed <br> transactions",
  },
  {
    id: 4,
    count: 600,
    leftIcon: "$",
    rightIcon: "+",
    Icon: <EmojiIcon />,
    description: "Reagular Clients",
  },
];

export const propertiesCategory = [
  {id: 1, title: "Resident Property", category: "residential"},
  {id: 2, title: "Commercial Property", category: "commercial"},
  {id: 4, title: "Agriculture Property", category: "agriculture"},
  {id: 3, title: "Industrial Property", category: "industrial"},
];

// PROPERTIES DATA
export const propertiesData = [
  {
    id: 4,
    title: "Hillside Cottage in the wood",
    location: "789 Oak St, City, State 54321",
    bed: 2,
    bath: 1,
    area: 800,
    type: "cottage",
    price: 300000,
    category: ["residential", "commercial"],
    coverImg: "/images/properties/properties10.png",
    images: [
      "/images/properties/properties-banner.png",
      "/images/properties/properties-banner2.png",
      "/images/properties/properties-banner3.png",
      "/images/properties/properties-banner22.png",
      "/images/properties/properties-banner33.png",
    ],
    monthlyPayment: 800,
    details: {
      title: "Charming Cottage with Lake Views",
      description: "Escape to this cozy retreat by the lake.",
    },
    features: {
      parking: true,
      outdoor: true,
      ac: false,
      hoa: false,
      persqftprice: 375,
      listed: true,
      buildYear: 2000,
    },
    agentInfo: {
      id: 4,
      img: "/images/agent/agent4.png",
      name: "Sarah Davis",
      rating: 4.7,
      phone: "(555) 123-4567",
      email: "sarah@example.com",
    },
  },
  {
    id: 5,
    title: "Luxury Penthouse in the Sky",
    location: "987 Pine St, City, State 56789",
    bed: 3,
    bath: 3,
    area: 2000,
    type: "penthouse",
    price: 1500000,
    category: ["residential", "agriculture"],
    coverImg: "/images/properties/properties5.png",
    images: [
      "/images/properties/properties-banner.png",
      "/images/properties/properties-banner2.png",
      "/images/properties/properties-banner3.png",
      "/images/properties/properties-banner22.png",
      "/images/properties/properties-banner33.png",
    ],
    monthlyPayment: 3000,
    details: {
      title: "Exquisite Penthouse with Panoramic Views",
      description: "Experience luxury living at its finest in this penthouse.",
    },
    features: {
      parking: true,
      outdoor: true,
      ac: true,
      hoa: true,
      persqftprice: 750,
      listed: true,
      buildYear: 2018,
    },
    agentInfo: {
      id: 5,
      img: "/images/agent/agent5.png",
      name: "Michael Johnson",
      rating: 4.9,
      phone: "(555) 987-6543",
      email: "michael@example.com",
    },
  },
  {
    id: 2,
    title: "Modern Apartment in Downtown",
    location: "123 Main St, City, State 12345",
    bed: 2,
    bath: 2,
    area: 1000,
    type: "apartment",
    price: 500000,
    category: ["residential", "industrial"],
    coverImg: "/images/properties/properties2.png",
    images: [
      "/images/properties/properties-banner.png",
      "/images/properties/properties-banner2.png",
      "/images/properties/properties-banner3.png",
      "/images/properties/properties-banner22.png",
      "/images/properties/properties-banner33.png",
    ],
    monthlyPayment: 1200,
    details: {
      title: "Stunning Apartment with City Views",
      description: "Enjoy luxurious living in the heart of downtown.",
    },
    features: {
      parking: true,
      outdoor: true,
      ac: true,
      hoa: true,
      persqftprice: 500,
      listed: true,
      buildYear: 2019,
    },
    agentInfo: {
      id: 2,
      img: "/images/agent/agent2.png",
      name: "Emily Johnson",
      rating: 4.8,
      phone: "(123) 456-7890",
      email: "emily@example.com",
    },
  },
  {
    id: 3,
    title: "Spacious Villa with Pool",
    location: "456 Elm St, City, State 67890",
    bed: 4,
    bath: 3,
    area: 2500,
    type: "villa",
    category: ["commercial", "agriculture", "residential"],
    price: 900000,
    coverImg: "/images/properties/properties3.png",
    images: [
      "/images/properties/properties-banner.png",
      "/images/properties/properties-banner2.png",
      "/images/properties/properties-banner3.png",
      "/images/properties/properties-banner22.png",
      "/images/properties/properties-banner33.png",
    ],
    monthlyPayment: 1800,
    details: {
      title: "Luxurious Villa with Beautiful Outdoor Space",
      description: "Enjoy resort-style living in this stunning villa.",
    },
    features: {
      parking: true,
      outdoor: true,
      ac: true,
      hoa: false,
      persqftprice: 700,
      listed: true,
      buildYear: 2015,
    },
    agentInfo: {
      id: 3,
      img: "/images/agent/agent3.png",
      name: "John Smith",
      rating: 4.2,
      phone: "(987) 654-3210",
      email: "john@example.com",
    },
  },
  {
    id: 7,
    title: "The Wooden Villa in Grand Canyon",
    location: "2861 62nd Ave, Oakland, CA 94605",
    bed: 3,
    bath: 1,
    area: 1032,
    type: "family",
    price: 659900,
    category: ["residential", "industrial"],
    coverImg: "/images/properties/properties7.png",
    images: [
      "/images/properties/properties-banner.png",
      "/images/properties/properties-banner2.png",
      "/images/properties/properties-banner3.png",
      "/images/properties/properties-banner22.png",
      "/images/properties/properties-banner33.png",
    ],
    monthlyPayment: 850,
    details: {
      title: "Well-constructed 1562 Sq Ft Home Is Now Offering To You In Uttara For Sale",
      description:
        "A slider is great way to display a slideshow featuring images or videos, usually on your homepage. Adding sliders to your site is no longer difficult. You don’t have to know coding anymore. Just use a slider widget and it will automatically insert the slider on your web page. So, the Elementor slider would be a great tool to work with when building a WordPress site.",
    },
    features: {
      parking: true,
      outdoor: false,
      ac: false,
      hoa: false,
      persqftprice: 560,
      listed: false,
      buildYear: 2022,
    },
    agentInfo: {
      id: 1,
      img: "/images/agent/agent1.png",
      name: "Bruno Fernandes",
      rating: 4.5,
      phone: "(302) 555-0107",
      email: "staticmania@gmail.com",
    },
  },
  {
    id: 8,
    title: "Classic Apartment in Manhatton",
    location: "123 Main St, City, State 12345",
    bed: 2,
    bath: 2,
    area: 1000,
    type: "apartment",
    price: 500000,
    category: ["commercial", "agriculture"],
    coverImg: "/images/properties/properties8.png",
    images: [
      "/images/properties/properties-banner.png",
      "/images/properties/properties-banner2.png",
      "/images/properties/properties-banner3.png",
      "/images/properties/properties-banner22.png",
      "/images/properties/properties-banner33.png",
    ],
    monthlyPayment: 1200,
    details: {
      title: "Stunning Apartment with City Views",
      description: "Enjoy luxurious living in the heart of downtown.",
    },
    features: {
      parking: true,
      outdoor: true,
      ac: true,
      hoa: true,
      persqftprice: 500,
      listed: true,
      buildYear: 2019,
    },
    agentInfo: {
      id: 2,
      img: "/images/agent/agent2.png",
      name: "Emily Johnson",
      rating: 4.8,
      phone: "(123) 456-7890",
      email: "emily@example.com",
    },
  },
  {
    id: 6,
    title: "Historic Townhouse in the Heart of the City",
    location: "321 Maple St, City, State 98765",
    bed: 4,
    bath: 2,
    area: 1800,
    type: "townhouse",
    price: 700000,
    category: ["commercial", "residential"],
    coverImg: "/images/properties/properties6.png",
    images: [
      "/images/properties/properties-banner.png",
      "/images/properties/properties-banner2.png",
      "/images/properties/properties-banner3.png",
      "/images/properties/properties-banner22.png",
      "/images/properties/properties-banner33.png",
    ],
    monthlyPayment: 1500,
    details: {
      title: "Charming Townhouse with Rich History",
      description: "Step back in time in this beautifully preserved townhouse.",
    },
    features: {
      parking: true,
      outdoor: false,
      ac: true,
      hoa: true,
      persqftprice: 388,
      listed: true,
      buildYear: 1890,
    },
    agentInfo: {
      id: 6,
      img: "/images/agent/agent6.png",
      name: "Jessica Thompson",
      rating: 4.6,
      phone: "(555) 789-0123",
      email: "jessica@example.com",
    },
  },
  {
    id: 10,
    title: "Cozy Cottage by the Lake",
    location: "789 Oak St, City, State 54321",
    bed: 2,
    bath: 1,
    area: 800,
    type: "cottage",
    price: 300000,
    category: ["agriculture"],
    coverImg: "/images/properties/properties4.png",
    images: [
      "/images/properties/properties-banner.png",
      "/images/properties/properties-banner2.png",
      "/images/properties/properties-banner3.png",
      "/images/properties/properties-banner22.png",
      "/images/properties/properties-banner33.png",
    ],
    monthlyPayment: 800,
    details: {
      title: "Charming Cottage with Lake Views",
      description: "Escape to this cozy retreat by the lake.",
    },
    features: {
      parking: true,
      outdoor: true,
      ac: false,
      hoa: false,
      persqftprice: 375,
      listed: true,
      buildYear: 2000,
    },
    agentInfo: {
      id: 4,
      img: "/images/agent/agent4.png",
      name: "Sarah Davis",
      rating: 4.7,
      phone: "(555) 123-4567",
      email: "sarah@example.com",
    },
  },
  {
    id: 11,
    title: "Royal Luxe Homes at Pine City",
    location: "987 Pine St, City, State 56789",
    bed: 3,
    bath: 3,
    area: 2000,
    type: "penthouse",
    category: ["agriculture", "industrial"],
    price: 1500000,
    coverImg: "/images/properties/properties11.png",
    images: [
      "/images/properties/properties-banner.png",
      "/images/properties/properties-banner2.png",
      "/images/properties/properties-banner3.png",
      "/images/properties/properties-banner22.png",
      "/images/properties/properties-banner33.png",
    ],
    monthlyPayment: 3000,
    details: {
      title: "Exquisite Penthouse with Panoramic Views",
      description: "Experience luxury living at its finest in this penthouse.",
    },
    features: {
      parking: true,
      outdoor: true,
      ac: true,
      hoa: true,
      persqftprice: 750,
      listed: true,
      buildYear: 2018,
    },
    agentInfo: {
      id: 5,
      img: "/images/agent/agent5.png",
      name: "Michael Johnson",
      rating: 4.9,
      phone: "(555) 987-6543",
      email: "michael@example.com",
    },
  },
  {
    id: 12,
    title: "The Farmhouse in the Middle of the Nature",
    location: "321 Maple St, City, State 98765",
    bed: 4,
    bath: 2,
    area: 1800,
    type: "townhouse",
    category: ["agriculture", "industrial"],
    price: 700000,
    coverImg: "/images/properties/properties12.png",
    images: [
      "/images/properties/properties-banner.png",
      "/images/properties/properties-banner2.png",
      "/images/properties/properties-banner3.png",
      "/images/properties/properties-banner22.png",
      "/images/properties/properties-banner33.png",
    ],
    monthlyPayment: 1500,
    details: {
      title: "Charming Townhouse with Rich History",
      description: "Step back in time in this beautifully preserved townhouse.",
    },
    features: {
      parking: true,
      outdoor: false,
      ac: true,
      hoa: true,
      persqftprice: 388,
      listed: true,
      buildYear: 1890,
    },
    agentInfo: {
      id: 6,
      img: "/images/agent/agent6.png",
      name: "Jessica Thompson",
      rating: 4.6,
      phone: "(555) 789-0123",
      email: "jessica@example.com",
    },
  },
  {
    id: 1,
    title: "Trovilla Plan in Sereno Canyon - Estate Collection by Toll Brothers",
    location: "2861 62nd Ave, Oakland, CA 94605",
    bed: 3,
    bath: 1,
    area: 1032,
    type: "family",
    price: 659900,
    category: ["commercial", "industrial", "agriculture"],
    coverImg: "/images/properties/properties1.png",
    images: [
      "/images/properties/properties-banner.png",
      "/images/properties/properties-banner2.png",
      "/images/properties/properties-banner3.png",
      "/images/properties/properties-banner22.png",
      "/images/properties/properties-banner33.png",
    ],
    monthlyPayment: 850,
    details: {
      title: "Well-constructed 1562 Sq Ft Home Is Now Offering To You In Uttara For Sale",
      description:
        "A slider is great way to display a slideshow featuring images or videos, usually on your homepage. Adding sliders to your site is no longer difficult. You don’t have to know coding anymore. Just use a slider widget and it will automatically insert the slider on your web page. So, the Elementor slider would be a great tool to work with when building a WordPress site.",
    },
    features: {
      parking: true,
      outdoor: false,
      ac: false,
      hoa: false,
      persqftprice: 560,
      listed: false,
      buildYear: 2022,
    },
    agentInfo: {
      id: 1,
      img: "/images/agent/agent1.png",
      name: "Bruno Fernandes",
      rating: 4.5,
      phone: "(302) 555-0107",
      email: "staticmania@gmail.com",
    },
  },
  {
    id: 9,
    title: "Double Storied Spacious Villa with Pool",
    location: "456 Elm St, City, State 67890",
    bed: 4,
    bath: 3,
    area: 2500,
    type: "villa",
    price: 900000,
    category: ["commercial", "agriculture", "industrial"],
    coverImg: "/images/properties/properties9.png",
    images: [
      "/images/properties/properties-banner.png",
      "/images/properties/properties-banner2.png",
      "/images/properties/properties-banner3.png",
      "/images/properties/properties-banner22.png",
      "/images/properties/properties-banner33.png",
    ],
    monthlyPayment: 1800,
    details: {
      title: "Luxurious Villa with Beautiful Outdoor Space",
      description: "Enjoy resort-style living in this stunning villa.",
    },
    features: {
      parking: true,
      outdoor: true,
      ac: true,
      hoa: false,
      persqftprice: 700,
      listed: true,
      buildYear: 2015,
    },
    agentInfo: {
      id: 3,
      img: "/images/agent/agent3.png",
      name: "John Smith",
      rating: 4.2,
      phone: "(987) 654-3210",
      email: "john@example.com",
    },
  },
];

// TESTIMONIAL DATA

export const testimonialData = [
  {
    id: 1,
    review:
      "I can't wait to show it off and receive compliments on my impeccable taste. NextBid is truly a treasure trove for fashion enthusiasts, offering exclusive items at unbelievable prices.",
    user: {
      name: "John Smith",
      img: "/images/testimonial/client1.png",
      position: "Marketing Manager - Static Mania",
    },
  },
  {
    id: 2,
    review:
      "Discover fashion treasures at NextBid. Unleash your style game with exclusive pieces at amazing prices. Find your signature look and make a statement. Join the fashion revolution at NextBid",
    user: {
      name: "Sarah Johnson",
      img: "/images/testimonial/client2.png",
      position: "Sales Executive - Static Mania",
    },
  },
  {
    id: 3,
    review:
      "Flaunt impeccable style. NextBid: haven for fashion enthusiasts, offering exclusive pieces at incredible prices. Explore more. Find fashion treasure. Join the endless possibilities.",
    user: {
      name: "Michael Brown",
      img: "/images/testimonial/client3.png",
      position: "Customer Support - Static Mania",
    },
  },
  {
    id: 5,
    review:
      "Elevate your fashion game with NextBid. Unlock exclusive styles at unbeatable prices. Discover your fashion identity and make heads turn. Experience the thrill of NextBid today!",
    user: {
      name: "Daniel Wilson",
      img: "/images/testimonial/client2.png",
      position: "IT Specialist - Static Mania",
    },
  },
  {
    id: 4,
    review:
      "Step into NextBid, redefine your fashion journey. Uncover hidden gems at incredible prices. Embrace your style, leave a lasting impression. NextBid: your fashion destination.",
    user: {
      name: "Emily Davis",
      img: "/images/testimonial/client3.png",
      position: "Operations Manager - Static Mania",
    },
  },
];

// BLOG POST DATA
export const teamData = [
  {
    id: 1,
    name: "Guy Hawkins",
    position: "Marketing Manager",
    image: "/images/team/team1.png",
  },
  {
    id: 2,
    name: "Jane Johnson",
    position: "Sales Executive",
    image: "/images/team/team2.png",
  },
  {
    id: 3,
    name: "Michael Smith",
    position: "Product Manager",
    image: "/images/team/team3.png",
  },
  {
    id: 4,
    name: "Emily Davis",
    position: "Graphic Designer",
    image: "/images/team/team4.png",
  },
  {
    id: 5,
    name: "Alex Turner",
    position: "Software Engineer",
    image: "/images/team/team5.png",
  },
  {
    id: 6,
    name: "Olivia Roberts",
    position: "Content Writer",
    image: "/images/team/team6.png",
  },
  {
    id: 7,
    name: "William Brown",
    position: "Business Analyst",
    image: "/images/team/team7.png",
  },
  {
    id: 8,
    name: "Sophia Walker",
    position: "HR Manager",
    image: "/images/team/team8.png",
  },
  {
    id: 9,
    name: "Liam Thompson",
    position: "Project Coordinator",
    image: "/images/team/team9.png",
  },
  {
    id: 10,
    name: "Isabella Wilson",
    position: "Marketing Coordinator",
    image: "/images/team/team10.png",
  },
  {
    id: 11,
    name: "Daniel Evans",
    position: "Operations Manager",
    image: "/images/team/team11.png",
  },
];

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

// AGENT INFORMATION
export const agentInformationData = [
  {
    id: 1,
    name: "Arial Leon",
    rating: 4.5,
    image: "/images/agent/agent1.png",
    email: "arialleon12@gmail.com",
    phone: "(123) 456-123-071",
    experience: 10,
    propertyType: ["Private House", "Vila", "Townhouse", "Apartment"],
    area: "California, San Jose, Miami",
    license: "BF-05335",
    website: "http://www.staticmania.com",
    socialMedia: [
      {id: 1, name: "Facebook", icon: <FacebookIcon />, link: "#"},
      {id: 2, name: "Twitter", icon: <TwitterIcon />, link: "#"},
      {id: 3, name: "Instagram", icon: <InstagramIcon />, link: "#"},
      {id: 4, name: "LinkedIn", icon: <LinkedInIcon />, link: "#"},
      {id: 5, name: "Youtube", icon: <YouTubeIcon />, link: "#"},
    ],
    address: "Washington, San Francisco",
    about: [
      "A slider is a great way to display a slideshow featuring images or videos, usually on your homepage. Adding sliders to your site is no longer difficult. You don’t have to know coding anymore. Just use a slider widget and it will automatically insert the slider on your web page.",
      "One of the best ways to add beautiful sliders with excellent responsiveness and advanced options.",
    ],
  },
  {
    id: 2,
    name: "John Smith",
    rating: 4.2,
    image: "/images/agent/agent2.png",
    email: "johnsmith@gmail.com",
    phone: "(123) 456-7890",
    experience: 8,
    propertyType: ["Condo", "Penthouse", "Duplex"],
    area: "New York, Manhattan",
    license: "BF-01234",
    website: "http://www.johnsmith.com",
    address: "Washington, San Francisco",
    socialMedia: [
      {id: 1, name: "Facebook", icon: <FacebookIcon />, link: "#"},
      {id: 2, name: "Twitter", icon: <TwitterIcon />, link: "#"},
      {id: 3, name: "Instagram", icon: <InstagramIcon />, link: "#"},
      {id: 4, name: "LinkedIn", icon: <LinkedInIcon />, link: "#"},
      {id: 5, name: "Youtube", icon: <YouTubeIcon />, link: "#"},
    ],
    about: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae tincidunt dui, ac hendrerit dolor. Vestibulum imperdiet, turpis vitae porta pharetra, urna nisi commodo ante, non consequat odio sapien non sapien.",
      "Phasellus id lacus non arcu aliquam cursus nec in risus. Donec semper est vitae mauris rhoncus, eget scelerisque tellus mattis. Integer pellentesque elit ac dui facilisis, nec dignissim ligula congue.",
    ],
  },
  {
    id: 3,
    name: "Emma Johnson",
    rating: 4.8,
    image: "/images/agent/agent3.png",
    email: "emmajohnson@gmail.com",
    phone: "(123) 456-7891",
    experience: 12,
    propertyType: ["Single Family Home", "Condo", "Townhouse"],
    area: "Florida, Miami",
    license: "BF-09876",
    website: "http://www.emmajohnson.com",
    address: "Florida, San Francisco",
    socialMedia: [
      {id: 1, name: "Facebook", icon: <FacebookIcon />, link: "#"},
      {id: 2, name: "Twitter", icon: <TwitterIcon />, link: "#"},
      {id: 3, name: "Instagram", icon: <InstagramIcon />, link: "#"},
      {id: 4, name: "LinkedIn", icon: <LinkedInIcon />, link: "#"},
      {id: 5, name: "Youtube", icon: <YouTubeIcon />, link: "#"},
    ],
    about: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae tincidunt dui, ac hendrerit dolor. Vestibulum imperdiet, turpis vitae porta pharetra, urna nisi commodo ante, non consequat odio sapien non sapien.",
      "Phasellus id lacus non arcu aliquam cursus nec in risus. Donec semper est vitae mauris rhoncus, eget scelerisque tellus mattis. Integer pellentes",
    ],
  },
  {
    id: 4,
    name: "Sophia Roberts",
    rating: 4.6,
    image: "/images/agent/agent4.png",
    email: "sophiaroberts@gmail.com",
    phone: "(123) 456-7892",
    experience: 9,
    propertyType: ["Apartment", "Duplex"],
    area: "Texas, Houston",
    license: "BF-07654",
    website: "http://www.sophiaroberts.com",
    address: "Washington, Atlanta",
    socialMedia: [
      {id: 1, name: "Facebook", icon: <FacebookIcon />, link: "#"},
      {id: 2, name: "Twitter", icon: <TwitterIcon />, link: "#"},
      {id: 3, name: "Instagram", icon: <InstagramIcon />, link: "#"},
      {id: 4, name: "LinkedIn", icon: <LinkedInIcon />, link: "#"},
      {id: 5, name: "Youtube", icon: <YouTubeIcon />, link: "#"},
    ],
    about: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae tincidunt dui, ac hendrerit dolor. Vestibulum imperdiet, turpis vitae porta pharetra, urna nisi commodo ante, non consequat odio sapien non sapien.",
      "Phasellus id lacus non arcu aliquam cursus nec in risus. Donec semper est vitae mauris rhoncus, eget scelerisque tellus mattis. Integer pellentesque elit ac dui facilisis, nec dignissim ligula congue.",
    ],
  },
  {
    id: 5,
    name: "Oliver Taylor",
    rating: 4.7,
    image: "/images/agent/agent5.png",
    email: "olivertaylor@gmail.com",
    phone: "(123) 456-7893",
    experience: 11,
    propertyType: ["Townhouse", "Condo"],
    area: "Washington, Seattle",
    address: "Illinois, Atlanta",
    license: "BF-06543",
    website: "http://www.olivertaylor.com",
    socialMedia: [
      {id: 1, name: "Facebook", icon: <FacebookIcon />, link: "#"},
      {id: 2, name: "Twitter", icon: <TwitterIcon />, link: "#"},
      {id: 3, name: "Instagram", icon: <InstagramIcon />, link: "#"},
      {id: 4, name: "LinkedIn", icon: <LinkedInIcon />, link: "#"},
      {id: 5, name: "Youtube", icon: <YouTubeIcon />, link: "#"},
    ],
    about: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae tincidunt dui, ac hendrerit dolor. Vestibulum imperdiet, turpis vitae porta pharetra, urna nisi commodo ante, non consequat odio sapien non sapien.",
      "Phasellus id lacus non arcu aliquam cursus nec in risus. Donec semper est vitae mauris rhoncus, eget scelerisque tellus mattis. Integer pellentesque elit ac dui facilisis, nec dignissim ligula congue.",
    ],
  },
  {
    id: 6,
    name: "Isabella Clark",
    rating: 4.4,
    image: "/images/agent/agent6.png",
    email: "isabellaclark@gmail.com",
    phone: "(123) 456-7894",
    experience: 7,
    propertyType: ["Villa", "Private House"],
    area: "California, Los Angeles",
    license: "BF-03456",
    address: "Massachusetts, Los Angeles",
    website: "http://www.isabellaclark.com",
    socialMedia: [
      {id: 1, name: "Facebook", icon: <FacebookIcon />, link: "#"},
      {id: 2, name: "Twitter", icon: <TwitterIcon />, link: "#"},
      {id: 3, name: "Instagram", icon: <InstagramIcon />, link: "#"},
      {id: 4, name: "LinkedIn", icon: <LinkedInIcon />, link: "#"},
      {id: 5, name: "Youtube", icon: <YouTubeIcon />, link: "#"},
    ],
    about: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae tincidunt dui, ac hendrerit dolor. Vestibulum imperdiet, turpis vitae porta pharetra, urna nisi commodo ante, non consequat odio sapien non sapien.",
      "Phasellus id lacus non arcu aliquam cursus nec in risus. Donec semper est vitae mauris rhoncus, eget scelerisque tellus mattis. Integer pellentesque elit ac dui facilisis, nec dignissim ligula congue.",
    ],
  },
  {
    id: 7,
    name: "William Davis",
    rating: 4.3,
    image: "/images/agent/agent7.png",
    email: "williamdavis@gmail.com",
    phone: "(123) 456-7895",
    experience: 9,
    propertyType: ["Apartment"],
    area: "Texas, Austin",
    license: "BF-04321",
    address: "Illinois, Los Angeles",
    website: "http://www.williamdavis.com",
    socialMedia: [
      {id: 1, name: "Facebook", icon: <FacebookIcon />, link: "#"},
      {id: 2, name: "Twitter", icon: <TwitterIcon />, link: "#"},
      {id: 3, name: "Instagram", icon: <InstagramIcon />, link: "#"},
      {id: 4, name: "LinkedIn", icon: <LinkedInIcon />, link: "#"},
      {id: 5, name: "Youtube", icon: <YouTubeIcon />, link: "#"},
    ],
    about: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae tincidunt dui, ac hendrerit dolor. Vestibulum imperdiet, turpis vitae porta pharetra, urna nisi commodo ante, non consequat odio sapien non sapien.",
      "Phasellus id lacus non arcu aliquam cursus nec in risus. Donec semper est vitae mauris rhoncus, eget scelerisque tellus mattis. Integer pellentesque elit ac dui facilisis, nec dignissim ligula congue.",
    ],
  },
  {
    id: 8,
    name: "James Anderson",
    rating: 4.9,
    image: "/images/agent/agent8.png",
    email: "jamesanderson@gmail.com",
    phone: "(123) 456-7896",
    experience: 13,
    propertyType: ["Private House", "Villa", "Townhouse"],
    area: "Florida, Orlando",
    license: "BF-08765",
    address: "Illinois, Houston",
    website: "http://www.jamesanderson.com",
    socialMedia: [
      {id: 1, name: "Facebook", icon: <FacebookIcon />, link: "#"},
      {id: 2, name: "Twitter", icon: <TwitterIcon />, link: "#"},
      {id: 3, name: "Instagram", icon: <InstagramIcon />, link: "#"},
      {id: 4, name: "LinkedIn", icon: <LinkedInIcon />, link: "#"},
      {id: 5, name: "Youtube", icon: <YouTubeIcon />, link: "#"},
    ],
    about: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae tincidunt dui, ac hendrerit dolor. Vestibulum imperdiet, turpis vitae porta pharetra, urna nisi commodo ante, non consequat odio sapien non sapien.",
      "Phasellus id lacus non arcu aliquam cursus nec in risus. Donec semper est vitae mauris rhoncus, eget scelerisque tellus mattis. Integer pellentesque elit ac dui facilisis, nec dignissim ligula congue.",
    ],
  },
  {
    id: 9,
    name: "Emily Wilson",
    rating: 4.7,
    image: "/images/agent/agent9.png",
    email: "emilywilson@gmail.com",
    phone: "(123) 456-7897",
    experience: 11,
    propertyType: ["Single Family Home", "Condo", "Townhouse"],
    area: "New York, Brooklyn",
    license: "BF-07654",
    address: "Massachusetts, New York",
    website: "http://www.emilywilson.com",
    socialMedia: [
      {id: 1, name: "Facebook", icon: <FacebookIcon />, link: "#"},
      {id: 2, name: "Twitter", icon: <TwitterIcon />, link: "#"},
      {id: 3, name: "Instagram", icon: <InstagramIcon />, link: "#"},
      {id: 4, name: "LinkedIn", icon: <LinkedInIcon />, link: "#"},
      {id: 5, name: "Youtube", icon: <YouTubeIcon />, link: "#"},
    ],
    about: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae tincidunt dui, ac hendrerit dolor. Vestibulum imperdiet, turpis vitae porta pharetra, urna nisi commodo ante, non consequat odio sapien non sapien.",
      "Phasellus id lacus non arcu aliquam cursus nec in risus. Donec semper est vitae mauris rhoncus, eget scelerisque tellus mattis. Integer pellentesque elit ac dui facilisis, nec dignissim ligula congue.",
    ],
  },
  {
    id: 10,
    name: "Michael Thompson",
    rating: 4.6,
    image: "/images/agent/agent10.png",
    email: "michaelthompson@gmail.com",
    phone: "(123) 456-7898",
    experience: 9,
    propertyType: ["Apartment", "Duplex"],
    area: "Texas, Dallas",
    license: "BF-06543",
    address: "California, Atlanta",
    website: "http://www.michaelthompson.com",
    socialMedia: [
      {id: 1, name: "Facebook", icon: <FacebookIcon />, link: "#"},
      {id: 2, name: "Twitter", icon: <TwitterIcon />, link: "#"},
      {id: 3, name: "Instagram", icon: <InstagramIcon />, link: "#"},
      {id: 4, name: "LinkedIn", icon: <LinkedInIcon />, link: "#"},
      {id: 5, name: "Youtube", icon: <YouTubeIcon />, link: "#"},
    ],
    about: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae tincidunt dui, ac hendrerit dolor. Vestibulum imperdiet, turpis vitae porta pharetra, urna nisi commodo ante, non consequat odio sapien non sapien.",
      "Phasellus id lacus non arcu aliquam cursus nec in risus. Donec semper est vitae mauris rhoncus, eget scelerisque tellus mattis. Integer pellentesque elit ac dui facilisis, nec dignissim ligula congue.",
    ],
  },
  {
    id: 11,
    name: "Sophie Walker",
    rating: 4.9,
    image: "/images/agent/agent11.png",
    email: "sophiewalker@gmail.com",
    phone: "(123) 456-7899",
    experience: 13,
    propertyType: ["Condo", "Townhouse"],
    area: "Washington, D.C.",
    address: "Washington, D.C",
    license: "BF-04321",
    website: "http://www.sophiewalker.com",
    socialMedia: [
      {id: 1, name: "Facebook", icon: <FacebookIcon />, link: "#"},
      {id: 2, name: "Twitter", icon: <TwitterIcon />, link: "#"},
      {id: 3, name: "Instagram", icon: <InstagramIcon />, link: "#"},
      {id: 4, name: "LinkedIn", icon: <LinkedInIcon />, link: "#"},
      {id: 5, name: "Youtube", icon: <YouTubeIcon />, link: "#"},
    ],
    about: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae tincidunt dui, ac hendrerit dolor. Vestibulum imperdiet, turpis vitae porta pharetra, urna nisi commodo ante, non consequat odio sapien non sapien.",
      "Phasellus id lacus non arcu aliquam cursus nec in risus. Donec semper est vitae mauris rhoncus, eget scelerisque tellus mattis. Integer pellentesque elit ac dui facilisis, nec dignissim ligula congue.",
    ],
  },
  {
    id: 12,
    name: "Benjamin Harris",
    rating: 4.7,
    image: "/images/agent/agent12.png",
    email: "benjaminharris@gmail.com",
    phone: "(123) 456-7900",
    experience: 11,
    propertyType: ["Villa", "Private House"],
    area: "California, San Francisco",
    address: "San Francisco Public",
    license: "BF-03456",
    website: "http://www.benjaminharris.com",
    socialMedia: [
      {id: 1, name: "Facebook", icon: <FacebookIcon />, link: "#"},
      {id: 2, name: "Twitter", icon: <TwitterIcon />, link: "#"},
      {id: 3, name: "Instagram", icon: <InstagramIcon />, link: "#"},
      {id: 4, name: "LinkedIn", icon: <LinkedInIcon />, link: "#"},
      {id: 5, name: "Youtube", icon: <YouTubeIcon />, link: "#"},
    ],
    about: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae tincidunt dui, ac hendrerit dolor. Vestibulum imperdiet, turpis vitae porta pharetra, urna nisi commodo ante, non consequat odio sapien non sapien.",
      "Phasellus id lacus non arcu aliquam cursus nec in risus. Donec semper est vitae mauris rhoncus, eget scelerisque tellus mattis. Integer pellentesque elit ac dui facilisis, nec dignissim ligula congue.",
    ],
  },
  {
    id: 13,
    name: "Charlotte Lewis",
    rating: 4.6,
    image: "/images/agent/agent1.png",
    email: "charlottelewis@gmail.com",
    phone: "(123) 456-7901",
    experience: 9,
    propertyType: ["Townhouse", "Condo"],
    area: "New York, Manhattan",
    address: "Colorado, Miami",
    license: "BF-06543",
    website: "http://www.charlottelewis.com",
    socialMedia: [
      {id: 1, name: "Facebook", icon: <FacebookIcon />, link: "#"},
      {id: 2, name: "Twitter", icon: <TwitterIcon />, link: "#"},
      {id: 3, name: "Instagram", icon: <InstagramIcon />, link: "#"},
      {id: 4, name: "LinkedIn", icon: <LinkedInIcon />, link: "#"},
      {id: 5, name: "Youtube", icon: <YouTubeIcon />, link: "#"},
    ],
    about: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae tincidunt dui, ac hendrerit dolor. Vestibulum imperdiet, turpis vitae porta pharetra, urna nisi commodo ante, non consequat odio sapien non sapien.",
      "Phasellus id lacus non arcu aliquam cursus nec in risus. Donec semper est vitae mauris rhoncus, eget scelerisque tellus mattis. Integer pellentesque elit ac dui facilisis, nec dignissim ligula congue.",
    ],
  },
  {
    id: 14,
    name: "Joseph Turner",
    rating: 4.9,
    image: "/images/agent/agent2.png",
    email: "josephturner@gmail.com",
    phone: "(123) 456-7902",
    experience: 13,
    propertyType: ["Condo", "Penthouse"],
    area: "Florida, Miami",
    address: "Washington, Los Angeles",
    license: "BF-04321",
    website: "http://www.josephturner.com",
    socialMedia: [
      {id: 1, name: "Facebook", icon: <FacebookIcon />, link: "#"},
      {id: 2, name: "Twitter", icon: <TwitterIcon />, link: "#"},
      {id: 3, name: "Instagram", icon: <InstagramIcon />, link: "#"},
      {id: 4, name: "LinkedIn", icon: <LinkedInIcon />, link: "#"},
      {id: 5, name: "Youtube", icon: <YouTubeIcon />, link: "#"},
    ],
    about: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae tincidunt dui, ac hendrerit dolor. Vestibulum imperdiet, turpis vitae porta pharetra, urna nisi commodo ante, non consequat odio sapien non sapien.",
      "Phasellus id lacus non arcu aliquam cursus nec in risus. Donec semper est vitae mauris rhoncus, eget scelerisque tellus mattis. Integer pellentesque elit ac dui facilisis, nec dignissim ligula congue.",
    ],
  },
];

// REVIEW DATA
export const reviewData = [
  {
    id: 1,
    review:
      "Eget eu massa et consectetur. Mauris donec. Leo a, id sed duis proin sodales. Turpis viverra diam porttitor mattis morbi ac amet. Euismod commodo. We get you customer relationships that last.",
    rating: 4.5,
    date: "02 June 2022",
    user: {
      name: "Atique Hasan",
      position: "CEO of Staticmania",
      image: "/images/agent/review.png",
    },
  },
  {
    id: 2,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor sem et lacus tristique varius. Nullam interdum malesuada convallis.",
    rating: 3.8,
    date: "12 September 2022",
    user: {
      name: "John Smith",
      position: "Marketing Manager",
      image: "/images/agent/review.png",
    },
  },
  {
    id: 3,
    review:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque ultricies volutpat facilisis.",
    rating: 4.2,
    date: "24 November 2022",
    user: {
      name: "Emma Johnson",
      position: "Sales Representative",
      image: "/images/agent/review.png",
    },
  },
  {
    id: 4,
    review:
      "Aliquam erat volutpat. Suspendisse potenti. Quisque sed arcu consectetur, varius tellus eget, mollis est. In hac habitasse platea dictumst.",
    rating: 4.0,
    date: "15 January 2023",
    user: {
      name: "Laura Davis",
      position: "Finance Manager",
      image: "/images/agent/review.png",
    },
  },
  {
    id: 5,
    review:
      "Phasellus ullamcorper nisi justo, vitae laoreet neque consequat vel. Mauris fringilla ipsum nec nisi ultricies, eget egestas leo lobortis.",
    rating: 4.7,
    date: "07 March 2023",
    user: {
      name: "Michael Clark",
      position: "Operations Director",
      image: "/images/agent/review.png",
    },
  },
  {
    id: 6,
    review:
      "Integer sodales nunc ut justo fringilla, sit amet consectetur sem pellentesque. Nullam vitae arcu gravida, ullamcorper neque non, consectetur elit.",
    rating: 4.3,
    date: "19 May 2023",
    user: {
      name: "Sophia Adams",
      position: "Customer Support Specialist",
      image: "/images/agent/review.png",
    },
  },
];
