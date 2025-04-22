import Banner from "../components/Banner";
import heroImg from '../assets/about.jpg'
import galleryImg1 from '../assets/gallery-1.jpg'
import galleryImg2 from '../assets/gallery-2.jpg'
import galleryImg3 from '../assets/gallery-3.jpg'
import galleryImg4 from '../assets/gallery-4.jpg'
import galleryImg5 from '../assets/gallery-5.jpg'
import galleryImg6 from '../assets/gallery-6.jpg'

const Home = () => {
    return (
        <div className="mt-28">
            {/* banner section start */}
            <section>
                <Banner></Banner>
            </section>
            {/* banner section end */}

            {/* about section start */}
            <section className="max-w-7xl mx-auto space-y-4 mb-20">
                <h2 className="text-center text-2xl md:text-4xl font-medium mt-20">About Us</h2>

                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img
                            src={heroImg}
                            className="rounded-lg"
                        />
                        <div>
                            <h1 className="text-5xl font-bold">Our Mission</h1>
                            <p className="py-6 text-justify">
                                At Winter Clothing Donation, our mission is simple to spread warmth and hope. We believe that no one should have to face the harsh winter without proper clothing. Through community-driven donations, we aim to connect those who have extra winter wear with those who truly need it.
                            </p>


                            <h3 className="text-2xl font-medium mt-10">How You Can Contribute</h3>

                            <ul className="list-disc pl-4 mt-4">
                                <li><strong>Donate   Winter Clothing:</strong> Jackets, coats, scarves, gloves, boots, and more.</li>
                                <li><strong>Start a Clothing Drive:</strong> Organize a drive at your school, workplace, or neighborhood.</li>
                                <li><strong>Volunteer:</strong> Help us collect, sort, and distribute donations.</li>
                                <li><strong>Spread the Word:</strong> Share our mission with your friends and family to increase our reach.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* about section end */}


            {/* how it work section start */}
            <section className="max-w-7xl mx-auto">
                <h2 className="text-center text-2xl md:text-4xl font-medium">How It Works</h2>

                <ol className="list-decimal pl-7 space-y-3">
                    <li className="text-xl font-medium">Donating Winter Clothing</li>
                    <p>It's simple and impactful! Here’s how you can make a difference:</p>
                    <ul className="list-disc pl-5">
                        <li><strong>Step 1:</strong> Gather gently used winter clothing like jackets, coats, scarves, gloves, hats, and boots. Ensure that the items are clean and in good condition.</li>
                        <li><strong>Step 2:</strong> Pack the items securely in a box or bag for easy transport.</li>
                        <li><strong>Step 3:</strong> Head to one of our Collection Points listed below to drop off your donations.</li>
                    </ul>
                    <li className="text-xl font-medium mt-10">Collection Points</li>
                    <p>
                        We have various locations where you can drop off your donations. These locations are spread throughout the community, making it easy to contribute no matter where you are.
                        To find the closest collection point to you, contact us for more details.
                    </p>

                    <ul className="list-disc pl-5">
                        <li>location 1</li>
                        <li>location 2</li>
                        <li>location 3</li>
                    </ul>

                    <li className="text-xl font-medium">Supported Divisions</li>
                    <ul className="list-disc pl-5">
                        <li>division 1</li>
                        <li>division 2</li>
                        <li>division 3</li>
                    </ul>
                </ol>




            </section>
            {/* how it work section end */}


            {/* photo gallery start */}
            <section className="max-w-7xl mx-auto my-20">
                <h2 className="text-2xl font-medium text-center py-5 bg-blue-900 text-white">Photo Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div><img className="size-full object-cover rounded-sm hover:opacity-75" src={galleryImg1} alt="" /></div>
                    <div><img className="size-full object-cover rounded-sm hover:opacity-75" src={galleryImg2} alt="" /></div>
                    <div><img className="size-full object-cover rounded-sm hover:opacity-75" src={galleryImg3} alt="" /></div>
                    <div><img className="size-full object-cover rounded-sm hover:opacity-75" src={galleryImg4} alt="" /></div>
                    <div><img className="size-full object-cover rounded-sm hover:opacity-75" src={galleryImg5} alt="" /></div>
                    <div><img className="size-full object-cover rounded-sm hover:opacity-75" src={galleryImg6} alt="" /></div>
                </div>
            </section>
            {/* photo gallery start */}


            {/* people helped start */}
            <section style={{ backgroundImage: `url(${galleryImg6})` }}
                className='bg-no-repeat bg-cover bg-bottom hidden md:flex max-w-7xl mx-auto rounded'>

                <div className="bg-black/55 py-40 pl-6 rounded">

                    <h2 className="uppercase font-extrabold text-2xl text-gray-100 py-3">take care of homeless <br /> people with your <br /> support</h2>

                    <div className="bg-gray-600 flex items-center md:w-4/5 lg:w-3/5 text-white rounded">
                        <div className="lg:flex-3/5 p-10">
                            <h3 className="text-xl font-semibold text-green-600 uppercase">Innovative Care</h3>
                            <p className="text-justify">Help to create a better future for the children who are deprived from the facility of a basic lifestyle. Join the Winter Clothing Donation donation program.</p>
                        </div>
                        <div className="divider divider-horizontal divider-start"></div>
                        <div className="flex flex-col justify-center items-center p-10">
                            <h3 className="font-medium text-lg uppercase">people helped</h3>
                            <p className="text-green-600 font-bold text-2xl"><span>5000+</span></p>
                        </div>
                    </div>

                </div>

            </section>
            {/* people helped end */}




        </div>
    );
};

export default Home;