import portfolio1 from "../asserts/portfolio-2-image1.jpeg"
import portfolio2 from "../asserts/portfolio-2-image2.png"
import portfolio3 from "../asserts/portfolio3-image.jpeg"

export const Portfolio = () => 
{
    return(

        <div id="portfolio" className="wrapper">

            <div className="main-section-potfolio py-4 py-lg-5">
                <div className="container py-lg-5">
                    <div className="row py-lg-5 position-relative section-portfolio-row">
                        <div className="col-12 col-lg-7">
                            <div className="image-container">
                                <img src={portfolio3} alt="image" width="100%" height="100%" className="d-block" />
                            </div>
                        </div>
                        <div className="col-12 col-lg-5 py-4">
                            <div className="card-portfolio-aboout">
                                <h2 className="mb-4 text-dark"><b>WebSite Development</b></h2>
                                <p className="text-dark">Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. Lobortis elementum nibh tellus molestie nunc non. Aliquet bibendum</p>
                                <a className="button-portfolio">LEARN MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card-section-portfolio py-4 py-lg-5 mt-5">
                <div className="container">
                    <div className="row m-auto">
                        <div className="col-12 col-md-5 col-lg-4 gap-2 mb-4">
                            <div className="card-portfolio card-portfolio1 shadow p-4">
                                <h2>01</h2>
                                <h3>Front-End Developer</h3>
                                <p className="mb-5">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <a className="button-portfolio mb-5">LEARN MORE</a>
                            </div>
                        </div>
                        <div className="col-12 col-md-5 col-lg-4 gap-2 mb-4">
                            <div className="card-portfolio card-portfolio2 shadow p-4">
                                <h2 className="text-dark">02</h2>
                                <h3 className="text-dark">WordPress Developer</h3>
                                <p className="text-dark mb-5">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <a class="button-portfolio mb-5">LEARN MORE</a>
                            </div>
                        </div>
                        <div className="col-12 col-md-5 col-lg-4 gap-2 mb-4">
                            <div className="card-portfolio card-portfolio1 shadow p-4">
                                <h2>03</h2>
                                <h3>React.js Developer</h3>
                                <p className="mb-5">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <a className="button-portfolio mb-5">LEARN MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-container-contact w-100 d-none d-lg-block pt-4 pt-lg-5 ">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-none d-lg-block col-lg-4"></div>
                        <div className="col-12 col-lg-8">
                            <div className="image-container overflow-hidden">
                                <img src={portfolio1} width="100%" height="100%" alt="container-image" className="img-fluid d-block m-auto"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="portfolio-section bg-dark py-4 py-lg-5">
                <div className="container">
                    <div className="row py-4 py-lg-5">
                        <div className="col-12 col-lg-6">
                            <div className="image-container2- overflow-hidden">
                                <img src={portfolio2} width="100%" height="100%" alt="container-image" className="img-fluid d-block m-auto"/>
                            </div>
                        </div>
                        <div class="col-12 col-lg-4 m-auto">
                            <div class="card-container">
                                <h2 className="mb-4">About Studio</h2>
                                <p className="mb-4">Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. </p>
                                <a href="">READ MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>   

    )
}