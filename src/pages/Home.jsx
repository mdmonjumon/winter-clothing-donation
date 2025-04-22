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
        <div className="max-w-7xl mx-auto mt-28">
            {/* banner section start */}
            <section>
                <Banner></Banner>
            </section>
            {/* banner section end */}

            {/* about section start */}
            <section className="space-y-4 mb-20">
                <h2 className="text-center text-2xl font-medium mt-10">About Us</h2>

                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img
                            src={heroImg}
                            className="max-w-md rounded-lg shadow-2xl"
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
            <section>
                <h2 className="text-center text-2xl font-medium">How It Works</h2>

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
            <section className="my-20">
                <h2 className="text-2xl font-medium text-center py-5 bg-blue-900 text-white">Photo Gallery</h2>
                <div className="grid grid-cols-3 gap-5">
                    <div><img className="size-full object-cover rounded-sm" src={galleryImg1} alt="" /></div>
                    <div><img className="size-full object-cover rounded-sm" src={galleryImg2} alt="" /></div>
                    <div><img className="size-full object-cover rounded-sm" src={galleryImg3} alt="" /></div>
                    <div><img className="size-full object-cover rounded-sm" src={galleryImg4} alt="" /></div>
                    <div><img className="size-full object-cover rounded-sm" src={galleryImg5} alt="" /></div>
                    <div><img className="size-full object-cover rounded-sm" src={galleryImg6} alt="" /></div>
                </div>
            </section>

            {/* photo gallery start */}




        </div>
    );
};

export default Home;