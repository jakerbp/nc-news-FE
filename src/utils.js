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

const deleteComment = (comment_id, setOptimisticDelete) => {
  return newsApi
    .delete(`/comments/${comment_id}`)
    .then(()=>{
      setTimeout(()=>{setOptimisticDelete(true)}, 2000)
    }).catch((err)=>{
      setOptimisticDelete(false)
      console.log(err)
    })
}

const fetchTopics = () => {
  return newsApi
    .get("/topics")
    .then((res) => {
      return res.data.topics;
    })
    .catch((err) => {
      console.log(err);
    });
};

export { fetchArticles, fetchArticle, fetchComments, sendComment, updateVote, deleteComment, fetchTopics };

