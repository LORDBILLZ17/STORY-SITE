import React from "react";
import { motion } from "framer-motion";
import { Button } from "./Button";
import { Fstories } from "./Data";


const Hero = () => {
  return (
    <div className="bg-white text-pink-800 min-h-screen font-playfair">

   
      <section className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="https://media.istockphoto.com/id/2158853506/video/young-women-reading-a-book.mp4?b=1&s=192_srp&k=20&c=-BzMKtj96XvxdS-bJprZFnnlkT2fWV4F8KSJiDCLOvc="
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute top-0 left-0 w-full h-full bg-pink-900/40 z-10 backdrop-blur-sm"></div>

        <div className="relative z-20 max-w-2xl text-white">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-extrabold mb-4 drop-shadow-md"
          >
            Discover Stories Worth Reading
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 text-lg text-pink-100"
          >
            Instantly download captivating tales in beautifully crafted PDF format.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 text-lg rounded-full shadow-md">
              Browse Stories
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-16 px-4 bg-white">
        <h3 className="text-3xl font-bold text-center mb-10">Featured Stories</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {Fstories.map((story) => (
            <motion.div
              key={story.id}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-pink-50 border border-pink-200 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                <div className="p-5">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="mb-4 w-full h-40 object-cover rounded"
                  />
                  <h4 className="text-xl font-semibold mb-2">{story.title}</h4>
                  <p className="text-sm mb-4 text-gray-700">{story.description}</p>
                  <Button className="bg-pink-600 hover:bg-pink-700 text-white w-full py-2 rounded-full">
                    Buy for {story.price}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-pink-50 px-4">
        <h3 className="text-3xl font-bold text-center mb-10">Why Choose Us?</h3>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-center text-lg font-medium">
          {[
            "✅ Instant PDF Download",
            "✅ Original HandWritten Stories",
            "✅ Affordable Pricing",
          ].map((item, index) => (
            <motion.li
              key={index}
              className="p-6 bg-white shadow rounded-xl hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Hero;
