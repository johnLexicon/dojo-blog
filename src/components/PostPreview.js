const PostPreview = ({ postPreview, onDelete }) => {
  return (
    <div className="card w-75 mb-4">
      <img src={postPreview.imgUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{postPreview.title}</h5>
        <p className="card-text">{postPreview.body}</p>
        <button
          onClick={() => {
            onDelete(postPreview._id);
          }}
          className="btn btn-primary"
        >
          Read more...
        </button>
      </div>
    </div>
  );
};

export default PostPreview;
