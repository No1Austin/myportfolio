"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center p-8">
      <motion.img
        src="/me.jpg"
        alt="Profile"
        width={160}
        height={160}
        className="rounded-full shadow-lg mb-6"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Hi, I’m Austin Amadi
      </motion.h1>
      <p className="text-lg text-gray-600 max-w-xl mb-6">
        A passionate developer who loves building beautiful web experiences.
      </p>

      {/* Call To Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >


            <a
  href="https://sites.google.com/view/austinamadi/home"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 rounded-2xl bg-blue-600 text-white font-medium shadow-lg hover:bg-blue-700 transition"
>
  Job Experiences
</a>
        </motion.div>
      </section>
  );
}