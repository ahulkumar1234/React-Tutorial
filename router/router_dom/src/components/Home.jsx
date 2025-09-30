import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-900 via-black to-blue-900 text-white ">
      <h1 className="text-5xl font-extrabold mb-6">Welcome to My Website</h1>
      <p className="text-lg text-gray-300 max-w-xl text-center mb-8">
        This is the Home Page. Explore amazing features, learn new things, and
        enjoy a modern UI built with React + Tailwind CSS.
      </p>
      <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-2xl shadow-lg transition duration-300">
        Get Started
      </button>
    </div>
  );
};

export default Home;
