import { useContext, useState } from "react";
import { UserContext } from "../contexts/User";
import { deleteComment } from "../utils";

const CommentCard = ({ comment }) => {
  const { user } = useContext(UserContext);
  const [pendingDelete, setPendingDelete] = useState(false);
  const [classSwitch, setClassSwitch] = useState('comment-card')
  const [optimisticDelete, setOptimisticDelete] = useState(false)
  const [deleteText, setDeleteText] = useState('Delete')

  const timeFormatter = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const postedDate = new Date(comment.created_at).toLocaleDateString();
  const postedTime = timeFormatter.format(new Date(comment.created_at));

  return (
    <div className={classSwitch} hidden={optimisticDelete}>
      <p>{comment.body}</p>
      <div className="comment-footer">
        <div className="comment-footer-detail">
          by {comment.author} at {postedTime} on {postedDate}
        </div>
        <div className="comment-btns">
          <button
            className="delete-comment"
            hidden={user !== comment.author}
            onClick={() => {
              deleteComment(comment.comment_id, setOptimisticDelete, setPendingDelete, setClassSwitch, setDeleteText);
              setPendingDelete(true);
              setClassSwitch('deleting')
              setDeleteText('Deleting...')
            }}
            disabled={pendingDelete}
          >
            {" "}
            {deleteText}
          </button>
          <div className="upvotes">{comment.votes} 👍</div>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
