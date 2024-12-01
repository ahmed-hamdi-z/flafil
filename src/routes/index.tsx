import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { navigations } from "../config";
import Loading from "../pages/loading";

const NotFound = lazy(() => import("../pages/not-found"));
const Home = lazy(() => import("../pages/home"));
const Menu = lazy(() => import("../pages/menu"));
// const Products = lazy(() => import("../pages/Products"));
// const Blogs = lazy(() => import("../pages/Blogs"));
// const Treatments = lazy(() => import("../pages/Treatments"));

export default function Routers() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path={navigations.home} element={<Home />} />
       <Route path={navigations.menu} element={<Menu />} />
       {/*   <Route path={navigations.products} element={<Products />} />
        <Route path={navigations.blogs} element={<Blogs />} />
        <Route path={navigations.treatments} element={<Treatments />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
