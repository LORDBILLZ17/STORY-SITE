import React, { useState } from "react";
import { Card, CardContent } from "./Card";
import { Button } from "./Button";
import Input from "./Input";
import { motion } from "framer-motion";
import { stories } from "./Data";

const StoriesSection = () => {
  const [query, setQuery] = useState("");

  const filteredStories = stories.filter(
    (story) =>
      story.title.toLowerCase().includes(query.toLowerCase()) ||
      story.author.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto bg-pink-50 min-h-screen relative">
      <h1 className="text-4xl font-bold text-pink-600 mb-6">Explore Stories</h1>

      <Input query={query} setQuery={setQuery} className="mb-8 max-w-md" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredStories.map((story) => (
          <motion.div
            key={story.id}
            whileHover={{ scale: 1.02 }}
            className="transition-all"
          >
            <Card className="rounded-2xl overflow-hidden shadow-md bg-white hover:shadow-lg border border-pink-100">
              <img
                src={story.cover}
                alt={story.title}
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold text-pink-700 mb-1">
                  {story.title}
                </h2>
                <p className="text-sm text-gray-500">
                  By {story.author} · {story.genre}
                </p>
                <p className="text-sm mt-2 mb-4 text-gray-700">
                  {story.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-base font-medium text-pink-600">
                    {story.price}
                  </span>
                  <Button className="bg-pink-600 text-white hover:bg-pink-700">
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StoriesSection;
