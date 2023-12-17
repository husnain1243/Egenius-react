import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Services } from "../pages/Services"
import { Projects } from "../pages/Projects"
import { ContactUs } from "../pages/ContactUs"
import { Portfolio} from "../pages/Portfolio"

export const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}>
          Home
        </Route>
        <Route path="/potfolio" element={<Portfolio/>}>
          Potfolio
        </Route>
        <Route path="/services" element={<Services/>}>
          Services
        </Route>
        <Route path="/projects" element={<Projects/>}>
          Projects
        </Route>
        <Route path="/contactus" element={<ContactUs/>}>
          Contact Us
        </Route>
      </Routes>
    </div>
  );
};
