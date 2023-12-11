const ArticleCard = ({ article }) => {
  const postedDate = new Date(article.created_at).toLocaleString();

  return (
    <li id="article-card">
      <h3>{article.title}</h3>
      <p className="topic-name">{article.topic}</p>
      <img className="img-placeholder" src={article.article_img_url} />
      <p className="date-posted">{postedDate}</p>
      <p className="username">by {article.author}</p>
      <div className="vote-comments">
        <a className="vote-count" href="#">
          {article.votes} Votes
        </a>
        <a className="comment-count" href="#">
          {article.comment_count} Comments
        </a>
      </div>
    </li>
  );
};

export default ArticleCard;
