import { news } from "../data/news";
import NewsCard from "../components/NewsCard";
import "./News.css";

function News() {
  return (
    <div className="news-page">
      <h1>Energiue's News</h1>

      <div className="news-grid">
        {news.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default News;