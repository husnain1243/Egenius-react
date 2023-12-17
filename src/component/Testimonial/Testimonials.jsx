import Carousel1 from "../../asserts/carousel1.webp"

export const Testimonials = () => {
    return(
        <div id="Testimonials" class="text-center py-4 py-lg-4">
            <div class="">
                <div class="">
                    <img src={Carousel1} class="rounded-circle mb-4"/>
                    <div class="row d-flex justify-content-center">
                        <div class="col-lg-8">
                            <h5 class="mb-3">Maria Kate</h5>
                            <p className="text-muted">Photographer</p>
                            <p class="text-muted">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
                                nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia
                                fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit
                                doloremque.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}