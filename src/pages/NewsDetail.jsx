import { useParams, Link } from "react-router-dom";
import { news } from "../data/news";
import Footer from "../components/Footer";
import "./NewsDetail.css";

function NewsDetail() {
  const { slug } = useParams();
  console.log(slug);
  console.log(news);
  const article = news.find((item) => item.slug === slug);

  if (!article) {
    return (
      <>
        <div className="news-detail-page">
          <div className="news-detail-container">
            <p className="news-detail-back">
              <Link to="/news">← Back to News</Link>
            </p>
            <h1 className="news-detail-title">Article not found</h1>
            <p className="news-detail-date">
              The news article you are looking for does not exist.
            </p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const paragraphs = article.text
    .trim()
    .split("\n")
    .map((paragraph) => paragraph.trim())
    .filter((paragraph) => paragraph.length > 0);

  return (
    <>
      <div className="news-detail-page">
        <div className="news-detail-container">
          <p className="news-detail-back">
            <Link to="/news">← Back to News</Link>
          </p>

          <p className="news-detail-date">{article.date}</p>

          <h1 className="news-detail-title">{article.title}</h1>

          {article.image && (
            <div className="news-detail-image">
              <img src={article.image} alt={article.title} />
            </div>
          )}

          <div className="news-detail-text">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {article.image2 && (
            <div className="news-detail-image secondary">
              <img src={article.image2} alt={`${article.title} secondary`} />
            </div>
          )}

          {article.image3 && (
            <div className="news-detail-image secondary">
              <img src={article.image3} alt={`${article.title} tertiary`} />
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default NewsDetail;