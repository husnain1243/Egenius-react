import {products} from '../Items/Items'

export const AdCards = () => {
    
    return(
        <div className="Adcard-container row m-auto pt-4 pt-lg-5 d-flex justify-content-center justify-content-lg-start">
            {products.slice(0, 3).map((data, index) => (
                <div  key={index} className="col-12 col-md-5 col-lg-4 mb-4">
                    <div key={index} className="card text-center bg-transparent overflow-hidden rounded">
                        <div className='' style={{height:"250px"}}>
                            <img src={data.image} alt={data.name + "image"} className="m-auto d-block img-fluid w-100 h-100"/>
                        </div>  
                        <div>
                            <span className="text-dark">{data.name}</span>
                            <p className="text-dark">Price: ${data.price}</p>
                        </div>  
                    </div>
                </div>
            ))}
        </div>    
    )
}