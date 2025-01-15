"use client";

import React from "react";

const blogs = [
  {
    id: 1,
    title: "Why Regular AC Maintenance is Essential",
    excerpt: "Discover why regular air conditioning maintenance is crucial for efficiency, cost savings, and extended equipment life.",
    image: "/images/blog1.jpeg", 
    link: "/service/maintenance",
  },
  {
    id: 2,
    title: "Top Signs Your Air Conditioner Needs Repairs",
    excerpt: "Is your AC making unusual noises or failing to cool properly? Learn the top signs indicating it's time for repairs.",
    image: "/images/blog2.jpeg", 
    link: "/service/repair",
  },
  {
    id: 3,
    title: "The Benefits of AMC for Your Air Conditioner",
    excerpt: "Explore how an Annual Maintenance Contract (AMC) can save you money and keep your AC in top condition year-round.",
    image: "/images/blog3.jpeg",
    link: "/service/amc",
  },
  {
    id: 4,
    title: "Air Conditioner Installation",
    excerpt: "Get professional and reliable AC installation services tailored to your home or business needs.",
    image: "/images/blog4.jpeg", 
    link: "/service/installation",
  },
  {
    id: 5,
    title: "Expert Consultation",
    excerpt: "Not sure what air conditioning system is right for you? Book a consultation with our experts today.",
    image: "/images/engineer.jpeg", 
    link: "/service/consultation",
  },
];

const BlogPage = () => {
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-5 py-10">
        {/* Hero Section */}
        <section className="animate-zoomIn text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Service Walah Blog</h1>
          <p className="text-lg">
            Stay updated with the latest insights and tips on air conditioning installation, repair, maintenance, and AMC services.
          </p>
        </section>

        {/* Blog Posts */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-gray-100 animate-zoomIn dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{blog.title}</h3>
                <p className="mb-6">{blog.excerpt}</p>
                <a
                  href={blog.link}
                  className="text-blue-500 hover:underline dark:text-blue-400"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default BlogPage;
