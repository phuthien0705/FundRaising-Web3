import {
  createCampaign,
  dashboard,
  logout,
  payment,
  profile,
  withdraw,
} from "../assets";

export const navlinks = [
  {
    name: "dashboard",
    imgUrl: dashboard.src,
    link: "/",
  },
  {
    name: "campaign",
    imgUrl: createCampaign.src,
    link: "/create-campaign",
  },
  {
    name: "payment",
    imgUrl: payment.src,
    link: "/",
    disabled: true,
  },
  {
    name: "withdraw",
    imgUrl: withdraw.src,
    link: "/",
    disabled: true,
  },
  {
    name: "profile",
    imgUrl: profile.src,
    link: "/profile",
  },
  // {
  //   name: "logout",
  //   imgUrl: logout.src,
  //   link: "/",
  // },
];
