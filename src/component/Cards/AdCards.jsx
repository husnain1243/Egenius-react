import {products} from '../Items/BlogItems'
import button_view from '../../asserts/button-view.png'

export const AdCards = () => {
    
    return(
        <div className="Adcard-container row m-auto pt-4 pt-lg-5 d-flex justify-content-center justify-content-lg-start">
            {products.slice(0, 3).map((data, index) => (
                <div className='col-12 col-md-6 col-lg-4 mb-3'>
                <a href={data.link} className='text-decoration-none'>
                    <div key={index} className="card overflow-hidden text-center rounded bg-transparent text-dark border-0">
                        <figure class="snip1529">
                            <div className="image-container">
                            <img src={data.image} alt={data.name + "image"} className="m-auto d-block img-fluid w-100 h-100"/>
                            </div>
                            <div class="date"><span class="day text-dark">{data.price}$</span><span class="month text-dark">Price</span></div>
                            <figcaption>
                                <h3>{data.name}</h3>
                                <p>{data.description}</p>
                            </figcaption>
                            <div class="hover">
                                <img src={button_view} className='w-25'/>
                            </div>
                            <a href={data.link}></a>
                        </figure>
                    </div>
                </a>
                </div>
            ))}
        </div>    
    )
}