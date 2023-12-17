import {products} from '../Items/BlogItems'

export const AdCards = () => {
    
    return(
        <div className="Adcard-container row m-auto pt-4 pt-lg-5 d-flex justify-content-center justify-content-lg-start">
            {products.slice(0, 4).map((data, index) => (
                <div className='col-12 col-md-6 col-lg-4 mb-3'>
                    <a href={data.link} className='text-decoration-none'>
                        <div key={index} className="card overflow-hidden text-center rounded bg-transparent text-dark">
                            <div style={{ height: "250px"}}>
                                <img src={data.image} alt={data.name + "image"} className="m-auto d-block img-fluid w-100 h-100"/>
                            </div>  
                            <div>
                                <h3 className='text-dark text-start p-3 pb-0 mb-0'>{data.name}</h3>
                                <p className='text-dark text-start p-3 pb-0 mb-0'>{data.description}</p>
                                <div className='d-flex justify-content-between p-3 pb-0'>
                                    <p className='text-dark m-0 d-flex justify-content-center align-items-center gap-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                                        </svg>
                                        <p className='text-dark mb-0'>{data.author}</p>
                                    </p>
                                    <p className='text-dark m-0'>Price: ${data.price}</p>
                                </div>
                                <div className=''>
                                    <a className='w-100 p-3 d-block text-start text-dark' >Learn More</a>
                                </div>
                            </div>  
                        </div>
                    </a>
                </div>
            ))}
        </div>    
    )
}