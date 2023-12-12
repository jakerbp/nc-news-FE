import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CommentList from "./CommentList";

const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    axios
      .get(`https://newssite-zy4v.onrender.com/api/articles/${article_id}`)
      .then((res) => {
        setArticle(res.data.article);
        setLoading(false);
      });
  }, []);
  const postedDate = new Date(article.created_at).toLocaleString();


  if (loading) return <h2 className="loading">LOADING...</h2>;

  return (
    <article className="article-section">
      <div>
        <h2 className="article-title">{article.title}</h2>
        <img src={article.article_img_url} className="article-img" alt={article.title}/>
        <p className="article-body">{article.body}</p>
      </div>
      <div className="vote-comments-article">
        <p className="date-posted">{postedDate}</p>
        <p className="username">by {article.author}</p>
        <p className="vote-count">{article.votes} Votes</p>
        <p className="comment-count">{article.comment_count} Comments</p>
      </div>
      <h3 className="comment-title">Comments:</h3>
      <CommentList article_id={article_id}/>
    </article>
  );
};

export default Article;
