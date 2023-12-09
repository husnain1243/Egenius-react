import { HomeServiceCards } from "../Cards/HomeServiceCards"

export const HomeService = () => {
    return(
        <div className="Service-Home-Section py-4 py-lg-5">
            <div className="container">
                <div className="Service-Home-Container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="text-center text-dark">Related Services</h2>
                        </div>
                    </div>
                    <HomeServiceCards/>
                </div>
            </div>
        </div>
    )
}