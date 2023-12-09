import "../Style/Services.css"
import { ServiceBanner } from "../component/ServiceComponent/ServiceBanner"
import { ServiceQuote } from "../component/ServiceComponent/ServiceQuote"
import { OurService } from "../component/ServiceComponent/OurServie"
import { ServiceTesti } from "../component/ServiceComponent/ServiceTesti"

export const Services = () => {
    return(
        <div className="wrapper our-service">
        
            <ServiceBanner/>
            <OurService/>
            <ServiceQuote/>
            <ServiceTesti/>
        
        </div>
    )
}