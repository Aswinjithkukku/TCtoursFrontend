import MainLayout from "./MainLayout";

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
    ProfilePasswordPage
} from '../Pages/Hero'
import { PageNotFound } from "../Pages/Errors";

const ThemeRoutes = [
    {
        path: "",
        element: (
            <MainLayout />
        ),
        children: [
            { path: "", element: <AttractionHomePage /> },
            { path: "/attraction", element: <AttractionLandingPage /> },
            { path: "/details/:id", element: <AttractionDetailsPage /> },
            { path: "/combo", element: <ComboLandingPage /> },
            { path: "/specialoffer", element: <SpecialOfferLandingPage /> },
            { path: "/visa", element: <VisaLandingPage /> },
            { path: "/blog", element: <BlogLandingPage /> },
            { path: "/blog/details", element: <BlogDetailsPage /> },
            { path: "/search/:slug", element: <SearchingResultPage /> },
            { path: "/payment/:id", element: <PaymentPage /> },
            { path: "/Profile", element: <ProfileMainPage /> },
            { path: "/Profile/settings", element: <ProfileSettingsPage /> },
            { path: "/Profile/password", element: <ProfilePasswordPage /> },
        ]
    },
    {
        path: "/*", element: <PageNotFound />
    }
]

export default ThemeRoutes