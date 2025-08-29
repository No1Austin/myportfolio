// FILE: app/layout.tsx
import "../styles/globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const inter = Inter({ subsets: ["latin"] });


export const metadata = {
title: "Austin Amadi — Portfolio",
description: "Portfolio website showcasing projects, skills, and contact info.",
openGraph: {
title: "Austin Amadi — Portfolio",
description: "Projects, skills, and contact.",
type: "website",
},
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
// Keep layout 100% static to avoid hydration mismatches
return (
<html lang="en">
<body className={`${inter.className}`}>
<Navbar />
<main className="container py-12">{children}</main>
<Footer />
</body>
</html>
);
}