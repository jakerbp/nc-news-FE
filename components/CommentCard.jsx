const CommentCard = ({comment}) => {

const timeFormatter = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit' });
const postedDate = new Date(comment.created_at).toLocaleDateString();
const postedTime = timeFormatter.format(new Date(comment.created_at));

    return (
    <div className="comment-card">
        
        <p>{comment.body}</p>
        <div className="comment-footer">
            <div className="comment-footer-detail">by {comment.author} at {postedTime} on {postedDate}</div>
            <div className="upvotes">{comment.votes} 👍</div>
        </div>
    </div>
    )
}

export default CommentCard