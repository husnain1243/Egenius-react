import { useState } from "react";
import axios from "axios"

export const ContactUsForm = () => {

    const initialUser = {
        FirstName: 'John',
        LastName: 'doe',
        Phone: '033323423232',
        Email: 'test@gmail.com',
        Message:"Related Message"
    };
    const [formdata, setFormData] = useState(initialUser);
    const [Fname, setFName] = useState(formdata.FirstName);
    const [Lname, setLName] = useState(formdata.LastName);
    const [Phone, setPhoneNumber] = useState(formdata.Phone);
    const [Email, setEmail] = useState(formdata.Email);
    const [Message, setMessage] = useState(formdata.Message);

    const handleSaveClick = async (event) => {
        event.preventDefault();
        setFormData({ DFName: Fname, DLName: Lname , DPhone: Phone , DEmail: Email , DMessage: Message});
        let FormData = {
            Fname,Lname,Phone,Email,Message
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
        <div className="contact-wrap w-100 p-md-5 p-4 rounded login-box">
            <form  id="contactForm" onSubmit={handleSaveClick} >
                <div className="row">

                    <div className="col-md-6">
                        <div className="form-group ">
                            <label className="text-white">First NAME</label>
                            <input
                                type="text"
                                placeholder="First Name" 
                                className="form-control mb-2" id="FName"
                                value={Fname}
                                onChange={(e) => setFName(e.target.value)}
                            />
                        </div>
                    </div>
                    
                    <div className="col-md-6 mb-3">
                        <div className="form-group">
                            <label className="text-white">Last Name</label>
                            <input
                                type="text"
                                placeholder="Last Name" 
                                className="form-control mb-2" id="LName"
                                value={Lname}
                                onChange={(e) => setLName(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="col-md-12 mb-3">
                        <div className="form-group">
                            <label className="text-white">Phone Number</label>
                                <input
                                type="phone"
                                placeholder="***********" 
                                className="form-control mb-2" id="Email"
                                value={Phone}
                                autoComplete="123456789"
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="col-md-12 mb-3">
                        <div className="form-group">
                            <label className="text-white">Email</label>
                                <input
                                type="email"
                                placeholder="test@gmail.com" 
                                className="form-control mb-2" id="Address"
                                value={Email}
                                autoComplete="@gmail.com"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="col-md-12 mb-5">
                        <div className="form-group">
                            <label className="text-white">MESSAGE</label>
                            <textarea
                                type="text"
                                placeholder="Enter Message" 
                                value={Message}
                                className="form-control mb-2" id="message" cols="30" rows="6"
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="form-group">
                            <a type="submit" className="d-block py-3 text-center w-75 m-auto">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Submit
                            </a>
                            <div className="submitting sf-hidden"></div>
                        </div>
                    </div>

                </div>
               
            </form>
        </div>
    )
}