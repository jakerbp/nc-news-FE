import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://newssite-zy4v.onrender.com/api/",
});

const fetchArticles = () => {
  return newsApi
    .get("/articles")
    .then((res) => {
      return res.data.articles;
    })
    .catch((err) => {
      console.log(err);
    });
};

const fetchArticle = ({ article_id }) => {
  return newsApi
    .get(`/articles/${article_id}`)
    .then((res) => {
      return res.data.article;
    })
    .catch((err) => {
      console.log(err);
    });
};

export { fetchArticles, fetchArticle };
