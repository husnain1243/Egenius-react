import { QuoteForm } from "../Forms/QuoteForm"
import quoteimg from "../../asserts/quote1.jpeg"

export const ServiceQuote = () => {
    return(
        <div class="free-quote-section">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 col-md-6 px-0">
                        <div class="img-container w-100">
                            <img src={quoteimg} alt="image" height="100%" width="100%" class="img-fluid m-auto d-block"/>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 d-flex align-items-center">
                        <div class="quote-container p-4 p-lg-5">
                            <h2 class="mb-3 text-dark"><b>Free Quote</b></h2>
                            <p class="mb-4 text-dark">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                            <QuoteForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    )
}