import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const FooterSection = () => {
    return (
        <footer className="bg-gray-800 text-gray-200 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Contact Information */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                        <p className="mb-2"><strong>Phone:</strong> +1 234 567 890</p>
                        <p className="mb-2"><strong>Email:</strong> contact@popularcare.com</p>
                        <p><strong>Address:</strong> 123 PopularCare St, Health City, TX 78901</p>
                    </div>
                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul>
                            <li className="mb-2"><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
                            <li className="mb-2"><a href="/terms-of-service" className="hover:underline">Terms of Service</a></li>
                            <li className="mb-2"><a href="/careers" className="hover:underline">Careers</a></li>
                        </ul>
                    </div>
                    {/* Social Media Icons */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" className="text-gray-200 hover:text-blue-500">
                                <FaFacebookF size={24} />
                            </a>
                            <a href="https://twitter.com" className="text-gray-200 hover:text-blue-400">
                                <FaTwitter size={24} />
                            </a>
                            <a href="https://linkedin.com" className="text-gray-200 hover:text-blue-600">
                                <FaLinkedinIn size={24} />
                            </a>
                            <a href="https://instagram.com" className="text-gray-200 hover:text-pink-500">
                                <FaInstagram size={24} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p>&copy; {new Date().getFullYear()} PopularCare. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
