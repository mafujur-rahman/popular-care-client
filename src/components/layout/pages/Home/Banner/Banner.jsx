import { Link } from "react-router-dom";


const Banner = () => {
  return (
    <section className="relative h-screen flex items-center bg-cover bg-no-repeat" style={{ backgroundImage: 'url("/banner3.jpg")' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
      <div className="container mx-auto px-8 lg:flex lg:items-center lg:justify-between relative z-10">
        <div className="lg:w-1/2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
            Welcome to <span className="text-[#ac4ae0]">Popular Care</span>
          </h1>
          <p className="text-lg md:text-xl text-white mb-12">
            Empowering patients and providers with advanced healthcare solutions. Simplifying appointments, managing medical records, and facilitating telemedicine consultations.
          </p>
          <Link to='/book-appointment'><a  className="bg-[#ac4ae0] hover:bg-blue-700 text-white py-3 px-8 rounded-full shadow-md inline-block transition duration-300">
            Book Appointment
          </a></Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
