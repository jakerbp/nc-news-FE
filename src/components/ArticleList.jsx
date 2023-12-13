import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import {fetchArticles} from "../utils";


const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchArticles().then((articlesData) => {
      setArticles(articlesData);
      setLoading(false)
    });
  }, []);

  if(loading) return <h2 className="loading">LOADING...</h2> 

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