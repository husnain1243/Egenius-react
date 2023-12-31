import { HomeServiceCards } from "../Cards/HomeServiceCards"
import { Link } from "react-router-dom";

export const HomeService = () => {
    return(
        <div className="Service-Home-Section py-4 py-lg-5">
            <div className="container">
                <div className="Service-Home-Container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="text-center text-dark">Related Services</h2>
                        </div>
                    </div>
                    <HomeServiceCards/>
                </div>
            </div>
            <li className="text-center text-decoration-none w-25 m-auto mt-4 py-2">
                  <Link to="/services" className="link btn btn-primary form-button w-100">View More</Link>
            </li>
        </div>
    )
}