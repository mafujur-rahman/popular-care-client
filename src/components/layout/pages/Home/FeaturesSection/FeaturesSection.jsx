
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaStethoscope, FaFileMedical, FaHeartbeat } from 'react-icons/fa';

const features = [
    {
        icon: <FaCalendarAlt size={40} className="text-blue-500" />,
        title: 'Appointment Scheduling',
        description: 'Easily schedule and manage your medical appointments.',
        link: '/features/appointment-scheduling'
    },
    {
        icon: <FaStethoscope size={40} className="text-blue-500" />,
        title: 'Telemedicine Consultations',
        description: 'Consult with doctors remotely via video calls.',
        link: '/features/telemedicine-consultations'
    },
    {
        icon: <FaFileMedical size={40} className="text-blue-500" />,
        title: 'Medical Record Management',
        description: 'Manage and access your medical records securely.',
        link: '/features/medical-record-management'
    },
    {
        icon: <FaHeartbeat size={40} className="text-blue-500" />,
        title: 'Health Monitoring',
        description: 'Monitor your health metrics and get insights.',
        link: '/features/health-monitoring'
    }
];

const FeaturesSection = () => {
    return (
        <section className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Key Features of <span className='text-[#ac4ae0]'>Popular Care</span></h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="mb-4 flex justify-center items-center">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-gray-600 mb-4">{feature.description}</p>
                            <Link to={feature.link} className="text-blue-500 hover:underline">
                                Read More
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
