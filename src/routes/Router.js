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
   PaymentApprovalPage,
   Invoice,
   VisaActionPage,
   OrderListPage,
   VisaApplyInvoicePage,
   ReApplyVisaPage,
} from "../Pages/Hero";
import { PageNotFound, PaymentDecline } from "../Pages/Errors";
import {
   Attraction,
   AttractionDetails,
   AttractionInvoice,
   AttractionOrderInvoice,
   B2BLoginPage,
   B2BRegisterPage,
   Dashboard,
   DubaiDolphinarium,
   EditResellers,
   AttractionOrder,
   MarkUpList,
   NewRegisters,
   PaymentApproval,
   PaymentHomePage,
   Resellers,
   Settings,
   SingleSubAgent,
   VisaApplySuccessPage,
   VisaHomeScreen,
   VisaIndex,
   VisaMarkupList,
   VisaOrderDetailsPage,
   VisaOrderPage,
   Wallet,
   ReapplyIndividual,
   PaymentSuccessPage,
   AttractionSingleTicketPage,
   FlightHomePage,
   FlightBookingPage,
   HotelIndexPage,
   HotelDetailIndex,
   HotelApplyIndex,
} from "../b2b/pages";
import B2BPrivateRoute from "./B2BPrivateRoute";
import LoadingWrapper from "./LoadingWrapper";
import { AxiosInterceptor } from "../axios";

const ThemeRoutes = [
   {
      path: "",
      element: (
         <LoadingWrapper>
            <MainLayout />
         </LoadingWrapper>
      ),
      children: [
         { path: "", element: <AttractionHomePage /> },
         { path: "/attraction", element: <AttractionLandingPage /> },
         { path: "/details/:id", element: <AttractionDetailsPage /> },
         {
            path: "/print/:id",
            element: <Invoice />,
         },
         { path: "/combo", element: <ComboLandingPage /> },
         { path: "/specialoffer", element: <SpecialOfferLandingPage /> },
         { path: "/visa/:id", element: <VisaLandingPage /> },
         { path: "/visa/apply", element: <VisaActionPage /> },
         { path: "/visa/invoice/:orderId", element: <VisaApplyInvoicePage /> },
         {
            path: "/visa/reapply",
            element: <ReApplyVisaPage />,
         },
         { path: "/blog", element: <BlogLandingPage /> },
         { path: "/blog/detail/:slug", element: <BlogDetailsPage /> },
         { path: "/search/:slug", element: <SearchingResultPage /> },
         { path: "/payment", element: <PaymentPage /> },
         { path: "/payment/approval/:id", element: <PaymentApprovalPage /> },
         { path: "/Profile", element: <ProfileMainPage /> },
         { path: "/Profile/settings", element: <ProfileSettingsPage /> },
         { path: "/Profile/password", element: <ProfilePasswordPage /> },
         { path: "/order", element: <OrderListPage /> },
      ],
   },
   {
      path: "",
      element: (
         <AxiosInterceptor>
            <B2BPrivateRoute>
               <B2BMainLayout />
            </B2BPrivateRoute>
         </AxiosInterceptor>
      ),
      children: [
         {
            path: "/b2b",
            element: <Dashboard />,
         },
         { path: "/b2b/reseller/add", element: <NewRegisters /> },
         { path: "/b2b/resellers", element: <Resellers /> },
         { path: "/b2b/reseller/edit", element: <EditResellers /> },
         { path: "/b2b/reseller/:id", element: <SingleSubAgent /> },
         { path: "/b2b/attractions/:slug", element: <Attraction /> },
         {
            path: "/b2b/attractions/details/:id",
            element: <AttractionDetails />,
         },
         { path: "/b2b/attractions/payment", element: <PaymentHomePage /> },
         { path: "/b2b/payment/approval", element: <PaymentApproval /> },
         { path: "/b2b/markup/attraction", element: <MarkUpList /> },
         { path: "/b2b/markup/visa", element: <VisaMarkupList /> },
         { path: "/b2b/settings", element: <Settings /> },
         { path: "/b2b/order/attraction", element: <AttractionOrder /> },
         { path: "/b2b/wallet", element: <Wallet /> },
         { path: "/b2b/visa/:id", element: <VisaHomeScreen /> },
         { path: "/b2b/visa/:id/apply", element: <VisaIndex /> },
         { path: "/b2b/visa/order", element: <VisaOrderPage /> },
         {
            path: "/b2b/visa/order/:id/details",
            element: <VisaOrderDetailsPage />,
         },
         {
            path: "/b2b/visa/order/:id/details/:passenger",
            element: <ReapplyIndividual />,
         },
         {
            path: "/b2b/visa/apply/invoice/:id",
            element: <VisaApplySuccessPage />,
         },
         {
            path: "/b2b/attractions/invoice/:id",
            element: <AttractionInvoice />,
         },
         { path: "/b2b/flight/order", element: <FlightHomePage /> },
         { path: "/b2b/flight/booking", element: <FlightBookingPage /> },
         { path: "/b2b/hotel", element: <HotelIndexPage /> },
         { path: "/b2b/hotel/details", element: <HotelDetailIndex /> },
         { path: "/b2b/hotel/apply", element: <HotelApplyIndex /> },
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
      path: "/error",
      element: <PageNotFound />,
   },
   {
      path: "/payment-decline",
      element: <PaymentDecline />,
   },
   {
      path: "/attractions/invoice",
      element: <AttractionOrderInvoice />,
   },
   {
      path: "/b2b/attractions/invoice",
      element: <AttractionOrderInvoice />,
   },
   {
      path: "/attractions/invoice/dolphin",
      element: <DubaiDolphinarium />,
   },
   {
      path: "/ticket/attraction/:id",
      element: <AttractionSingleTicketPage />,
   },
   {
      path: "/b2b/wallet/deposit/:id/cancelled",
      element: <PaymentDecline />,
   },
   {
      path: "/b2b/wallet/deposit/:id/success",
      element: <PaymentSuccessPage />,
   },
];

export default ThemeRoutes;
