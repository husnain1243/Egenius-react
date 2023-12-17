import image1 from "../../asserts/homeaacordian.jpeg";

export const HomeAccordian = () => {
    return(
        <div class="homeaccordian bg-dark py-4 py-lg-5">
            <div class="container">
                <div class="homeaccordian-container py-4 py-lg-5">
                    <div class="row">
                        <div class="col-12 col-lg-6">
                            <h3 className="mb-5">RELATED QUESTIONS</h3>
                            <div class="accordion text-white" id="accordionExample">
                                <div class="accordion-item bg-transparent mb-4">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button bg-transparent text-white border" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            HOW CAN I SIGN UP FOR PROCEDURES?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item bg-transparent mb-4">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed bg-transparent text-white border" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            IS IT POSSIBLE TO YOU WITH COSMETICS?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item bg-transparent mb-4">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed bg-transparent text-white border" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            IS IT POSSIBLE TO YOU WITH CHILDREN?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item  bg-transparent mb-4">
                                    <h2 class="accordion-header bg-transparent" id="headingFour">
                                        <button class="accordion-button collapsed  bg-transparent text-white border" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            WHAT CANNOT BE PREGNANT?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" class="accordion-collapse collapse bg-transparent" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-6">
                            <img src={image1} alt="footer" class="img-fluid d-block m-auto w-100 h-100"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}