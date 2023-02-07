import { FaHandsHelping } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { GiWallet } from "react-icons/gi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { RiMarkupFill } from "react-icons/ri";
import { BsNewspaper } from "react-icons/bs";

const sidebarMenus = [
  {
    name: "Dashboard",
    link: "/b2b",
    icon: <RxDashboard />,
  },
  {
    name: "Wallet",
    icon: <GiWallet />,
    link: "/b2b/wallet",
  },
  {
    name: "Attraction Orders",
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
  
  {
    name: "Visa Orders",
    icon: <BsNewspaper />,
    link: "/b2b/visa/order",
  },
  {
    name: "Markups",
    icon: <RiMarkupFill />,
    link: "#",
    dropdown: [
      {
        name: "Attraction",
        link: "/b2b/markup/attraction",
      },
      {
        name: "Visa",
        link: "/b2b/markup/visa",
      },
    ],
  },
  {
    name: "Sub Agents",
    icon: <FaHandsHelping />,
    link: "#",
    dropdown: [
      {
        name: "New Sub Agent",
        link: "/b2b/reseller/add",
      },
      {
        name: "Total Sub Agent",
        link: "/b2b/resellers",
      },
    ],
  },
  {
    name: "Settings",
    icon: <AiFillSetting />,
    link: "/b2b/settings",
  },
];

export default sidebarMenus;
