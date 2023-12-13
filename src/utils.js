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

const fetchComments = ({ article_id }) => {
  return newsApi
    .get(`articles/${article_id}/comments`)
    .then((res) => {
      return res.data.articleComments;
    })
    .catch((err) => {
      console.log(err);
    });
};

const sendComment = (article_id, user, commentMsg, setComments, setHideError, setPendingSend) => {
  const commentData = {
    username: user,
    body: commentMsg,
  };

  return newsApi
    .post(`/articles/${article_id}/comments`, commentData)
    .then(({ data }) => {
      setComments((currentComments) => [data.addedComment, ...currentComments]);
      setHideError(true)
      setPendingSend(false)
    }).catch((err)=>{
        setHideError(false)
    });
};

export { fetchArticles, fetchArticle, fetchComments, sendComment };
