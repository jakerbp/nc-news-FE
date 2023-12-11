import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import axios from "axios";


const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get("https://newssite-zy4v.onrender.com/api/articles").then((res) => {
      setArticles(res.data.articles);
    });
  }, []);

  return (
    <div id="article-list-section">
      <ol id="article-list">
        {articles.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />
          
        })}
      </ol>
    </div>
  );
};

export default ArticleList;
