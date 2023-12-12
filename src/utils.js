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

const patchVote = (article_id) => {
    return newsApi
    .patch(`/articles/${article_id}`,{inc_votes:1})
}

const updateVote = (value, voteCount, setVoteCount, article_id, setDisabled, setHideVoteFail) => {
    let updatedVoteCount = voteCount + value
    setVoteCount(updatedVoteCount);
    patchVote(article_id)
      .then(() => {
        setDisabled(true)
        setHideVoteFail(true)
      })
      .catch((err) => {
        setVoteCount(updatedVoteCount - value);
        setDisabled(false)
        setHideVoteFail(false)
      });
  }


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

export { fetchArticles, fetchArticle, fetchComments };

