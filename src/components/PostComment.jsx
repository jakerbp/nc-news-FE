import { useState, useContext } from "react";
import { UserContext } from "../contexts/User";
import { sendComment } from "../utils";

const PostComment = ({ article_id, setComments, setHideError }) => {
  const [commentMsg, setCommentMsg] = useState("");
  const { user } = useContext(UserContext);
  const [pendingSend, setPendingSend] = useState(false)

  return (
    <>
      <form
        className="post-comment-form"
        onSubmit={(e) => {
            setCommentMsg('')
          e.preventDefault();
          sendComment(article_id, user, commentMsg, setComments, setHideError, setPendingSend);
          setPendingSend(true)
        }}
      >
        <label htmlFor="commentInput"> Post a comment: </label>
        <textarea
          onChange={() => {
            setCommentMsg(commentInput.value);
          }}
          value={commentMsg}
          className="post-comment-input"
          id="commentInput"
          placeholder="Type a comment..."
        ></textarea>
        <button className="post-comment-btn" disabled={pendingSend}> 
          Post
        </button>
      </form>
    </>
  );
};

export default PostComment;
