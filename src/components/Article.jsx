import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchArticle, updateVote } from "../utils";
import CommentList from "./CommentList";
import Errors from "./Errors";

const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [voteCount, setVoteCount] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [hideVoteFail, setHideVoteFail] = useState(true);
  const [error, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)

  useEffect(() => {
    fetchArticle({ article_id }).then((articlesData) => {
      if (articlesData.name === "AxiosError") {
        setLoading(false);
        setError(true)
        setErrorMsg(articlesData.response.data.msg)
      } else {
        setArticle(articlesData);
        setVoteCount(articlesData.votes);
        setLoading(false);
        setError(false)
        setErrorMsg(null)
      }
    });
  }, []);

  const postedDate = new Date(article.created_at).toLocaleString();

  if (loading) return <h2 className="loading">LOADING...</h2>;
  if (error) return <Errors msg={errorMsg}/>
  return (
    <article className="article-section">
      <div>
        <h2 className="article-title">{article.title}</h2>
        <img
          src={article.article_img_url}
          className="article-img"
          alt={article.title}
        />
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
              updateVote(
                1,
                voteCount,
                setVoteCount,
                article_id,
                setDisabled,
                setHideVoteFail
              );
            }}
          >
            👍
          </button>
        </p>
        <p className="comment-count">{article.comment_count} Comments</p>
      </div>
      <h3 className="loading" hidden={hideVoteFail}>
        Vote failed
      </h3>
      <h3 className="comment-title">Comments:</h3>
      <CommentList article_id={article_id} />
    </article>
  );
};

export default Article;
