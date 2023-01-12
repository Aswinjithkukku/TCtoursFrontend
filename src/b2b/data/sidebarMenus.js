import { FaGlobe, FaHandsHelping } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { MdAttractions, MdSubscriptions } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { GiWallet } from "react-icons/gi";
import { HiOutlineShoppingCart, HiOutlineUsers } from "react-icons/hi";
import { RiMarkupFill, RiSteeringFill } from "react-icons/ri";

const sidebarMenus = [
  {
    name: "Dashboard",
    link: "/b2b",
    icon: <RxDashboard />,
  },
  {
    name: "Wallet",
    icon: <GiWallet />,
    link: "#",
    dropdown: [
      {
        name: "Wallet",
        link: "/attractions/orders/bookings",
      },
    ],
  },
  {
    name: "Orders",
    icon: <HiOutlineShoppingCart />,
    link: "#",
    dropdown: [
      {
        name: "Orders",
        link: "/attractions/orders/bookings",
      },
    ],
  },
  {
    name: "Markups",
    icon: <RiMarkupFill />,
    link: "#",
    dropdown: [
      {
        name: "Markups",
        link: "/b2b/markup/attraction",
      },
    ],
  },
  {
    name: "Resellers",
    icon: <FaHandsHelping />,
    link: "#",
    dropdown: [
      {
        name: "New Register",
        link: "/b2b/reseller/add",
      },
      {
        name: "Total Resellers",
        link: "/b2b/resellers",
      },
    ],
  },
  {
    name: "Attractions",
    icon: <MdAttractions />,
    link: "#",
    dropdown: [
      {
        name: "Attractions",
        link: "/b2b/attractions",
      },
    ],
  },
  {
    name: "Settings",
    icon: <AiFillSetting />,
    link: "/b2b/settings",
    // dropdown: [
    //   {
    //     name: "Attractions",
    //     link: "/b2b/attractions",
    //   },
    // ],
  },
];

export default sidebarMenus;
