const ContactPage = () => {
    return (
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 min-h-screen">
        {/* Contact Form */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center text-white mb-12">Get in Touch</h2>
            <div className="flex flex-col lg:flex-row lg:space-x-12">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <form className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-3xl font-semibold mb-6 text-indigo-600">Send Us a Message</h3>
                  <div className="mb-4">
                    <label className="block text-lg font-medium mb-2" htmlFor="name">Name</label>
                    <input
                      className="w-full px-4 py-2 bg-gray-50 border rounded-lg focus:outline-none focus:border-indigo-500"
                      type="text"
                      id="name"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-lg font-medium mb-2" htmlFor="email">Email</label>
                    <input
                      className="w-full px-4 py-2 bg-gray-50 border rounded-lg focus:outline-none focus:border-indigo-500"
                      type="email"
                      id="email"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-lg font-medium mb-2" htmlFor="message">Message</label>
                    <textarea
                      className="w-full px-4 py-2 bg-gray-50 border rounded-lg focus:outline-none focus:border-indigo-500"
                      id="message"
                      rows="6"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <button
                    className="w-full py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-700 focus:outline-none"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
                  <h3 className="text-3xl font-semibold mb-6 text-indigo-600">Contact Details</h3>
                  <p className="text-lg mb-2">
                    <strong>Phone:</strong> (123) 456-7890
                  </p>
                  <p className="text-lg mb-2">
                    <strong>Email:</strong> contact@popularcare.com
                  </p>
                  <p className="text-lg mb-2">
                    <strong>Address:</strong> 123 PopularCare Street, Health City, USA
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-3xl font-semibold mb-6 text-indigo-600">Our Location</h3>
                  <div className="h-64">
                    <iframe
                      className="w-full h-full rounded-lg"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.871484614586!2d-122.08424938494756!3d37.422065979824554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5b3348dc9ff%3A0xfedf5a4f0b3c1fd8!2s123%20PopularCare%20Street%2C%20Health%20City%2C%20USA!5e0!3m2!1sen!2sus!4v1604325676000!5m2!1sen!2sus"
                      allowFullScreen=""
                      aria-hidden="false"
                      tabIndex="0"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default ContactPage;