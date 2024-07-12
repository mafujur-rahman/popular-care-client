

const BlogSection = () => {
    const articles = [
        {
            id: 1,
            title: "The Importance of Regular Health Check-Ups",
            author: "Dr. Jane Smith",
            date: "2024-07-01",
            summary: "Regular health check-ups can help detect potential health issues early and keep you on track for a healthier life.",
        },
        {
            id: 2,
            title: "5 Tips for a Balanced Diet",
            author: "Nutritionist John Doe",
            date: "2024-07-05",
            summary: "A balanced diet is essential for maintaining good health. Here are 5 tips to help you get started.",
        },
    ];

    return (
        <div className="container mx-auto py-16">
            <h2 className="text-4xl font-bold text-center mb-12">Latest Blog Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {articles.map((article) => (
                    <div key={article.id} className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold mb-2">{article.title}</h3>
                        <p className="text-gray-600 mb-4">by {article.author} on {article.date}</p>
                        <p className="text-lg mb-4">{article.summary}</p>
                        <a href={`/blog/${article.id}`} className="text-blue-500 hover:underline">Read More</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogSection;
