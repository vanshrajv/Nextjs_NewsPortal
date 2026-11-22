import "./globals.css";

export const metadata = {
  title: "News Portal",
  description: "A simple Next.js news portal demo"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
