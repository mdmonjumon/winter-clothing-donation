import { Link, useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";


const DonateDetails = () => {
    const { id } = useParams();
    const allCampaigns = useLoaderData();
    const campaign = allCampaigns.find(data => data.id === parseInt(id));
    const { image, title, status, division, description, contactInfo: { email, name, phone } } = campaign;



    const handleDonate =(e)=>{
        e.preventDefault();
        toast('Thank you! We will reach your destination soon')
        e.target.reset();
    }
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
                <div className="card bg-base-100 w-full max-w-xl mx-auto shrink-0 shadow-xl mb-10">
                    <h3 className="font-semibold text-2xl text-center my-5">Donation Form</h3>
                    <div className="card-body">
                        <form onSubmit={handleDonate} action="">
                            <fieldset className="fieldset space-y-4">
                                <legend className="fieldset-legend text-lg">Select Items and Quantity</legend>
                                {/* Jackets */}
                                <div className="grid grid-cols-6 gap-2 items-center">
                                    <input type="checkbox" className="checkbox col-span-1" />
                                    <label className="text-xl col-span-2">Jackets</label>
                                    <input type="text" className="input focus:outline-offset-0 col-span-3" placeholder="Quantity" />
                                </div>

                                {/* Blankets */}
                                <div className="grid grid-cols-6 gap-2 items-center">
                                    <input type="checkbox" className="checkbox col-span-1" />
                                    <label className="text-xl col-span-2">Blankets</label>
                                    <input type="text" className="input focus:outline-offset-0 col-span-3" placeholder="Quantity" />
                                </div>

                                {/* Hats */}
                                <div className="grid grid-cols-6 gap-2 items-center">
                                    <input type="checkbox" className="checkbox col-span-1" />
                                    <label className="text-xl col-span-2">Hats</label>
                                    <input type="text" className="input focus:outline-offset-0 col-span-3" placeholder="Quantity" />
                                </div>

                                {/* Gloves */}
                                <div className="grid grid-cols-6 gap-2 items-center">
                                    <input type="checkbox" className="checkbox col-span-1" />
                                    <label className="text-xl col-span-2">Gloves</label>
                                    <input type="text" className="input focus:outline-offset-0 col-span-3" placeholder="Quantity" />
                                </div>

                                {/* Snow Boots */}
                                <div className="grid grid-cols-6 gap-2 items-center">
                                    <input type="checkbox" className="checkbox col-span-1" />
                                    <label className="text-xl col-span-2">Snow Boots</label>
                                    <input type="text" className="input focus:outline-offset-0 col-span-3" placeholder="Quantity" />
                                </div>

                                {/* Pickup location */}
                                <div>
                                    
                                    <label className="text-xl">Pickup Location</label>
                                    <input type="text" className="input focus:outline-offset-0 w-full" placeholder="Pickup Location" required />
                                </div>
 

                                <div>
                                    <label className="text-xl ">Additional Notes</label>
                                    <div>
                                    <textarea className="textarea focus:outline-offset-0 w-full" placeholder="Optional"></textarea>
                                    </div>
                                </div>

                                <button className="btn btn-neutral w-full mt-4">Submit</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonateDetails;


{/* 

<option>Blankets</option>
<option></option>
<option></option>
<option></option> */}