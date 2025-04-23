import { Link, useLoaderData, useParams } from "react-router-dom";


const DonateDetails = () => {
    const { id } = useParams();

    const allCampaigns = useLoaderData();
    const campaign = allCampaigns.find(data => data.id === parseInt(id));
    const { image, title, status, division, description, contactInfo: { email, name, phone } } = campaign;
    return (
        <div>
            <div className="max-w-7xl card shadow-sm my-32 mx-auto">
                <figure className=''>
                    <img
                        className='size-full object-cover'
                        src={image}
                        alt={title} />
                </figure>
                <div className="card-body pl-2">
                    <h2 className="card-title text-2xl">{title}</h2>
                    <p className='text-lg text-justify'>{description}</p>
                </div>

                <div className="card-body flex-row justify-between pl-2">
                    <div>
                        <p><span className='text-lg font-semibold'>Division: </span> <span className='text-lg'>{division}</span></p>
                        <p><span className='text-lg font-semibold'>Status: </span> <span className='text-lg font-semibold text-green-600'>{status}</span></p>
                    </div>

                    <div className="p-4 bg-[#4A5565] shadow-2xl rounded">
                        <h3 className="font-semibold text-xl uppercase text-[#B3F600]">Volunteer</h3>
                        <p className="text-white/55"><span className='text-lg font-semibold'>Name: </span> <span className='text-lg hover:text-green-600 cursor-pointer'>{name}</span></p>
                        <p className="text-white/55"><span className='text-lg font-semibold'>Phone: </span> <span className='text-lg hover:text-green-600 cursor-pointer'>{phone}</span></p>
                        <p className="text-white/55"><span className='text-lg font-semibold'>Email: </span> <span className='text-lg hover:text-green-600 cursor-pointer'>{email}</span></p>


                    </div>
                </div>
            </div>


            {/* Donation form */}
            <div>
                <div className="card bg-base-100 w-full max-w-md mx-auto shrink-0 shadow-xl">
                    <h3 className="font-semibold text-2xl">Donation Form</h3>
                    <div className="card-body">
                        <form action="">
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend"></legend>
                                <select defaultValue="Pick a browser" className="select select-xl">
                                    <option disabled={true}>Pick a browser</option>
                                    <option>Chrome</option>
                                    <option>FireFox</option>
                                    <option>Safari</option>
                                </select>
                                <span className="label">Optional</span>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonateDetails;