import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
    {
        name: 'Jewel',
        quote: 'MediConnect made booking appointments so easy and convenient!',
        image: 'https://i.ibb.co/pdWGqQp/Jewel.jpg',
    },
    {
        name: 'Abraham',
        quote: 'Thanks to MediConnect, I can consult with my doctor from the comfort of my home.',
        image: 'https://i.ibb.co/253JNRG/Abraham.jpg',
    },
    {
        name: 'Ronan',
        quote: 'Managing my medical records has never been simpler. Great service!',
        image: 'https://i.ibb.co/wyTCDRQ/Ronan.jpg',
    },
    {
        name: 'Jenny',
        quote: 'The health monitoring feature helps me keep track of my health effortlessly.',
        image: 'https://i.ibb.co/fM42h28/Jenny.jpg',
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
        <section className="py-20 bg-gradient-to-r from-indigo-500 to-purple-500">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">What Our <span className="text-white">Users Say</span></h2>
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="px-4">
                            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-orange-500"
                                />
                                <p className="text-2xl font-bold mb-2">{testimonial.name}</p>
                                <p className="text-lg text-gray-600 italic">{testimonial.quote}</p>
                                <div className="flex justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-orange-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017l-.223.897-.894-.447A2 2 0 0120.542 19.5l-.5 7-.223-.897-.894.447A2 2 0 0115.263 21z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-orange-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017l-.223.897-.894-.447A2 2 0 0120.542 19.5l-.5 7-.223-.897-.894.447A2 2 0 0115.263 21z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default TestimonialsSection;
