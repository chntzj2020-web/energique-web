import { Link } from "react-router-dom";

function NewsCard({ item }) {
  return (
    <Link to={`/news/${item.id}`} className="news-card">
      <h3>{item.title}</h3>
      <p className="date">{item.date}</p>
      <p>{item.summary}</p>
    </Link>
  );
}

export default NewsCard;