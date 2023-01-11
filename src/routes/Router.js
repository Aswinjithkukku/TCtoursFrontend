import MainLayout from "./MainLayout";
import B2BMainLayout from "./B2BMainLayout";

import {
  AttractionHomePage,
  AttractionDetailsPage,
  AttractionLandingPage,
  ComboLandingPage,
  SpecialOfferLandingPage,
  VisaLandingPage,
  BlogLandingPage,
  BlogDetailsPage,
  SearchingResultPage,
  PaymentPage,
  ProfileMainPage,
  ProfileSettingsPage,
  ProfilePasswordPage,
} from "../Pages/Hero";
import { PageNotFound } from "../Pages/Errors";
import {
  Attraction,
  AttractionDetails,
  B2BLoginPage,
  B2BRegisterPage,
  Dashboard,
  HeroSearch,
  MarkUpList,
  NewRegisters,
  PaymentHomePage,
  Resellers,
} from "../b2b/pages";

const ThemeRoutes = [
  {
    path: "",
    element: <MainLayout />,
    children: [
      { path: "", element: <AttractionHomePage /> },
      { path: "/attraction", element: <AttractionLandingPage /> },
      { path: "/details/:id", element: <AttractionDetailsPage /> },
      { path: "/combo", element: <ComboLandingPage /> },
      { path: "/specialoffer", element: <SpecialOfferLandingPage /> },
      { path: "/visa", element: <VisaLandingPage /> },
      { path: "/blog", element: <BlogLandingPage /> },
      { path: "/blog/detail/:slug", element: <BlogDetailsPage /> },
      { path: "/search/:slug", element: <SearchingResultPage /> },
      { path: "/payment/:id", element: <PaymentPage /> },
      { path: "/Profile", element: <ProfileMainPage /> },
      { path: "/Profile/settings", element: <ProfileSettingsPage /> },
      { path: "/Profile/password", element: <ProfilePasswordPage /> },
    ],
  },
  {
    path: "",
    element: <B2BMainLayout />,
    children: [
      { path: "/b2b", element: <Dashboard /> },
      { path: "/b2b/reseller/add", element: <NewRegisters /> },
      { path: "/b2b/resellers", element: <Resellers /> },
      { path: "/b2b/attractions", element: <HeroSearch /> },
      { path: "/b2b/attractions/:slug", element: <Attraction /> },
      { path: "/b2b/attractions/details/:id", element: <AttractionDetails /> },
      { path: "/b2b/attractions/payment/:id", element: <PaymentHomePage /> },
      { path: "/b2b/markup/attraction", element: <MarkUpList /> },
    ],
  },
  {
    path: "/b2b/login",
    element: <B2BLoginPage />,
  },
  {
    path: "/b2b/register",
    element: <B2BRegisterPage />,
  },
  {
    path: "/*",
    element: <PageNotFound />,
  },
];

export default ThemeRoutes;
