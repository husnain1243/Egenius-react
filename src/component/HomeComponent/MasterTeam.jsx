import image1 from "../../asserts/masterteam1.jpeg";
import image2 from "../../asserts/masterteam2.jpeg";
import image3 from "../../asserts/masterteam3.jpeg";
import image4 from "../../asserts/masterteam4.jpeg";

export const MasterTeam = () => {
    return(
        <div className="master-team-section bg-dark py-4 py-lg-5">
            <div className="container">
                <div className="master-team-container">
                    <div className="row">
                        <div class="col-12 col-lg-6">
                            <div class="row">
                                <div class="col-12 col-lg-6 mb-3">
                                    <div class="master-image-container position-relative">
                                        <img src={image1} alt="master team" class="m-auto d-flex img-fluid w-100 h-100"/>
                                        <div class="master-image-data">
                                            <h4 class="text-center text-white">JESSICA ANTONY</h4>
                                            <p className="text-center">Costmetologist</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-lg-6 mb-3">
                                    <div class="master-image-container position-relative">
                                        <img src={image2} alt="master team" class="m-auto d-flex img-fluid w-100 h-100"/>
                                        <div class="master-image-data">
                                            <h4 class="text-center text-white">MADELEINE GOLDEN</h4>
                                            <p className="text-center">Costmetologist</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-lg-6 mb-3">
                                    <div class="master-image-container position-relative">
                                        <img src={image3} alt="master team" class="m-auto d-flex img-fluid w-100 h-100"/>
                                        <div class="master-image-data">
                                            <h4 class="text-center text-white">IRIS ELLIOTT</h4>
                                            <p className="text-center">Costmetologist</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-lg-6 mb-3">
                                    <div class="master-image-container position-relative">
                                        <img src={image4} alt="master team" class="m-auto d-flex img-fluid w-100 h-100"/>
                                        <div class="master-image-data">
                                            <h4 class="text-center text-white">JODY WHITEHEAD</h4>
                                            <p className="text-center">Costmetologist</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-6 text-center d-flex justify-content-center align-items-center">
                            <div className="w-75 m-auto">
                                <h3 className="text-center">MEET OUR MASTERS TEAM</h3>
                                <div class="">
                                    <a href="#" class="btn btn-primary form-button w-100">Learn more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}