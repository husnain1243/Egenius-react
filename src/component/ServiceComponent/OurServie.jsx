import { ServiceCards } from "../../component/Cards/ServiceCards.jsx"

export const OurService = () => {
    return(
        <div className="services-section py-4 py-lg-5 bg-light">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center text-dark">
                    <h2 className='text-dark'>__ Our Services __</h2>
                </div>
            </div>
            <ServiceCards/>
        </div>
    </div>
    )
}