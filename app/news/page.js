import Link from "next/link";
import { newsData } from "./data";

export default function NewsPage() {
  return (
    <main className="page">
      <section className="container">
        <div className="news-grid">
          {newsData.map((news) => (
            <article className="card" key={news.id}>
              <img
                src={news.image}
                alt={news.title}
                className="card-image"
              />

              <div className="card-body">
                <div className="meta">
                  <span className="category">{news.category}</span>
                  <span>{news.date}</span>
                </div>

                <h2>{news.title}</h2>
                <p>{news.description}</p>

                <Link href={`/news/newsid/${news.id}`} className="read-link">
                  Read full article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
