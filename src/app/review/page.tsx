"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    id: 1,
    name: "Sandeep Joshi",
    service: "AC Installation",
    rating: 5,
    comment: "Service Walah did an excellent job installing my air conditioner. The technicians were professional and efficient. Highly recommended!",
  },
  {
    id: 2,
    name: "Amit Bansal",
    service: "AC Repair",
    rating: 4,
    comment: "I had my AC repaired by Service Walah, and they fixed it in no time. Great customer service and knowledgeable staff.",
  },
  {
    id: 3,
    name: "Jasmin Kaur",
    service: "AC Maintenance",
    rating: 5,
    comment: "I signed up for the AMC service, and I’m very satisfied with the regular maintenance. My AC is running smoothly all year round.",
  },
  {
    id: 4,
    name: "Imran Alam",
    service: "AC Installation",
    rating: 5,
    comment: "Service Walah did an excellent job installing my air conditioner. The technicians were professional and efficient. Highly recommended!",
  },
  {
    id: 5,
    name: "Sumit Jain",
    service: "AMC",
    rating: 4,
    comment: "I had my AC repaired by Service Walah, and they fixed it in no time. Great customer service and knowledgeable staff.",
  },
  {
    id: 6,
    name: "Rakesh",
    service: "AC Maintenance",
    rating: 5,
    comment: "I signed up for the AMC service, and I’m very satisfied with the regular maintenance. My AC is running smoothly all year round.",
  },
];

const ReviewPage = () => {
  const [form, setForm] = useState({
    name: "",
    service: "AC Installation",
    rating: 5,
    comment: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your review!");
    // Here, you would typically send the form data to your server or a service
  };

  return (
    <div className="bg-white animate-zoomIn text-gray-900 dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-5 py-10">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Customer Reviews</h1>
          <p className="text-lg">Hear from our satisfied customers about our AC services.</p>
        </section>

        {/* Reviews Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">What Our Customers Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">{review.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{review.service}</p>
                <div className="flex items-center mt-2">
                  {Array.from({ length: review.rating }).map((_, index) => (
                    <svg key={index} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5 text-yellow-500">
                      <path d="M10 15.27L16.18 19l-1.64-7.03L19 8.24l-7.19-.61L10 2 8.19 7.63 1 8.24l4.46 3.73L3.82 19z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-4">{review.comment}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Submit Review Form Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Submit Your Review</h2>
          <form onSubmit={handleSubmit} className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-white text-gray-900 dark:bg-gray-700 dark:text-white rounded-md border-2 border-gray-300 dark:border-gray-600"
                  required
                />
              </div>
              <div>
                <label className="block text-lg mb-2">Service Type</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full p-3 bg-white text-gray-900 dark:bg-gray-700 dark:text-white rounded-md border-2 border-gray-300 dark:border-gray-600"
                  required
                >
                  <option value="AC Installation">AC Installation</option>
                  <option value="AC Repair">AC Repair</option>
                  <option value="AC Maintenance">AC Maintenance</option>
                  <option value="AMC Service">AMC Service</option>
                </select>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-lg mb-2">Rating</label>
              <select
                name="rating"
                value={form.rating}
                onChange={handleChange}
                className="w-full p-3 bg-white text-gray-900 dark:bg-gray-700 dark:text-white rounded-md border-2 border-gray-300 dark:border-gray-600"
              >
                {[1, 2, 3, 4, 5].map((rating) => (
                  <option key={rating} value={rating}>
                    {rating} {rating === 1 ? "star" : "stars"}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-6">
              <label className="block text-lg mb-2">Your Review</label>
              <textarea
                name="comment"
                value={form.comment}
                onChange={handleChange}
                className="w-full p-3 bg-white text-gray-900 dark:bg-gray-700 dark:text-white rounded-md border-2 border-gray-300 dark:border-gray-600"
                rows={4}
                required
              />
            </div>

            <div className="mt-6 text-center">
              <Button type="submit" className="bg-blue-500 text-white hover:bg-blue-600">
                Submit Review
              </Button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ReviewPage;
