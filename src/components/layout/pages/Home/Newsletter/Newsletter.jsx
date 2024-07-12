import { useState } from "react";


// Mock data for past newsletters (replace with actual data or API call)
const pastNewslettersData = [
    {
        id: 1,
        title: 'Monthly Health Tips - July 2024',
        date: 'July 31, 2024',
        link: '#', // Replace with actual link to newsletter
    },
    {
        id: 2,
        title: 'Special Edition: Telemedicine Benefits',
        date: 'June 15, 2024',
        link: '#', // Replace with actual link to newsletter
    },
    // Add more newsletters as needed
];

// Component for Newsletter Sign-Up Form
const NewsletterSignupForm = () => {
    const [email, setEmail] = useState('');

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement newsletter subscription logic here (e.g., API call)
        console.log('Subscribed with email:', email);
        // Reset form after submission (optional)
        setEmail('');
    };

    return (
        <div className="my-8">
            <h2 className="text-2xl font-semibold mb-4">Sign-Up for Our Newsletter</h2>
            <form onSubmit={handleSubmit} className="max-w-md">
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                    Subscribe
                </button>
            </form>
        </div>
    );
};

// Component for displaying Past Newsletters
const PastNewsletters = () => {
    return (
        <div className="my-8">
            <h2 className="text-2xl font-semibold mb-4">Past Newsletters</h2>
            <ul className="divide-y divide-gray-200">
                {pastNewslettersData.map(newsletter => (
                    <li key={newsletter.id} className="py-4">
                        <a href={newsletter.link} className="text-blue-500 hover:underline">
                            {newsletter.title}
                        </a>
                        <p className="text-gray-600">{newsletter.date}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Main Newsletter Subscription Section Component
const NewsletterSubscriptionSection = () => {
    return (
        <div className="container mx-auto py-12">
            <NewsletterSignupForm />
            <PastNewsletters />
        </div>
    );
};

export default NewsletterSubscriptionSection;
