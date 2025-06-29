import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-pink-50 text-gray-800 p-6 flex items-center justify-center">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-xl overflow-hidden md:flex">
       
        <div className="md:w-1/4 w-full h-64 md:h-auto">
          <img
            src="/IMG-20250627-WA0107.jpg"
            alt="Author"
            className="w-full h-full object-cover rounded-md p-6"
          />
        </div>

        <div className="md:w-3/4 w-full p-8 md:p-12 flex flex-col justify-center space-y-6">
          <h1 className="text-4xl font-serif text-pink-600">About Us</h1>
          <p className="text-lg leading-relaxed font-light">
            Welcome to a corner of the web where stories breathe, hearts speak, and imagination takes flight.
            At <span className="font-semibold text-pink-500">Heaven's Copy</span>, we believe in the gentle power of words to soothe, inspire, and connect.
          </p>
          <p className="text-lg leading-relaxed font-light">
            Whether it’s a whisper of fiction, a quiet reflection, or a tale spun from dreams, our pages are crafted for the soul.
            This is a space for readers and writers alike—those who seek beauty in simplicity, and stories that linger long after the last word.
          </p>
          <blockquote className="italic text-pink-700 text-center text-lg">
            Take a moment.<br />
            Slow down.<br />
            Stay awhile.
          </blockquote>
          <p className="text-center text-sm text-gray-500">You’re exactly where you need to be.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
