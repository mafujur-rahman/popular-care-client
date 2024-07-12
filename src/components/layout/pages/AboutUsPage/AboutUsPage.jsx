

const teamMembers = [
    {
        name: 'Jewel Doe',
        title: 'CEO & Founder',
        bio: 'John has over 20 years of experience in the healthcare industry and founded PopularCare to bridge the gap between patients and healthcare providers.',
        image: '/ceo.jpg',
    },
    {
        name: 'Jane Smith',
        title: 'Chief Medical Officer',
        bio: 'Jane is a board-certified physician with a passion for leveraging technology to improve patient outcomes.',
        image: '/jane.png',
    },
    {
        name: 'Sam Wilson',
        title: 'Head of Product Development',
        bio: 'Sam leads the product development team, ensuring PopularCare offers innovative and user-friendly solutions.',
        image: '/sam.png',
    },
    {
        name: 'Lisa Brown',
        title: 'Chief Technology Officer',
        bio: 'Lisa oversees all technical aspects of PopularCare, from infrastructure to software development.',
        image: '/lisa.png',
    },
];

const milestones = [
    { year: '2015', achievement: 'Founded PopularCare' },
    { year: '2016', achievement: 'Launched the first version of PopularCare app' },
    { year: '2018', achievement: 'Reached 10,000 users' },
    { year: '2020', achievement: 'Expanded services to include telemedicine' },
    { year: '2021', achievement: 'Awarded Best Healthcare App of the Year' },
];

const AboutUsPage = () => {
    return (
        <div className="text-gray-700">
            {/* Company Overview */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">About Us</h2>
                    <p className="text-xl leading-relaxed mb-6">
                        At PopularCare, our mission is to connect patients with healthcare providers seamlessly and efficiently. 
                        We believe in the power of technology to transform healthcare, making it more accessible and effective for everyone.
                    </p>
                    <p className="text-xl leading-relaxed">
                        Founded in 2015, PopularCare has grown from a small startup to a trusted name in healthcare technology, 
                        serving thousands of users around the globe.
                    </p>
                </div>
            </section>

            {/* Team Members */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">Our Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="text-center">
                                <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg" />
                                <h3 className="text-2xl font-semibold">{member.name}</h3>
                                <p className="text-blue-600">{member.title}</p>
                                <p className="text-gray-600 mt-2">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Company Milestones */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">Our Journey</h2>
                    <div className="flex flex-col items-center space-y-8">
                        {milestones.map((milestone, index) => (
                            <div key={index} className="flex items-center w-full lg:w-2/3">
                                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                                    {milestone.year}
                                </div>
                                <div className="ml-6 text-xl text-gray-700">
                                    {milestone.achievement}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUsPage;