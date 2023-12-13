import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import { fetchComments } from "../utils";
import PostComment from "./PostComment";


const CommentList = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [loadingComments, setLoadingComments] = useState(true);
  const [hideError, setHideError] = useState(true)

  useEffect(() => {
    fetchComments({ article_id }).then((articleComments) => {
      setComments(articleComments);
      setLoadingComments(false);
    });
  }, []);

  if (loadingComments) return <h2 className="loading">LOADING...</h2>;

  return (
    <section className="comment-section">
      <PostComment article_id={article_id} setComments={setComments} setHideError={setHideError}/>
      <h3 className="loading" hidden={comments.length!==0}>
        No comments yet...
      </h3>
      <h3 className="loading" hidden={hideError}>
        Comment failed to post!
      </h3>
      {comments.map((comment) => {
        return <CommentCard comment={comment} key={comment.comment_id} />;
      })}
    </section>
  );
};

export default CommentList;
