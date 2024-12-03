import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { navigations } from "../config";
import Loading from "../pages/loading";

const NotFound = lazy(() => import("../pages/not-found"));
const Home = lazy(() => import("../pages/home"));
const Menu = lazy(() => import("../pages/menu"));
const Locations = lazy(() => import("../pages/locations"));
const Contact = lazy(() => import("../pages/contact"));
const About = lazy(() => import("../pages/about"));

export default function Routers() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path={navigations.home} element={<Home />} />
        <Route path={navigations.menu} element={<Menu />} />
        <Route path={navigations.locations} element={<Locations />} />
        <Route path={navigations.contact} element={<Contact />} />
        <Route path={navigations.about} element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
