import AboutBanner from "../components/about/AboutBanner";
import AboutUs from "../components/about/AboutUs";
import TeamMember from "../components/about/TeamMember";
import Fqa from "../components/shared/Fqa";
import Testimonial from "../components/shared/Testimonial";

const About = () => {
    return (
        <div>
            <AboutBanner />
            <AboutUs />
            <TeamMember />
            <Testimonial />
            <Fqa />
        </div>
    );
};

export default About;