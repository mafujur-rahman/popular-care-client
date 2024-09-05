import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaStethoscope, FaFileMedical, FaHeartbeat } from 'react-icons/fa';

const features = [
    {
        icon: <FaCalendarAlt size={40} className="text-blue-500" />,
        title: 'Appointment Scheduling',
        description: 'Easily schedule and manage your medical appointments.',
    },
    {
        icon: <FaStethoscope size={40} className="text-blue-500" />,
        title: 'Telemedicine Consultations',
        description: 'Consult with doctors remotely via video calls.',
    },
    {
        icon: <FaFileMedical size={40} className="text-blue-500" />,
        title: 'Medical Record Management',
        description: 'Manage and access your medical records securely.',
    },
    {
        icon: <FaHeartbeat size={40} className="text-blue-500" />,
        title: 'Health Monitoring',
        description: 'Monitor your health metrics and get insights.',
    }
];

const FeaturesSection = () => {
    return (
      <section className="py-20 bg-gradient-to-r from-indigo-500 to-purple-500">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12">Unlock the Power of <span className="text-white">Popular Care</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition duration-300 ease-in-out hover:translate-y-2"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-700 mb-6">{feature.description}</p>
                <Link to={feature.link} className="text-indigo-600 hover:text-indigo-700 transition duration-300 ease-in-out">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 inline-block">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <div className="flex justify-end mt-4">
                  <div className="w-4 h-4 bg-indigo-500 rounded-full mr-2" />
                  <div className="w-4 h-4 bg-purple-500 rounded-full mr-2" />
                  <div className="w-4 h-4 bg-pink-500 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default FeaturesSection;