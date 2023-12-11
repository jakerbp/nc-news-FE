import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Article = () => {
    const {article_id} = useParams()
    const [article, setArticle] = useState([])
    useEffect(() => {
        axios.get(`https://newssite-zy4v.onrender.com/api/articles/${article_id}`).then((res) => {
          setArticle(res.data.article);
        });
      }, []);

  return (
    <>
      <h2 className="article-title">{article.title}</h2>
      <img src={article.article_img_url} />
      <p>{article.body}</p>
    </>
  );
};

export default Article;
