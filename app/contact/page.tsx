"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 sm:px-12 lg:px-24">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Contact Me</h2>
      <form className="max-w-xl mx-auto flex flex-col gap-6">
        <input
          type="text"
          placeholder="Austin Amadi"
          className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="austinamadi.e@gmail.com"
          className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Your Message"
          className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={5}
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
