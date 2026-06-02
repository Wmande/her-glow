import { Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";

import Home from "./pages/home";
import Hair from "./pages/hair-section";
import Nails from "./pages/nails-section";
import Spa from "./pages/spa-section";
import {
  HairBookSession,
  HairProducts,
  NailsBookSession,
  NailsPolishShop,
  SpaBookRitual,
  SpaPackages,
} from "./pages/action-page";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/hair" element={<Hair />} />
        <Route path="/hair/book-session" element={<HairBookSession />} />
        <Route path="/hair/products" element={<HairProducts />} />
        <Route path="/nails" element={<Nails />} />
        <Route path="/nails/book-nails" element={<NailsBookSession />} />
        <Route path="/nails/polish-shop" element={<NailsPolishShop />} />
        <Route path="/spa" element={<Spa />} />
        <Route path="/spa/book-ritual" element={<SpaBookRitual />} />
        <Route path="/spa/packages" element={<SpaPackages />} />
      </Route>
    </Routes>
  );
}
