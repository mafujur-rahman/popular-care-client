import { useContext } from "react";
import { AuthContext } from "../../../../Context/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";


const AddBlog = () => {
    const { user } = useContext(AuthContext)

    const handleBlogBtn = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.elements.title.value;
        const date = form.elements.date.value;
        const summary = form.elements.summary.value;

        const newBlog = {
            title,
            date,
            summary,
            author: user?.displayName,
            author_img: user?.photoURL
        };
        console.log(newBlog);

        // post blog in database
        axios.post('http://localhost:5000/blogs', newBlog)
            .then(response => {
                console.log(response.data);
                if(response.data.insertedId){
                    Swal.fire({
                        icon: "success",
                        title: "Successfully add a new blog.",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
            .catch(error => {
                console.error(error)
                Swal.fire({
                    icon: "error",
                    text: "Failed to add a blog",
                  });
            })
    }

    return (
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen flex items-center justify-center">
            <div className="max-w-xl w-full my-20 p-4">
                <form onSubmit={handleBlogBtn} className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
                    <h2 className="text-2xl mb-6 text-center font-semibold text-blue-700">Add New Vlog</h2>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                        <input
                            type="text"
                            name="title"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>


                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Date</label>
                        <input
                            type="date"
                            name="date"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Summary</label>
                        <textarea
                            name="summary"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddBlog;