import React from "react";
import { Calendar, User } from "lucide-react";

const BlogPage = () => {
  const posts = [
    {
      title: "Advancements in Maternal Health",
      excerpt:
        "Discover the latest advancements in maternal health and how they are impacting healthcare worldwide.",
      author: "Jane Doe",
      date: "January 10, 2025",
      imageUrl: "/images/blog1.jpg",
    },
    {
      title: "The Role of Midwives in Rural Healthcare",
      excerpt:
        "Midwives play a crucial role in rural healthcare. Learn how their work is transforming communities.",
      author: "John Smith",
      date: "December 5, 2024",
      imageUrl: "/images/blog2.jpg",
    },
    {
      title: "Becoming a Nurse Leader",
      excerpt:
        "Effective leadership is essential in nursing. This blog post discusses how to develop leadership skills in the nursing profession.",
      author: "Sarah Lee",
      date: "November 20, 2024",
      imageUrl: "/images/blog3.jpg",
    },
  ];

  return (
    
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-green-700 text-white py-20">
          <div className="container mx-auto px-6 md:px-12 text-center">
            <h1 className="text-4xl md:text-6xl font-bold">Our Blog</h1>
            <p className="mt-4 text-lg md:text-xl">
              Stay up-to-date with the latest news, tips, and insights from the
              world of nursing and midwifery.
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-green-700">{post.title}</h2>
                    <p className="mt-4 text-gray-700">{post.excerpt}</p>
                    <div className="flex items-center mt-6 space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1 text-green-700" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1 text-green-700" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-700 p-4 text-center">
                    <a
                      href="#"
                      className="text-white font-bold hover:text-green-300"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-green-700 text-white py-16">
          <div className="container mx-auto px-6 md:px-12 text-center">
            <h2 className="text-3xl font-bold">Want to Contribute?</h2>
            <p className="mt-4 text-lg">
              If you&apos;re passionate about nursing, midwifery, or healthcare,
              consider writing for our blog and sharing your expertise with our
              community.
            </p>
            <button className="mt-6 bg-white text-green-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300">
              Submit Your Article
            </button>
          </div>
        </section>
      </main>
     
  );
};

export default BlogPage;
