import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
    {
        name: 'John Doe',
        quote: 'MediConnect made booking appointments so easy and convenient!',
        image: '/images/john.jpg',
    },
    {
        name: 'Jane Smith',
        quote: 'Thanks to MediConnect, I can consult with my doctor from the comfort of my home.',
        image: '/images/jane.jpg',
    },
    {
        name: 'Sam Wilson',
        quote: 'Managing my medical records has never been simpler. Great service!',
        image: '/images/sam.jpg',
    },
    {
        name: 'Lisa Brown',
        quote: 'The health monitoring feature helps me keep track of my health effortlessly.',
        image: '/images/lisa.jpg',
    },
];

const TestimonialsSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <section className="py-12 bg-gradient-to-r from-blue-50 to-blue-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">What Our <span className='text-blue-700'>Users Say</span></h2>
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="px-4">
                            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-24 h-24 rounded-full mx-auto mb-4"
                                />
                                <p className="text-xl font-bold mb-2">{testimonial.name}</p>
                                <p className="text-gray-600 italic">{testimonial.quote}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default TestimonialsSection;
