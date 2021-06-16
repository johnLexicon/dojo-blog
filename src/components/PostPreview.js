import { Link, useHistory } from 'react-router-dom';
import { API } from '../shared/config.js';
import { postsDataService } from '../shared/postsDataservice.js';

const PostPreview = ({ postPreview, isPreview, isRemovable }) => {
  const history = useHistory();

  const onRemove = async () => {
    const wasRemoved = await postsDataService.remove(API, postPreview._id);
    if (wasRemoved) {
      history.push('/');
    }
  };

  return (
    <div className="card mb-4">
      {isRemovable && (
        <i
          className="bi bi-x-square-fill position-absolute top-0 end-0 text-light h2"
          style={{ cursor: 'pointer' }}
          onClick={onRemove}
        ></i>
      )}
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

export default PostPreview;
