import { FaGlobe, FaHandsHelping } from "react-icons/fa";
import { FiHome, FiMapPin } from "react-icons/fi";
import { MdAttractions, MdSubscriptions } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { ImBlog } from "react-icons/im";
import { HiOutlineShoppingCart, HiOutlineUsers } from "react-icons/hi";
import { RiMarkupFill, RiSteeringFill } from "react-icons/ri";

const sidebarMenus = [
  {
    name: "Dashboard",
    link: "/b2b",
    icon: <RxDashboard />,
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
    name: "Orders",
    icon: <HiOutlineShoppingCart />,
    link: "#",
    dropdown: [
      {
        name: "orders",
        link: "/attractions/orders/bookings",
      },
    ],
  },
];

export default sidebarMenus;
