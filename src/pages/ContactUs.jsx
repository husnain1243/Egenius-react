import { ContactUsDetails } from "../component/ContactUsDetails/ContactUsDetails";
import '../Style/ContactUs.css'
import { ContactUsForm } from "../component/ContactUsDetails/ContactUsForm";

export const ContactUs = () => {

    return(
        <div className="contact-wrapper">
            
            <div className="contactform-section py-4 py-lg-5">
                <div className="container">
                    <div className="contactform-container d-flex justify-content-center">
                        <div className="row">
                            <div class="col-12 col-lg-6">
                                <ContactUsDetails/>
                            </div>

                            <div className="col-12 col-lg-6">
                                <ContactUsForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}