import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  const postedDate = new Date(article.created_at).toLocaleString();

  return (
    <li className="article-card">
      <Link to={`/articles/${article.article_id}`}>
        <h3>{article.title}</h3>
      </Link>
      <p className="topic-name">{article.topic}</p>
      <Link to={`/articles/${article.article_id}`}>
        <img className="img-placeholder" src={article.article_img_url} />
      </Link>
      <p className="date-posted">{postedDate}</p>
      <p className="username">by {article.author}</p>
      <div className="vote-comments">
        <p className="vote-count">{article.votes} Votes</p>
        <p className="comment-count">{article.comment_count} Comments</p>
      </div>
    </li>
  );
};

export default ArticleCard;
