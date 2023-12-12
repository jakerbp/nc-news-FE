import axios from "axios";

const newsApi = axios.create({
    baseURL:'https://newssite-zy4v.onrender.com/api/'
})

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

export default fetchArticles;
