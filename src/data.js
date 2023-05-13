import Logo from "../src/assets/logo.png"
import Mtn from "../src/assets/mtn.png"
import Airtel from "../src/assets/airtel.png"
import Glo from "../src/assets/glo.png"
import Ninemobile from "../src/assets/9mobile.png"
import HeroPerson1 from "../src/assets/heroperson1.png"
import HeroPerson2 from "../src/assets/heroperson2.png"
import HeroPerson3 from "../src/assets/heroperson3.png"
import HeroPerson4 from "../src/assets/heroperson4.png"
import Mockup1 from "../src/assets/mockup1.png"
import Mockup2 from "../src/assets/mockup2.png"
import Mockup3 from "../src/assets/mockup3.png"
import Mockup4 from "../src/assets/mockup4.png"
import Image1 from "../src/assets/1.png"
import Image2 from "../src/assets/2.png"
import Image3 from "../src/assets/3.png"
import Image4 from "../src/assets/4.png"
import Deal1 from "../src/assets/Deal.png"
import Deal2 from "../src/assets/Deal2.png"
import Deal3 from "../src/assets/Deal3.png"
import Deal4 from "../src/assets/deal1.png"
import Deal5 from "../src/assets/deals2.png"
import Deal6 from "../src/assets/deals3.png"
import Mockup5 from "../src/assets/mockup5.png"
import Twitter from "../src/assets/Twitter.png"
import Facebook from "../src/assets/facebook.png"
import Linkedin from "../src/assets/linkedin.png"
import Instagram from "../src/assets/instagram.png"
import Group from "../src/assets/group1.png"




export const nav = {
    logo: Logo,
    loginText: "Log in",
    signupText: "Get Started",
    navItems : [
    {name: "Home", href: "/"},
    {name: "Deals", href: "/"},
    {name: "Merchants", href: "/"},
    {name: "How It Works", href: "/"},
    {name: "Contact", href: "/"},
    {name: "FAQ", href: "/"},

],
}


export const hero = {
    title: "Earn more while you shop on Plenti",
    subtext: "With plenti, you can get exclusive discounts and offers on your everyday purchase",
    Image: Group
}

export const services1 = {
    title: "Make transactions anwhere at anytime",
    subtext: "With plenti, you can make transactions, buy airtime, data, pay bills and borrow funds easily in a few easy steps and get rewarded.",
    Image: Mockup2
}

export const services2 = {
    title: "Get gift cards",
    subtext: "Grab a gift card for your favourite shops and restaurant, share with your friends and loved ones and get cash back on the entire amount instantly.",
    Image: Image1
}

export const services3 = {
    title: "Create Voucher",
    subtext: "With our new and improved function, you can easily create vouchers, get to a plenti store and claim your voucher to earn more points.",
    Image: Image2
}

export const section3 = {
    title: "Buy deals, get it delivered in 48Hrs and earn points",
    subtext: "Never miss cash backs when you buy a deal from the Plenti App. New deals are uploaded on weekly bases on the app. You also earn points when you buy any deal from Plenti, you can either get an extra on your purchase or get discount.",
    btnText: "View all deals",
    Image: Mockup4
}

export const section5 = {
    title: "Get the app now on your mobile device",
    subtext: "It will only take a few minutes to start buying and making transactions on the Plenti App.Download on google play store today",
    Image: Mockup5
}

export const networks = [Airtel, Mtn, Glo, Ninemobile]

export const services4 = {
    title: "",
    subtext: ""
}

export const services5 = {
    title: "",
    subtext: ""
}

export const slides = [
    {
      id: 1,
      caption: 'carousel-image-1.jpg',
      imageUrl: Deal4,
    },
    {
      id: 2,
      caption: 'carousel-image-2.jpg',
      imageUrl: Deal5,
    },
    {
      id: 3,
      caption: 'carousel-image-3.jpg',
      imageUrl: Deal6,
    },
    {
        id: 4,
        caption: 'carousel-image-3.jpg',
        imageUrl: Deal4,
      },
      {
        id: 5,
        caption: 'carousel-image-3.jpg',
        imageUrl: Deal5,
      },
      {
        id: 6,
        caption: 'carousel-image-3.jpg',
        imageUrl: Deal6,
      },
  ];

  export const SocialIcons = [Twitter, Linkedin, Facebook, Instagram]
  export const section4 = {
    title: "Get Instant loan anytime you are stuck",
    btnText: 'Get Started',
    subtext: "With Plenti loan, you don’t need to worry so much about what to get, just request for it and you can easily get the deals you want.",
    Image: Mockup1,
    items: [
        {
            id: 1,
            caption: 'Find the deal you need',
            
          },
          {
            id: 2,
            caption: 'Request for loan',
            
          },
          {
            id: 3,
            caption: 'Provide your details',
          },
          {
            id: 4,
            caption: 'Get loan',
          },
          {
            id: 3,
            caption: 'Get what you need',
          },
    ]


};


