import { Link } from 'react-router-dom';

const PostPreview = ({ postPreview, isPreview }) => {
  return (
    <div className="card mb-4">
      <img src={postPreview.imgUrl} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{postPreview.title}</h5>
        <p className="card-text">{postPreview.body}</p>
        {isPreview && (
          <Link to={`/posts/${postPreview._id}`} className="btn btn-primary">
            Read more...
          </Link>
        )}
      </div>
    </div>
  );
};

PostPreview.defaultProps = {
  isPreview: true,
};

export default PostPreview;
