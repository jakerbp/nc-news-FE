import { useState, useContext } from "react";
import { UserContext } from "../contexts/User";
import { sendComment } from "../utils";

const PostComment = ({ article_id, setComments, setHideError }) => {
  const [commentMsg, setCommentMsg] = useState("");
  const { user } = useContext(UserContext);
  const [pendingSend, setPendingSend] = useState(false)
  const [lengthError, setLengthError] = useState(true)

  return (
    <>
      <form
        className="post-comment-form"
        onSubmit={(e) => {
          e.preventDefault();
          if (commentMsg.length>=5) {
            setCommentMsg('')
            setLengthError(true)
            sendComment(article_id, user, commentMsg, setComments, setHideError, setPendingSend);
            setPendingSend(true)
          } else {
setLengthError(false)
          }
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
        <p className="loading" hidden={lengthError}>Comment must be at least 5 characters in length to post!</p>
    </>
  );
};

export default PostComment;
