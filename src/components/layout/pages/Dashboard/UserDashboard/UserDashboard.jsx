import { useState } from "react";


const UserDashboard = () => {
    const [editingPersonalInfo, setEditingPersonalInfo] = useState(false);
    const [personalInfo, setPersonalInfo] = useState({
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "123-456-7890",
        medicalHistory: "No known allergies."
    });

    const [appointments, setAppointments] = useState([
        { id: 1, date: "2024-07-15", time: "10:00 AM", status: "Upcoming" },
        { id: 2, date: "2024-06-20", time: "11:00 AM", status: "Completed" }
    ]);

    const [medicalRecords, setMedicalRecords] = useState([
        { id: 1, type: "Prescription", date: "2024-06-15", file: "prescription1.pdf" },
        { id: 2, type: "Test Result", date: "2024-05-20", file: "testresult1.pdf" }
    ]);

    const handleEditPersonalInfo = () => setEditingPersonalInfo(!editingPersonalInfo);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPersonalInfo({ ...personalInfo, [name]: value });
    };

    return (
        <div className="container mx-auto py-16">
            <h2 className="text-4xl font-bold text-center mb-12">User Dashboard</h2>

            {/* Personal Information */}
            <section className="mb-12">
                <h3 className="text-2xl font-semibold mb-6">Personal Information</h3>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    {editingPersonalInfo ? (
                        <form>
                            <div className="mb-4">
                                <label className="block text-lg font-medium mb-2" htmlFor="name">Name</label>
                                <input className="w-full px-4 py-2 bg-gray-50 border rounded-lg focus:outline-none focus:border-blue-500" type="text" id="name" name="name" value={personalInfo.name} onChange={handleChange} />
                            </div>
                            <div className="mb-4">
                                <label className="block text-lg font-medium mb-2" htmlFor="email">Email</label>
                                <input className="w-full px-4 py-2 bg-gray-50 border rounded-lg focus:outline-none focus:border-blue-500" type="email" id="email" name="email" value={personalInfo.email} onChange={handleChange} />
                            </div>
                            <div className="mb-4">
                                <label className="block text-lg font-medium mb-2" htmlFor="phone">Phone</label>
                                <input className="w-full px-4 py-2 bg-gray-50 border rounded-lg focus:outline-none focus:border-blue-500" type="text" id="phone" name="phone" value={personalInfo.phone} onChange={handleChange} />
                            </div>
                            <div className="mb-4">
                                <label className="block text-lg font-medium mb-2" htmlFor="medicalHistory">Medical History</label>
                                <textarea className="w-full px-4 py-2 bg-gray-50 border rounded-lg focus:outline-none focus:border-blue-500" id="medicalHistory" name="medicalHistory" rows="4" value={personalInfo.medicalHistory} onChange={handleChange}></textarea>
                            </div>
                            <button type="button" className="btn bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600" onClick={handleEditPersonalInfo}>Save</button>
                        </form>
                    ) : (
                        <div>
                            <p className="text-lg mb-2"><strong>Name:</strong> {personalInfo.name}</p>
                            <p className="text-lg mb-2"><strong>Email:</strong> {personalInfo.email}</p>
                            <p className="text-lg mb-2"><strong>Phone:</strong> {personalInfo.phone}</p>
                            <p className="text-lg mb-2"><strong>Medical History:</strong> {personalInfo.medicalHistory}</p>
                            <button className="btn bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600" onClick={handleEditPersonalInfo}>Edit</button>
                        </div>
                    )}
                </div>
            </section>

            {/* Appointment Management */}
            <section className="mb-12">
                <h3 className="text-2xl font-semibold mb-6">Appointment Management</h3>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    {appointments.map(appointment => (
                        <div key={appointment.id} className="mb-4">
                            <p className="text-lg mb-2"><strong>Date:</strong> {appointment.date}</p>
                            <p className="text-lg mb-2"><strong>Time:</strong> {appointment.time}</p>
                            <p className="text-lg mb-2"><strong>Status:</strong> {appointment.status}</p>
                            <button className="btn bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600">Reschedule</button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Medical Records */}
            <section className="mb-12">
                <h3 className="text-2xl font-semibold mb-6">Medical Records</h3>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    {medicalRecords.map(record => (
                        <div key={record.id} className="mb-4">
                            <p className="text-lg mb-2"><strong>Type:</strong> {record.type}</p>
                            <p className="text-lg mb-2"><strong>Date:</strong> {record.date}</p>
                            <a href={`/records/${record.file}`} className="text-blue-500 hover:underline" download>Download</a>
                        </div>
                    ))}
                </div>
            </section>

            {/* Telemedicine Interface */}
            <section>
                <h3 className="text-2xl font-semibold mb-6">Telemedicine Interface</h3>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <p className="text-lg mb-6">Join your upcoming video consultations with healthcare providers.</p>
                    <button className="btn bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">Join Video Consultation</button>
                </div>
            </section>
        </div>
    );
};

export default UserDashboard;
