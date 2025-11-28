export default function About() {
    return (
        <section className="w-full py-20 bg-gray-100 border border-red-300">
<div className="max-w-7xl mx-auto px-4 text-center md:text-left flex flex-col md:flex-row items-center gap-10">
<div className="flex-1">
<h1 className="text-4xl md:text-6xl font-bold leading-tight">
Build Responsive UIIII Easily
</h1>
<p className="mt-4 text-lg md:text-xl text-gray-600">
Tailwind + Next.js includes everything you need to start.
</p>
<button className="mt-6 px-6 py-3 bg-black text-white rounded-lg text-lg">
Get Started
</button>
</div>


<div className="flex-1">
<img
src="/images/hero.png"
alt="hero"
className="w-full rounded-xl shadow"
/>
</div>
</div>
</section>
    )
}