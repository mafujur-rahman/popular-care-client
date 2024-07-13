const services = [
    {
        title: 'Appointment Scheduling',
        description: 'Easily schedule appointments with healthcare providers at your convenience.',
        benefits: [
            '24/7 scheduling',
            'Automated reminders',
            'Easy rescheduling'
        ],
        packages: [
            { name: 'Basic', features: 'Includes standard appointment scheduling' },
            { name: 'Premium', features: 'Priority support and additional features' }
        ]
    },
    {
        title: 'Telemedicine Consultations',
        description: 'Consult with doctors from the comfort of your home using our telemedicine service.',
        benefits: [
            'Remote consultations',
            'Secure and private',
            'Access to specialists'
        ],
        packages: [
            { name: 'Basic', features: 'Standard telemedicine consultations' },
            { name: 'Premium', features: 'Extended consultation hours and priority support' }
        ]
    },
    {
        title: 'Medical Record Management',
        description: 'Keep your medical records organized and accessible at any time.',
        benefits: [
            'Secure storage',
            'Easy access and sharing',
            'Centralized management'
        ],
        packages: [
            { name: 'Basic', features: 'Standard medical record management' },
            { name: 'Premium', features: 'Advanced analytics and priority support' }
        ]
    },
    {
        title: 'Health Monitoring',
        description: 'Track your health metrics and stay on top of your wellness goals.',
        benefits: [
            'Real-time tracking',
            'Personalized insights',
            'Integration with wearable devices'
        ],
        packages: [
            { name: 'Basic', features: 'Standard health monitoring' },
            { name: 'Premium', features: 'Advanced insights and personalized recommendations' }
        ]
    },
];

const ServicesPage = () => {
    return (
        <div className="text-gray-700 bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen">
            <section className="py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-blue-700 mb-12">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                <h3 className="text-2xl font-semibold mb-4 text-blue-700">{service.title}</h3>
                                <p className="text-lg mb-6">{service.description}</p>
                                <h4 className="text-xl font-bold mb-3 text-blue-600">Benefits:</h4>
                                <ul className="list-disc list-inside mb-6 text-left text-gray-600">
                                    {service.benefits.map((benefit, index) => (
                                        <li key={index} className="mb-2">{benefit}</li>
                                    ))}
                                </ul>
                                <h4 className="text-xl font-bold mb-3 text-blue-600">Service Packages:</h4>
                                <ul className="text-left text-gray-600">
                                    {service.packages.map((pkg, index) => (
                                        <li key={index} className="mb-2">
                                            <span className="font-semibold text-blue-700">{pkg.name}:</span> {pkg.features}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
