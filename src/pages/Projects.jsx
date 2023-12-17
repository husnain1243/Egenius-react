import { BlogCards } from "../component/Cards/BlogCards"

export const Projects = () => {
    return(
        <div className="blog-wrapper">

            <div className="blog-banner d-flex flex-column justify-content-center bg-dark text-center" style={{height:"300px"}}>
                <div className="container">
                    <div className="banner-container">
                        <h1 className="text-start">Our Projects</h1>
                    </div>
                </div>
            </div>

            <div className="Blog-container py-4 py-lg-5">
                <div className="container">
                    <BlogCards/>
                </div>
            </div>

        </div>
    )
}