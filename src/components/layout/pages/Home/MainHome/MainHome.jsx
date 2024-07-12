import AppointmentBookingSection from "../AppointmentBookingSection/AppointmentBookingSection";
import Banner from "../Banner/Banner";
import FeaturesSection from "../FeaturesSection/FeaturesSection";
import TestimonialsSection from "../TestimonialSection/TestimonialSection";


const MainHome = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturesSection></FeaturesSection>
            <AppointmentBookingSection></AppointmentBookingSection>
            <TestimonialsSection></TestimonialsSection>
        </div>
    );
};

export default MainHome;