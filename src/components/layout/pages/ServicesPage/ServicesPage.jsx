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
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 min-h-screen">
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl font-bold text-white mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <div className="p-8">
                    <h3 className="text-3xl font-semibold mb-4 text-indigo-600">{service.title}</h3>
                    <p className="text-lg mb-6">{service.description}</p>
                    <div className="flex flex-wrap justify-center mb-6">
                      {service.benefits.map((benefit, index) => (
                        <div key={index} className="mr-4 mb-4 flex items-center">
                          <svg
                            className="w-6 h-6 text-green-500 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            {index === 0? (
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            ) : index === 1? (
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4m0 4h.01"
                              />
                            ) : (
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m5 -3l2 2 4-4"
                              />
                            )}
                          </svg>
                          <span className="text-lg">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <h4 className="text-2xl font-bold mb-3 text-indigo-600">Service Packages:</h4>
                    <ul className="text-left text-gray-600">
                      {service.packages.map((pkg, index) => (
                        <li key={index} className="mb-2">
                          <span className="font-semibold text-indigo-600">{pkg.name}:</span> {pkg.features}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default ServicesPage;
