import Link from "next/link";
import { newsData } from "../../data";

export default async function NewsDetails({ params }) {
  const { id } = await params;
  const news = newsData.find((item) => item.id === id);

  if (!news) {
    return (
      <main className="page">
        <div className="detail-container">
          <h1>Article not found</h1>
          <p>Sorry, this news article does not exist.</p>
          <Link href="/news" className="read-link">
            ← Back to news
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="page">
      <header className="topbar">
        <Link href="/" className="brand">News Portal</Link>
        <Link href="/news" className="nav-link">All News</Link>
      </header>

      <article className="detail-container">
        <Link href="/news" className="back-link">
          ← Back to news
        </Link>

        <img
          src={news.image}
          alt={news.title}
          className="detail-image"
        />

        <div className="meta">
          <span className="category">{news.category}</span>
          <span>{news.date}</span>
        </div>

        <h1>{news.title}</h1>
        <p className="detail-description">{news.description}</p>

        {news.content.split("\n").map((paragraph, index) => (
          <p className="article-content" key={index}>
            {paragraph}
          </p>
        ))}
      </article>
    </main>
  );
}
