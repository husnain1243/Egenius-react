import { AdCards } from "../Cards/AdCards"
import { Link } from "react-router-dom";

export const Advisory = () => {
    return(
        <div className="Advisory-section py-4 py-lg-5">
            <div className="container">
                <div className="mb-5 text-center">
                    <h2 className="text-dark">Advisory & Consulting Services</h2>
                    <p className="text-dark">Phasellus scelerisque sed leo quis gravida. Fusce lobortis libero ut arcu blandit pharetra.</p>
                </div>
                <AdCards/>
                <li className="text-center text-decoration-none w-25 border m-auto mt-4 py-2">
                  <Link to="/blog" className="link text-decoration-none text-dark">View More</Link>
                </li>
            </div>
        </div>
    )
}