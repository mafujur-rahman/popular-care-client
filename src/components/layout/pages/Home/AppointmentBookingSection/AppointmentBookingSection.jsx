// src/components/AppointmentBookingSection.js
import  { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AppointmentBookingSection = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle appointment booking logic here
        console.log('Appointment booked:', selectedDate, selectedTime);
    };

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold text-center mb-8">Book an Appointment</h2>
                <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="date">
                            Select Date
                        </label>
                        <DatePicker
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            placeholderText="Select a date"
                            id="date"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="time">
                            Select Time
                        </label>
                        <select
                            value={selectedTime}
                            onChange={(e) => setSelectedTime(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            id="time"
                        >
                            <option value="" disabled>
                                Select a time
                            </option>
                            <option value="09:00">09:00 AM</option>
                            <option value="10:00">10:00 AM</option>
                            <option value="11:00">11:00 AM</option>
                            <option value="12:00">12:00 PM</option>
                            <option value="13:00">01:00 PM</option>
                            <option value="14:00">02:00 PM</option>
                            <option value="15:00">03:00 PM</option>
                            <option value="16:00">04:00 PM</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                    >
                        Book Appointment
                    </button>
                </form>
            </div>
        </section>
    );
};

export default AppointmentBookingSection;
