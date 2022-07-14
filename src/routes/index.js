// Layouts
import { HeaderOnly } from "../components/Layout";

// Pages
import Home from "../pages/Home";
import Following from "../pages/Following";
import Profile from "../pages/Profile";
import Upload from "../pages/Upload";
import Search from "../pages/Search";

// Public Routes
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/Following", component: Following },
  { path: "/Profile", component: Profile },
  { path: "/Upload", component: Upload, layout: HeaderOnly },
  { path: "/Search", component: Search, layout: null },
];
const privateRputes = [];

export { publicRoutes, privateRputes };
