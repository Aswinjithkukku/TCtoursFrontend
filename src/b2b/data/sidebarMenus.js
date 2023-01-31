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
    link: "/b2b/wallet",
    // dropdown: [
    //   {
    //     name: "Wallet",
    //     link: "/b2b/wallet",
    //   },
    // ],
  },
  {
    name: "Orders",
    icon: <HiOutlineShoppingCart />,
    link: "/b2b/order",
    // dropdown: [
    //   {
    //     name: "Order History",
    //     link: "/b2b/order",
    //   },
    //   {
    //     name: "Sub-Agent History",
    //     link: "/b2b/order/sub",
    //   },
    // ],
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
