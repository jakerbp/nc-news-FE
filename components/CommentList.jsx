import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import { fetchComments } from "../src/utils";
import PostComment from "./PostComment";

const CommentList = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [loadingComments, setLoadingComments] = useState(true);

  useEffect(() => {
    fetchComments({ article_id }).then((articleComments) => {
      setComments(articleComments);
      setLoadingComments(false);
    });
  }, []);

  if (loadingComments) return <h2 className="loading">LOADING...</h2>;
  if (!comments.length) return <><PostComment/><h3 className="loading">No comments yet...</h3></>;

  return (
    <section className="comment-section">
      <PostComment/>
      {comments.map((comment) => {
        return <CommentCard comment={comment} key={comment.comment_id} />;
      })}
    </section>
  );
};

export default CommentList;
