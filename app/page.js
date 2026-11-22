import Link from "next/link";

export default function Home() {
  return (
    <main className="home">
      <div className="hero-content">
        <span className="eyebrow">YOUR DAILY NEWS</span>
        <h1>News Portal</h1>
        <p>
          Stay informed with stories about technology, sports,
          education, science and business.
        </p>
        <Link href="/news" className="button">
          Explore Latest News →
        </Link>
      </div>
    </main>
  );
}
