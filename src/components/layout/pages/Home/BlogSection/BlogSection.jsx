import axios from "axios";
import { useState, useEffect } from "react";

const BlogSection = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/blogs')
            .then(response => {
                setArticles(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []); 

    return (
        <div className="container mx-auto py-16">
            <h2 className="text-4xl font-semibold text-center mb-12">Latest <span className="text-blue-700">Blog Articles</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {articles.map((article) => (
                    <div key={article.id} className="bg-white p-6 rounded-lg shadow-lg border focus:outline-none">
                        <h3 className="text-2xl font-semibold text-blue-600 mb-2">{article.title}</h3>
                        <p className="text-gray-600 mb-4">by {article.author} on {article.date}</p>
                        <p className="text-lg mb-4">{article.summary}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogSection;
