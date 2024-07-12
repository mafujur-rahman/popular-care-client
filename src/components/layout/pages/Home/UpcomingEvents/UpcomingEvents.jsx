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
        <div className="my-8">
            <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {upcomingEventsData.map(event => (
                    <div key={event.id} className="border p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-medium mb-2">{event.title}</h3>
                        <p className="text-gray-600 mb-2">{event.date} | {event.time}</p>
                        <p className="text-gray-700 mb-4">{event.location}</p>
                        <p className="text-gray-800">{event.description}</p>
                        <a href={event.registrationLink} className="text-blue-500 hover:underline block mt-2">
                            Register Now
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Component for Registration
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
        <div className="my-8">
            <h2 className="text-2xl font-semibold mb-4">Registration</h2>
            <form onSubmit={handleSubmit} className="max-w-md">
                <div className="mb-4">
                    <label htmlFor="fullName" className="block text-gray-700 mb-2">Full Name</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
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
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
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
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500">
                        <option value="">Select an Event</option>
                        {upcomingEventsData.map(event => (
                            <option key={event.id} value={event.title}>{event.title}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                    Register
                </button>
            </form>
        </div>
    );
};

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

// Main Events and Webinars Section Component
const EventsWebinarsSection = () => {
    return (
        <div className="container mx-auto py-12">
            <UpcomingEvents />
            <Registration />
            {/* Example of Event Details component */}
            {/* <EventDetails event={selectedEvent} /> */}
        </div>
    );
};

export default EventsWebinarsSection;
