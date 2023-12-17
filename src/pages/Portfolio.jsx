import portfolio1 from "../asserts/portfolio-2-image1.jpeg"
import portfolio2 from "../asserts/portfolio-2-image2.png"
import portfolio3 from "../asserts/portfolio3-image.jpeg"

export const Portfolio = () => 
{
    return(

        <div id="portfolio" class="wrapper">

            {/* <div class="main-section-potfolio py-4 py-lg-5">
                <div class="container py-lg-5">
                    <div class="row py-lg-5 position-relative section-portfolio-row">
                        <div class="col-12 col-lg-7">
                            <div class="image-container">
                                <img src={portfolio3} alt="image" width="100%" height="100%" class="d-block" />
                            </div>
                        </div>
                        <div class="col-12 col-lg-5 py-4">
                            <div class="card-portfolio-aboout">
                                <h2 class="mb-4 text-dark"><b>WebSite Development</b></h2>
                                <p class="text-dark">Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. Lobortis elementum nibh tellus molestie nunc non. Aliquet bibendum</p>
                                <a class="button-portfolio">LEARN MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card-section-portfolio py-4 py-lg-5 mt-5">
                <div class="container">
                    <div class="row m-auto">
                        <div class="col-12 col-md-5 col-lg-4 gap-2 mb-4">
                            <div class="card-portfolio card-portfolio1 shadow p-4">
                                <h2>01</h2>
                                <h3>Front-End Developer</h3>
                                <p className="mb-5">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <a class="button-portfolio mb-5">LEARN MORE</a>
                            </div>
                        </div>
                        <div class="col-12 col-md-5 col-lg-4 gap-2 mb-4">
                            <div class="card-portfolio card-portfolio2 shadow p-4">
                                <h2 className="text-dark">02</h2>
                                <h3 className="text-dark">WordPress Developer</h3>
                                <p className="text-dark mb-5">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <a class="button-portfolio mb-5">LEARN MORE</a>
                            </div>
                        </div>
                        <div class="col-12 col-md-5 col-lg-4 gap-2 mb-4">
                            <div class="card-portfolio card-portfolio1 shadow p-4">
                                <h2>03</h2>
                                <h3>React.js Developer</h3>
                                <p className="mb-5">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <a class="button-portfolio mb-5">LEARN MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="main-container-contact w-100 d-none d-lg-block pt-4 pt-lg-5 ">
                <div class="container">
                    <div class="row">
                        <div class="col-12 d-none d-lg-block col-lg-4"></div>
                        <div class="col-12 col-lg-8">
                            <div class="image-container overflow-hidden">
                                <img src={portfolio1} width="100%" height="100%" alt="container-image" class="img-fluid d-block m-auto"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div class="portfolio-section bg-dark py-4 py-lg-5">
                <div class="container">
                    <div class="row py-4 py-lg-5">
                        <div class="col-12 col-lg-6">
                            <div class="image-container2- overflow-hidden">
                                <img src={portfolio2} width="100%" height="100%" alt="container-image" class="img-fluid d-block m-auto"/>
                            </div>
                        </div>
                        <div class="col-12 col-lg-4 m-auto">
                            <div class="card-container">
                                <h2 class="mb-4">About Studio</h2>
                                <p class="mb-4">Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. </p>
                                <a href="">READ MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>   

    )
}