import { useState } from "react";
import axios from "axios"

export const QuoteForm = () => {

    const initialUser = {
        FirstName: 'John',
        Phone: '033323423232',
        Email: 'test@gmail.com',
        Message:"Write Something About You!"
    };
    const [formdata, setFormData] = useState(initialUser);
    const [Fname, setFName] = useState(formdata.FirstName);
    const [Phone, setPhoneNumber] = useState(formdata.Phone);
    const [Email, setEmail] = useState(formdata.Email);
    const [Message, setMessage] = useState(formdata.Message);

    const handleSaveClick = async (event) => {
        event.preventDefault();
        setFormData({ DFName: Fname, DPhone: Phone , DEmail: Email , DMessage: Message});
        let FormData = {
            Fname,Phone,Email,Message
        }
        console.log(FormData)   
        // try {
        //     const response = await axios.post('http://localhost:8888/formData', FormData);
        //     console.log(response.FormData);
        //  } catch (error) {
        //     console.error('Error sending data:', error);
        //  }
    };

    return(
        <div class="contact-wrap w-100 login-box py-4 py-lg-5">
            <form  id="contactForm" onSubmit={handleSaveClick} >
                <div className="row">

                    <div className="col-12 col-md-7 mb-4">
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="First Name" 
                                class="form-control mb-2" id="FName"
                                value={Fname}
                                onChange={(e) => setFName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div class="col-12 col-md-7 mb-4">
                        <div className="form-group">
                            <input
                                type="email"
                                placeholder="test@gmail.com" 
                                class="form-control mb-2" id="Address"
                                value={Email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div class="col-12 mb-5">
                        <div className="form-group">
                            <textarea
                                type="text"
                                placeholder="Enter Message" 
                                value={Message}
                                class="form-control mb-2" id="message" cols="30" rows="6"
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                        </div>
                    </div>

                    <div class="col-md-12 text-center mt-4">
                        <div className="form-group">
                            <a type="submit" className="d-block py-3 text-white text-center w-75 m-auto">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Submit
                            </a>
                            <div class="submitting sf-hidden"></div>
                        </div>
                    </div>

                </div>
            </form>
        </div>
    )
}