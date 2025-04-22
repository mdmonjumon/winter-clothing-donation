import React from 'react';
import { Link } from 'react-router-dom';

const CampaignCard = ({ campaign }) => {
    const { title, description, image, division } = campaign;
    return (
        <div className="card shadow-sm">
            <figure className='h-72'>
                <img
                    className='size-full object-cover hover:opacity-75'
                    src={image}
                    alt={title} />
            </figure>
            <div className="card-body pl-2">
                <h2 className="card-title">{title}</h2>
                <p className='text-lg text-justify'>{description}</p>
                <p><span className='text-lg font-semibold'>Division: </span> <span className='text-lg'>{division}</span></p>
                <div className="card-actions justify-start">
                    <Link to='/login' className="btn btn-primary">Donate Now</Link>
                </div>
            </div>
        </div>
    );
};

export default CampaignCard;