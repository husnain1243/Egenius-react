import {products} from '../Items/BlogItems'
import button_view from '../../asserts/button-view.png'

export const BlogCards = () => {
    
    return(
        <div className="">
            <div className='row py-4 py-lg-5'>
                <h2 className='text-dark text-center mb-5'>Recent Project</h2>
                {products.slice(0, 1).map((data, index) => (
                    <div className='col-12 mb-5'>
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
            <div className='row'>
                <h2 className='text-dark text-center mb-5'>Our Project</h2>
                {products.slice(0, 20).map((data, index) => (
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
        </div>    
    )
}