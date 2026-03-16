import { Link } from "react-router-dom";
import { news } from "../data/news";
import Footer from "../components/Footer";
import "./News.css";

function News() {

  const sortedNews = [...news].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <>
      <div className="news-page">
        <h1 className="news-title">News</h1>

        <div className="news-grid">
          {sortedNews.map((item) => (
            <Link
              to={`/news/${item.slug}`}
              className="news-card"
              key={item.id}
            >
              <div className="news-image">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="news-content">
                <p className="news-date">{item.date}</p>

                <h2 className="news-card-title">
                  {item.title}
                </h2>

                <p className="news-summary">
                  {item.conclusion}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default News;