import { Advisory } from "../component/Advisory/Advisory";
import { HomeAccordian } from "../component/HomeComponent/HomeAccordian";
import { HomeService } from "../component/HomeComponent/HomeService";
import { HomeSlider } from "../component/HomeComponent/HomeSlider";
import { MasterTeam } from "../component/HomeComponent/MasterTeam";
import { Testimonials } from "../component/Testimonial/Testimonials";

export const Home = () => {
  return (

    <div id="home-page" className="Home-wrapper">
      <HomeSlider/>
      <Advisory/>
      <MasterTeam/>
      <HomeService/>
      <HomeAccordian/>
      <Testimonials/>
    </div>

  );
};
