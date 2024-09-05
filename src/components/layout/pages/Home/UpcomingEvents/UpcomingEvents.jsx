import { useState } from "react";

// Mock data for upcoming events (replace with actual data or API call)
const upcomingEventsData = [
    {
        id: 1,
        title: 'Healthcare Webinar Series',
        date: 'August 15, 2024',
        time: '10:00 AM - 12:00 PM',
        location: 'Online',
        description: 'Join us for a series of webinars on advancements in healthcare technology.',
        registrationLink: '#', // Replace with actual registration link
    },
    {
        id: 2,
        title: 'Nutrition Workshop',
        date: 'September 5, 2024',
        time: '2:00 PM - 4:00 PM',
        location: 'MediConnect Office, Health City, USA',
        description: 'Learn about healthy eating habits and personalized nutrition plans.',
        registrationLink: '#', // Replace with actual registration link
    },
    // Add more events as needed
];

// Component for displaying Upcoming Events
const UpcomingEvents = () => {
    return (
        <div className="my-8 ">
            <h2 className="text-4xl font-bold text-center text-indigo-600 mb-6">Upcoming <span className="text-purple-600">Events</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {upcomingEventsData.map(event => (
                    <div key={event.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:border-indigo-500 hover:shadow-lg transition duration-300 ease-in-out">
                        <h3 className="text-2xl font-bold mb-2 text-indigo-600">{event.title}</h3>
                        <p className="text-gray-600 mb-2">{event.date} | {event.time}</p>
                        <p className="text-gray-700 mb-4">{event.location}</p>
                        <p className="text-gray-800">{event.description}</p>
                        <a href={event.registrationLink} className="text-orange-500 hover:underline block mt-4">
                            Register Now
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Registration = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        event: '',
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement registration submission logic here (e.g., API call)
        console.log('Form submitted:', formData);
        // Reset form after submission (optional)
        setFormData({
            fullName: '',
            email: '',
            event: '',
        });
    };

    return (
        <div className="my-8 ">
            <h2 className="text-4xl font-bold text-center mb-6"><span className="text-purple-600">Register</span> for an Event</h2>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8  rounded-lg shadow-md border border-gray-200 hover:border-indigo-500 hover:shadow-lg transition duration-300 ease-in-out">
                <div className="mb-4">
                    <label htmlFor="fullName" className="block text-gray-700 mb-2">Full Name</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="event" className="block text-gray-700 mb-2">Event</label>
                    <select
                        id="event"
                        name="event"
                        value={formData.event}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-500">
                        <option value="">Select an Event</option>
                        {upcomingEventsData.map(event => (
                            <option key={event.id} value={event.title}>{event.title}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="w-full bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 focus:outline-none">
                    Register
                </button>
            </form>
        </div>
    );
};

const EventsWebinarsSection = () => {
    return (
        <div className="bg-white">
            <div className="container mx-auto py-12">
                <UpcomingEvents />
                <Registration />
            </div>
        </div>
    );
};

export default EventsWebinarsSection;





// Component for Event Details (single event view)
// const EventDetails = ({ event }) => {
//     return (
//         <div className="my-8">
//             <h2 className="text-2xl font-semibold mb-4">{event.title}</h2>
//             <p className="text-lg text-gray-600 mb-2">{event.date} | {event.time}</p>
//             <p className="text-gray-700 mb-4">{event.location}</p>
//             <p className="text-gray-800">{event.description}</p>
//             {/* Additional details as needed */}
//         </div>
//     );
// };