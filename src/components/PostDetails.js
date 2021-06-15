import { useParams } from 'react-router-dom';
import PostPreview from './PostPreview';
import Spinner from './spinner';
import { API } from '../shared/config.js';
import { postsDataService } from '../shared/postsDataservice.js';

const PostDetails = () => {
  const { id } = useParams();
  const {
    data: post,
    isFetching,
    error,
  } = postsDataService.useFetch(`${API}/${id}`);
  return (
    <div className="text-center">
      <h2 className="my-4 text-secondary">Post Details</h2>
      {isFetching ? (
        <Spinner width="5rem" height="5rem" classes="text-secondary mt-5" />
      ) : (
        <PostPreview postPreview={post} isPreview={false} />
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default PostDetails;
