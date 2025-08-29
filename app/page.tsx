import Hero from "../components/Hero";


export default function HomePage() {
return (
<>
<Hero />


<section className="mt-16 grid md:grid-cols-3 gap-6">
{/** Simple highlights */}
{["Performance", "Accessibility", "DX"].map((h) => (
<div key={h} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
<h3 className="font-semibold text-lg mb-2">{h}</h3>
<p className="text-gray-600 text-sm">
{h === "Performance" && "Lighthouse focused, image optimization, code‑splitting."}
{h === "Accessibility" && "Keyboard‑friendly, aria labels, semantic HTML."}
{h === "DX" && "TypeScript, ESLint, Prettier, fast refresh."}
</p>
</div>
))}
</section>
</>
);
}