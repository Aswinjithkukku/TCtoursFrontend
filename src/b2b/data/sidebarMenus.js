import { FaHandsHelping } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { GiPortal, GiWallet } from "react-icons/gi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { GoPlus } from "react-icons/go";
import { BsNewspaper } from "react-icons/bs";

const sidebarMenus = [
  {
    name: "Portal",
    link: "/b2b",
    icon: <GiPortal />,
  },
  // {
  //   name: "Wallet",
  //   icon: <GiWallet />,
  //   link: "/b2b/wallet",
  // },
  {
    name: "Orders",
    icon: <HiOutlineShoppingCart />,
    link: "/b2b/order/attraction",
    // dropdown: [
    //   {
    //     name: "Attraction",
    //     link: "",
    //   },
    //   {
    //     name: "Visa",
    //     link: "",
    //   },
    // ],
  },
  
  // {
  //   name: "Visa Orders",
  //   icon: <BsNewspaper />,
  //   link: "/b2b/visa/order",
  // },
  {
    name: "Advanced Markups",
    icon: <GoPlus />,
    link: "/b2b/markup/attraction",
    // dropdown: [
    //   {
    //     name: "Attraction",
    //     link: "/b2b/markup/attraction",
    //   },
    //   {
    //     name: "Visa",
    //     link: "/b2b/markup/visa",
    //   },
    // ],
  },
  {
    name: "Agents",
    icon: <FaHandsHelping />,
    link: "/b2b/resellers",
    // dropdown: [
    //   {
    //     name: "New Sub Agent",
    //     link: "/b2b/reseller/add",
    //   },
    //   {
    //     name: "Total Sub Agent",
    //     link: "/b2b/resellers",
    //   },
    // ],
  },
  {
    name: "Settings",
    icon: <AiFillSetting />,
    link: "/b2b/settings",
  },
];

export default sidebarMenus;
