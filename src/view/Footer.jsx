import { FooterSocials } from '../component/Footer/FooterSocial';
import { FooterWidget1 } from "../component/Footer/FooterWidget1";
import { FooterWidget2 } from "../component/Footer/FooterWidget2";
import "../Style/Footer.css"

export const Footer = () => {

    return(
        
        <footer className="footer py-4 py-lg-5 bg-dark text-white">
            <div className="container">
                <div className="footer-container">
                    <div className="row">
                        <FooterWidget2/>
                        <FooterWidget1/>
                        <FooterSocials/>
                    </div>
                </div>
            </div>
        </footer>


    )
}

                        
                        
