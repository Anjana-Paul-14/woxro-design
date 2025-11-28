"use client";
import { useState } from "react";


export default function Navbar() {
const [open, setOpen] = useState(false);


return (
<nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
<div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
<h1 className="text-xl font-bold">Logo</h1>


<button
className="md:hidden text-2xl"
onClick={() => setOpen(!open)}
>
☰
</button>


<ul className="hidden md:flex gap-6 text-lg">
<li>Home</li>
<li>About</li>
<li>Services</li>
<li>Contact</li>
</ul>
</div>


{/* Mobile Menu */}
{open && (
<ul className="md:hidden bg-white px-4 pb-4 space-y-3 text-lg shadow">
<li>Home</li>
<li>About</li>
<li>Services</li>
<li>Contact</li>
</ul>
)}
</nav>
);
}