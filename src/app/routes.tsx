import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { BrowseListingsPage } from "./pages/BrowseListingsPage";
import { ListingDetailPage } from "./pages/ListingDetailPage";
import { PostAdPage } from "./pages/PostAdPage";
import { UserDashboardPage } from "./pages/UserDashboardPage";
import { RootLayout } from "./layouts/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "browse", Component: BrowseListingsPage },
      { path: "listing/:id", Component: ListingDetailPage },
      { path: "post-ad", Component: PostAdPage },
      { path: "dashboard", Component: UserDashboardPage },
    ],
  },
]);
