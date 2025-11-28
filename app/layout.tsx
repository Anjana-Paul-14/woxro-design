import "./globals.css";

export const metadata = {
title: "Starter Project",
description: "Responsive Next.js + Tailwind Starter",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body className="min-h-screen bg-white text-gray-900">
<main className="pt-0">{children}</main>
</body>
</html>
);
}