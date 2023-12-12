import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchArticle, updateVote } from "../src/utils";

const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [voteCount, setVoteCount] = useState(0);
  const [disabled, setDisabled] = useState(false)
  const [hideVoteFail, setHideVoteFail] = useState(true)

  useEffect(() => {
    fetchArticle({ article_id }).then((articlesData) => {
      setArticle(articlesData);
      setVoteCount(articlesData.votes);
      setLoading(false);
    });
  }, []);

  const postedDate = new Date(article.created_at).toLocaleString();

  if (loading) return <h2 className="loading">LOADING...</h2>;

  return (
    <article className="article-section">
      <div>
        <h2 className="article-title">{article.title}</h2>
        <img src={article.article_img_url} className="article-img" />
        <p className="article-body">{article.body}</p>
      </div>
      <div className="vote-comments-article">
        <p className="date-posted">{postedDate}</p>
        <p className="username">by {article.author}</p>
        <p className="vote-count">
          {voteCount} Votes{" "}
          <button
            className="vote-button"
            disabled={disabled}
            onClick={() => {
              updateVote(1, voteCount, setVoteCount, article_id, setDisabled, setHideVoteFail);
            }}
          >
            👍
          </button>
        </p>
        <p className="comment-count">{article.comment_count} Comments</p>
      </div>
      <h3 className="loading" hidden={hideVoteFail}>Vote failed</h3>
    </article>
  );
};

export default Article;
