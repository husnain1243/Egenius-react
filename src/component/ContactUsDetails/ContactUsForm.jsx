import { useState } from "react";
import axios from "axios"

export const ContactUsForm = () => {

    const initialUser = {
        FirstName: 'John',
        LastName: 'doe',
        Phone: '033323423232',
        Email: 'test@gmail.com',
        Message:"antyhtin"
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
        <div class="contact-wrap w-100 p-md-5 p-4 rounded">
            <form  id="contactForm" onSubmit={handleSaveClick} >
                <div className="row">

                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="text-white">First NAME</label>
                            <input
                                type="text"
                                placeholder="First Name" 
                                class="form-control mb-2" id="FName"
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
                                class="form-control mb-2" id="LName"
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
                                class="form-control mb-2" id="Email"
                                value={Phone}
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
                                class="form-control mb-2" id="Address"
                                value={Email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="col-md-12 mb-3">
                        <div className="form-group">
                            <label className="text-white">MESSAGE</label>
                            <input
                                type="text"
                                placeholder="Enter Message" 
                                value={Message}
                                class="form-control mb-2" id="message" cols="30" rows="5"
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="form-group">
                            <input type="submit" value="SUBMIT" class="btn btn-primary form-button w-100"/>
                            <div className="submitting sf-hidden"></div>
                        </div>
                    </div>

                </div>
            </form>
        </div>
    )
}