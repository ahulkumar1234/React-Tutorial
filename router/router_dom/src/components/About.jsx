import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-900 via-black to-purple-900 text-white px-4 ">
      <h1 className="text-5xl font-extrabold mb-6">About Us</h1>
      <p className="text-lg text-gray-300 max-w-2xl text-center mb-8">
        We are passionate developers building modern and user-friendly web
        applications. Our mission is to deliver clean, efficient, and
        responsive solutions using the latest technologies like React and
        Tailwind CSS.
      </p>
      <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-2xl shadow-lg transition duration-300">
        Learn More
      </button>
    </div>
  );
};

export default About;
