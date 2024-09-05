import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2';

const AppointmentBookingSection = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState('');
    const [selectedDoctor, setSelectedDoctor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation: check if all fields are selected
        if (!selectedDate || !selectedTime || !selectedDoctor) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill in all the fields before booking.',
            });
            return;
        }

        Swal.fire({
            icon: "success",
            title: "Your appointment is booked",
            showConfirmButton: false,
            timer: 1500
        });

        console.log('Appointment booked:', selectedDate, selectedTime, selectedDoctor);
    };

    return (
        <section className="py-12 bg-gradient-to-r from-indigo-500 to-purple-500">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold text-center mb-8">Book an <span className='text-white'>Appointment</span></h2>
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
                            minDate={new Date()}
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
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="doctor">
                            Select Doctor
                        </label>
                        <select
                            value={selectedDoctor}
                            onChange={(e) => setSelectedDoctor(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            id="doctor"
                        >
                            <option value="" disabled>
                                Select a doctor
                            </option>
                            <option value="Dr. Smith">Dr. Smith</option>
                            <option value="Dr. Johnson">Dr. Johnson</option>
                            <option value="Dr. Williams">Dr. Williams</option>
                            <option value="Dr. Brown">Dr. Brown</option>
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
