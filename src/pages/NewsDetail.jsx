import { useParams } from "react-router-dom";
import { news } from "../data/news";

function NewsDetail() {
  const { id } = useParams();

  const article = news.find((n) => n.id === Number(id));

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div style={{ padding: "80px", maxWidth: "800px", margin: "auto" }}>
      <h1>{article.title}</h1>
      <p>{article.date}</p>
      <p>{article.content}</p>
    </div>
  );
}

export default NewsDetail;