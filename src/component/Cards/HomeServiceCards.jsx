import {ServiceData} from '../Items/ServicesItems.jsx'

export const HomeServiceCards = () => {
    return(
        <div className='row m-auto pt-4 pt-lg-5 d-flex justify-content-center justify-content-lg-start'>
            {ServiceData.slice(0, 3).map((data, index) => (
                <div  key={index} className="col-12 col-md-6 col-lg-4 mb-3">
                    <div className="card bg-transparent rounded overflow-hidden">
                        <div className='' style={{height: "300px"}}>
                            <img src={data.image} className="card-img-top w-100 h-100 m-auto d-block img-fluid" alt={data.title + "image"}/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{data.title}</h5>
                            <p className="card-text text-dark">{data.description}</p>
                            <p className='mb-3 text-dark'>{data.tags}</p>
                            <a href={data.buttonLink} class="btn btn-primary bg-transparent text-dark">More Details</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}