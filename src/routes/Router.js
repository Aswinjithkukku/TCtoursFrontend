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
  PaymentApproval,
  Invoice,
} from "../Pages/Hero";
import { PageNotFound, PaymentDecline } from "../Pages/Errors";
import {
  Attraction,
  AttractionDetails,
  B2BLoginPage,
  B2BRegisterPage,
  Dashboard,
  EditResellers,
  HeroSearch,
  MainOrder,
  MarkUpList,
  NewRegisters,
  PaymentHomePage,
  Resellers,
  Settings,
  Wallet,
} from "../b2b/pages";
import B2BPrivateRoute from "./B2BPrivateRoute";

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
      { path: "/payment/approval", element: <PaymentApproval /> },
      { path: "/Profile", element: <ProfileMainPage /> },
      { path: "/Profile/settings", element: <ProfileSettingsPage /> },
      { path: "/Profile/password", element: <ProfilePasswordPage /> },
    ],
  },
  {
    path: "",
    element: (
      <B2BPrivateRoute>
        <B2BMainLayout />
      </B2BPrivateRoute>
    ),
    children: [
      { path: "/b2b", element: <Dashboard /> },
      { path: "/b2b/reseller/add", element: <NewRegisters /> },
      { path: "/b2b/resellers", element: <Resellers /> },
      { path: "/b2b/reseller/edit", element: <EditResellers /> },
      { path: "/b2b/attractions", element: <HeroSearch /> },
      { path: "/b2b/attractions/:slug", element: <Attraction /> },
      { path: "/b2b/attractions/details/:id", element: <AttractionDetails /> },
      { path: "/b2b/attractions/payment/:id", element: <PaymentHomePage /> },
      { path: "/b2b/markup/attraction", element: <MarkUpList /> },
      { path: "/b2b/settings", element: <Settings /> },
      { path: "/b2b/order", element: <MainOrder /> },
      { path: "/b2b/wallet", element: <Wallet /> },
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
  {
    path: "/payment-decline",
    element: <PaymentDecline />,
  },
  {
    path: "/print",
    element: <Invoice />,
  },
];

export default ThemeRoutes;
