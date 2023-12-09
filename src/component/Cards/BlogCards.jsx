import {products} from '../Items/Items'

export const BlogCards = () => {
    
    return(
        <div className="blog-card-container d-flex flex-wrap justify-content-center flex-row gap-3">
            {products.slice(0, 20).map((data, index) => (
                <div key={index} className="card overflow-hidden text-center rounded bg-transparent text-dark" style={{width: "23%"}}>
                    <div style={{ height: "250px"}}>
                        <img src={data.image} alt={data.name + "image"} className="m-auto d-block img-fluid w-100 h-100"/>
                    </div>  
                    <div>
                        <span className='text-dark'>{data.name}</span>
                        <p className='text-dark'>Price: ${data.price}</p>
                    </div>  
                </div>
            ))}
        </div>    
    )
}