import { useEffect, useState } from "react";
import axios from "axios";
import CommentCard from "./CommentCard";

const CommentList = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [loadingComments, setLoadingComments] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://newssite-zy4v.onrender.com/api/articles/${article_id}/comments`
      )
      .then((res) => {
        setComments(res.data.articleComments);
        setLoadingComments(false);
      });
  }, []);

  if (loadingComments) return <h2 className="loading">LOADING...</h2>;

  return <section className="comment-section">
   
    {comments.map((comment)=>{
        return <CommentCard comment={comment} key={comment.comment_id}/>
    })}
    </section >;
};

export default CommentList;
