import { Advisory } from "../component/Advisory/Advisory";
import { HomeService } from "../component/HomeComponent/HomeService";

import "../Style/Home.css"

export const Home = () => {
  return (

    <div className="Home-wrapper">

      <div className="home-banner d-flex flex-column justify-content-center bg-dark text-center" style={{height:"400px"}}>
          <div className="container">
              <div className="banner-container">
                  <h1>Home</h1>
              </div>
          </div>
      </div>

      <Advisory/>
      <HomeService/>
    </div>

  );
};
