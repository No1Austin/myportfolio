export default function Footer() {
return (
<footer className="border-t border-gray-200">
<div className="container py-10 text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between gap-4">
<p>© {new Date().getFullYear()} Austin Amadi. All rights reserved.</p>
<p>Built with Next.js, Tailwind CSS, and Framer Motion.</p>
</div>
</footer>
);
}