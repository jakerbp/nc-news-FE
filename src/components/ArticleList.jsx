import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { fetchArticles } from "../utils";
import { useSearchParams } from "react-router-dom";
import TopicList from "./TopicList";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const filterTopic = searchParams.get("topic");

  useEffect(() => {
    fetchArticles().then((articlesData) => {
      setArticles(articlesData);
      setLoading(false);
    });
  }, []);

  if (loading) return <h2 className="loading">LOADING...</h2>;

  return (
    <>
      <TopicList/>
      <div id="article-list-section">
        <ol id="article-list">
          {articles.map((article) => {
            if (!filterTopic) {
              return <ArticleCard article={article} key={article.article_id} />;
            } else if (article.topic === filterTopic) {
              return <ArticleCard article={article} key={article.article_id} />;
            }
          })}
        </ol>
      </div>
    </>
  );
};

export default ArticleList;
