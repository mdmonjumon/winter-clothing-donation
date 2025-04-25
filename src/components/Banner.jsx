import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import bannerImg1 from '../assets/banner_1.jpg'
import bannerImg2 from '../assets/banner-2.jpg'


const Banner = () => {

    const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
        <div className='max-w-7xl mx-auto my-10'>


            <AutoplaySlider className='lg:h-[calc(100vh-200px)]'
                play={true}
                cancelOnInteraction={false}
                interval={6000}
            >
                <div className='h-full w-full'>
                    <img className='size-full object-fill' src={bannerImg2} alt="" />
                </div>
                <div className='h-full w-full'>
                    <img className='size-full object-fill' src={bannerImg1} alt="" />
                </div>
                
            </AutoplaySlider>
        </div>
    );
};

export default Banner;