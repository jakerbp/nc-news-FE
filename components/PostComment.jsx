const PostComment = () => {

return (<>
<form className="post-comment-form">
<label htmlFor="post-comment"> Post a comment: </label>
<input className="post-comment-input" id="post-comment"></input>

<button className="post-comment-btn">POST</button>
</form>
</>)
}

export default PostComment