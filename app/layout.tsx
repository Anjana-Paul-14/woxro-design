import "./globals.css";

export const metadata = {
  title: "Symphonia - Digital First",
  description: "Interactive 3D Cube Animation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
