import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import fetchArticles from "../src/utils";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles().then((articlesData) => {
      setArticles(articlesData);
    });
  }, []);

  return (
    <div id="article-list-section">
      <ol id="article-list">
        {articles.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </ol>
    </div>
  );
};

export default ArticleList;
