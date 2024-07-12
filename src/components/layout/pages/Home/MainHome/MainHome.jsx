
import Banner from "../Banner/Banner";
import BlogSection from "../BlogSection/BlogSection";
import FeaturesSection from "../FeaturesSection/FeaturesSection";
import NewsletterSubscriptionSection from "../Newsletter/Newsletter";
import TestimonialsSection from "../TestimonialSection/TestimonialSection";
import EventsWebinarsSection from "../UpcomingEvents/UpcomingEvents";


const MainHome = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturesSection></FeaturesSection>
            <BlogSection></BlogSection>
            <TestimonialsSection></TestimonialsSection>
            <EventsWebinarsSection></EventsWebinarsSection>
            <NewsletterSubscriptionSection></NewsletterSubscriptionSection>
        </div>
    );
};

export default MainHome;