"use client"
import React from 'react';
import { motion } from 'framer-motion'; // Importing motion
import { MapPin, Laptop } from 'lucide-react';

// Redesigned Hero Component with new content and creative layout
const Hero = () => {
    return (
        <motion.div
            className="relative h-[700px] bg-gradient-to-r from-blue-600 to-indigo-600 overflow-hidden border-b border-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* Background Elements */}
            <motion.div
                className="absolute inset-0 bg-opacity-70 flex justify-center items-center text-white"
                style={{
                    backgroundImage: `
                    radial-gradient(circle at top left, rgba(255,255,255,0.2), transparent),
                    linear-gradient(160deg, rgba(255,255,255,0.1), rgba(255,255,255,0) 80%)`,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* Layered geometric elements */}
                <motion.div
                    className="absolute top-[-50px] left-[100px] h-40 w-40 bg-white rounded-full opacity-10"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                />
                <motion.div
                    className="absolute top-[200px] right-[100px] h-28 w-28 bg-blue-500 rounded-lg transform rotate-45 opacity-20"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                />
                <motion.div
                    className="absolute bottom-[-60px] left-[200px] h-[220px] w-[220px] bg-indigo-500 rounded-full opacity-20"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                />
            </motion.div>

            {/* Content Section */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-8">
                <motion.h1
                    className="text-6xl font-bold text-white leading-snug"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Stories that Inspire, Connect, and Empower
                </motion.h1>
                <motion.p
                    className="mt-6 max-w-2xl text-lg text-gray-100 leading-relaxed"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Dive into inspiring journeys from developers worldwide. Explore their achievements, challenges, and the powerful impact of the global developer community.
                </motion.p>
                <div className="mt-10 space-x-4">
                    <motion.a
                        href="#featured-stories"
                        className="inline-block px-8 py-3 text-blue-800 bg-white rounded-md hover:bg-gray-100 font-semibold"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Explore Stories
                    </motion.a>
                    <motion.a
                        href="#share-your-story"
                        className="inline-block px-8 py-3 text-white border-2 border-gray-200 rounded-md hover:bg-gray-200 bg-opacity-20"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        Share Your Story
                    </motion.a>
                </div>
            </div>
        </motion.div>
    );
};

// Spotlight Component tailored to highlight stories from the developer community
const Spotlight = () => {
    const spotlightStories = [
        {
            title: 'Empowering Women in Tech',
            description: 'How Cecilia Castillo is advocating for women in tech in Guatemala through GDG.',
            location: 'Guatemala',
            date: 'March 2022',
            image: '/story1.jpeg',
        },
        {
            title: 'DevFest at Ten',
            description: 'Celebrating ten years of DevFest and its global impact on developers worldwide.',
            location: 'Global',
            date: 'February 2022',
            image: '/story2.png',
        },
        {
            title: 'Building a Community in Russia',
            description: 'How a small developer group in rural Russia turned into a thriving community.',
            location: 'Russia',
            date: 'October 2020',
            image: '/story3.png',
        },
        {
            title: 'AI Fest in Spain',
            description: 'Spain hosts its first AI-focused event, connecting AI enthusiasts across the nation.',
            location: 'Spain',
            date: 'November 2021',
            image: '/story4.jpeg',
        },
    ];

    return (
        <motion.div
            className="mt-16 flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-4xl font-semibold mb-6 text-gray-800">Featured Stories</h2>
            <div className="flex space-x-4 overflow-x-auto pb-4">
                {spotlightStories.map((story, index) => (
                    <motion.div
                        key={index}
                        className="bg-white shadow-lg rounded-lg p-4 w-80"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                        <img src={story.image} alt={story.title} className="rounded-t-lg w-full h-40 object-cover" />
                        <div className="mt-4">
                            <h3 className="font-bold text-2xl">{story.title}</h3>
                            <p className="mt-2 text-gray-600">{story.description}</p>
                            <div className="mt-4 flex items-center space-x-2 text-gray-500">
                                <MapPin className="w-4 h-4" />
                                <span>{story.location}</span>
                            </div>
                            <div className="mt-2 flex items-center space-x-2 text-gray-500">
                                <Laptop className="w-4 h-4" />
                                <span>{story.date}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

// Path to Success Section with new design and thematic content
const PathToSuccess = () => {
    return (
        <motion.section
            className="py-12 px-6 md:px-16 mx-auto max-w-screen-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-4xl font-bold text-center mb-12 text-indigo-600">Why Our Stories Matter</h2>

            {/* Inspire */}
            <motion.div
                className="flex flex-col md:flex-row items-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <img
                    src="/story5.png"
                    alt="Inspire"
                    className="w-full md:w-1/2 h-64 object-contain rounded-lg transition-transform duration-300 hover:scale-105"
                />
                <div className="md:ml-8 text-center md:text-left mt-6 md:mt-0 md:w-1/2">
                    <h3 className="text-4xl font-semibold text-gray-800 mb-4">🌍 Inspire Change</h3>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Discover how developers worldwide are using technology to solve real-world problems and inspire others to create change.
                    </p>
                </div>
            </motion.div>

            {/* Connect */}
            <motion.div
                className="flex flex-col md:flex-row-reverse items-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <img
                    src="/story6.png"
                    alt="Connect"
                    className="w-full md:w-1/2 h-64 object-contain rounded-lg transition-transform duration-300 hover:scale-105"
                />
                <div className="md:mr-8 text-center md:text-left mt-6 md:mt-0 md:w-1/2">
                    <h3 className="text-4xl font-semibold text-gray-800 mb-4">🤝 Build Connections</h3>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        From local meetups to global conferences, learn how communities help developers connect, share, and grow together.
                    </p>
                </div>
            </motion.div>

            {/* Empower */}
            <motion.div
                className="flex flex-col md:flex-row items-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <img
                    src="/story7.png"
                    alt="Empower"
                    className="w-full md:w-1/2 h-64 object-contain rounded-lg transition-transform duration-300 hover:scale-105"
                />
                <div className="md:ml-8 text-center md:text-left mt-6 md:mt-0 md:w-1/2">
                    <h3 className="text-4xl font-semibold text-gray-800 mb-4">🚀 Empower Innovators</h3>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Empower the next generation of developers by sharing their stories, challenges, and triumphs in the tech world.
                    </p>
                </div>
            </motion.div>
        </motion.section>
    );
};

// Main StoriesPage component bringing together all sections
const StoriesPage = () => {
    return (
        <div>
            <Hero />
            <Spotlight />
            <PathToSuccess />
        </div>
    );
};

export default StoriesPage;
