import Banner from "../components/home/Banner";
import DeliveryProcess from "../components/home/DeliveryProcess";
import ExoticFood from "../components/home/ExoticFood";
import FeaturedProduct from "../components/home/FeaturedProduct";
import HeroSection from "../components/home/HeroSection";
import Test from "../components/home/Test";
import TopCategories from "../components/home/TopCategories";
import Testimonial from "../components/shared/Testimonial";


const Home = () => {
    return (
        <div>
            <Test />
            <HeroSection />
            <TopCategories />
            <FeaturedProduct />
            <Banner />
            <DeliveryProcess />
            <Testimonial />
             <ExoticFood />
        </div>
    );
};

export default Home;