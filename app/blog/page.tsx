"use client";

import { useState } from "react";

import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import posts from "../data/posts";
import Image from "next/image";

export default function BlogPage() {
  const [activePost, setActivePost] = useState(Object);
  const [active, isActive] = useState(false)

  const handleSetActivePost = (post: object) => {
    isActive(!active)
    setActivePost(post)
  }

  return (
    
    <div className="flex flex-col min-h-screen bg-white-50">
        <Navbar />
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center text-green-700 mt-4">Our Blog</h1>
            <div className="grid gap-8">
            {posts.map((post) => (
                <div
                key={post.slug}
                className="bg-white p-6 rounded-lg shadow hover:shadow-md transition cursor-pointer"
                onClick={() => handleSetActivePost(post)}
                >
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{post.title}</h2>
                <p className="text-sm text-gray-500 mb-4">{post.date}</p>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <span className="text-green-600 hover:underline font-medium">Read More</span>
                </div>
            ))}
            </div>
        </div>

        {/* Overlay Modal */}
        {active && (
            <div className="fixed inset-0 bg-grey bg-opacity-50 z-50 flex items-center min-h-screen justify-center px-4">
            <div className="bg-white max-w-2xl w-full p-6 rounded-lg shadow-lg relative overflow-y-auto max-h-[80vh]">
                <button
                className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
                onClick={() => isActive(false)}
                >
                &#x2715;
                </button>
                <h2 className="text-2xl font-bold mb-2 text-green-700">{activePost.title}</h2>
                <div className="grid grid-flow-row auto-rows-max md:grid-cols-3 gap-2 ">
                    {
                        activePost.images.map((image: string, index: number) => (
                            <Image
                                key={index}
                                alt=""
                                src={image}
                                width="500"
                                height="400"
                                className={`md:shadow-lg rounded-md ${index === 0 ? 'md:col-span-3 w-full' : ''} ${index === 2 ? 'md:col-span-2 h-28' : ''}`}
                            />
                        ))  
            
                    }
                </div>
                <p className="text-sm text-gray-500 mb-4">{activePost.date}</p>
                <div className="prose" dangerouslySetInnerHTML={{ __html: activePost.content }}></div>
            </div>
            </div>
        )}
        <Footer />
    </div>
  );
}