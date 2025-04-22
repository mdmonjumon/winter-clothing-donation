import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6';
import logoImg from '../assets/logo.png'
import { MdCall } from 'react-icons/md';
import { IoMdHome, IoMdMail } from 'react-icons/io';

const Footer = () => {
    return (
        <div className='bg-[#E9EFEA] py-10 md:py-32 px-3'>

            <div className="flex flex-col md:flex-row items-center md:justify-between gap-10 max-w-7xl mx-auto mb-20">



                <div className='flex flex-col items-center gap-2'>
                    <img className='w-32' src={logoImg} alt="" />
                    <h2 className='font-semibold text-xl'>Winter Clothing Donation</h2>
                </div>




                <div className='space-y-3'>

                    <div className='flex items-center gap-2'>
                        <MdCall className='text-3xl' />
                        <span className='text-xl hover:text-green-600 cursor-pointer'>+880 162 59856</span>
                    </div>

                    <div className='flex items-center gap-2'>
                        <IoMdMail className='text-3xl'/>
                        <span className='text-xl hover:text-green-600 cursor-pointer'>info@w-donate.com</span>
                    </div>

                    <div className='flex gap-2'>
                        <IoMdHome className='text-3xl' />
                        <p className='text-xl hover:text-green-600 cursor-pointer'>Address: House 210, Road - 35, <br />Mohakhali DOHS, Dhaka-1216, Bangladesh</p>
                    </div>

                </div>



                <div className='flex items-center'>
                   
                    <nav>
                        <div className="grid grid-flow-col gap-4">
                            <div><FaFacebook className='text-4xl cursor-pointer' /></div>
                            <div> <FaTwitter className='text-4xl cursor-pointer' /></div>
                            <div> <FaInstagram className='text-4xl cursor-pointer' /></div>
                            <div> <FaLinkedin className='text-4xl cursor-pointer' /></div>

                        </div>
                    </nav>
                </div>
            </div>
            <aside>
                <p className='text-center'>Copyright &copy; {new Date().getFullYear()} - All right reserved by Winter Clothing Donation</p>
            </aside>
        </div>
    );
};

export default Footer;