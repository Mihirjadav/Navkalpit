import React from "react";
import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    img: "/assets/images/blog1.jpg",
    tag: "Design Guide",
    title: "Choosing the Right PCB Material for Performance",
    excerpt:
      "The substrate material of a PCB is fundamental to its performance. Learn how to choose between FR-4, Rogers, and other materials to meet your design requirements.",
  },
  {
    id: 2,
    img: "/assets/images/blog2.jpg",
    tag: "Industry Trends",
    title: "The Rise of Rigid-Flex PCBs in Modern Designs",
    excerpt:
      "Rigid-flex PCBs offer a unique combination of reliability and flexibility, making them ideal for complex, three-dimensional designs in aerospace, medical, and consumer electronics.",
  },
  {
    id: 3,
    img: "/assets/images/blog3.jpg",
    tag: "Manufacturing",
    title: "A Beginner's Guide to SMT Assembly",
    excerpt:
      "This guide covers the basics of the SMT assembly process, from solder paste printing to reflow soldering.",
  },
];

export default function Blogs() {
  return (
    <div className="bg-white text-black min-h-screen">
      <header className="py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-2">
          Navkalpit Blog
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          News, articles, and resources for electronics engineers and designers.
        </p>
      </header>

      <main className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white border rounded-lg shadow-sm overflow-hidden"
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <div className="text-xs text-gray-500 mb-3">{post.tag}</div>
                <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
