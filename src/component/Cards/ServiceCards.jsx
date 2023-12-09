import {ServiceData} from '../Items/ServicesItems.jsx'

export const ServiceCards = () => {
    return(
        <div className='row m-auto pt-4 pt-lg-5 d-flex justify-content-center justify-content-lg-start'>
            {ServiceData.slice(0, 20).map((data, index) => (
                <div  key={index} className="col-12 col-md-5 col-lg-4 mb-4">
                    <div className="card bg-transparent rounded overflow-hidden">
                        <img src={data.image} className="card-img-top" alt={data.title + "image"}/>
                        <div className="card-body">
                            <h5 className="card-title">{data.title}</h5>
                            <p className="card-text text-dark">{data.description}</p>
                            <a href="#" class="btn btn-primary">{data.button}</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}