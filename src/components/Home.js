import { useState, useEffect } from 'react';
import { postsDataService } from '../shared/postsDataservice.js';
import BlogList from './BlogList';
import Spinner from './spinner';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const fetchPosts = async () => {
    setIsFetching(true);
    const retrievedPosts = await postsDataService.getAll();
    setPosts(retrievedPosts);
    setIsFetching(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const deletePost = async (postId) => {
    const wasRemoved = await postsDataService.remove(postId);
    if (!wasRemoved) {
      alert('Unable to remove post');
      return;
    }
    setPosts(posts.filter((p) => p._id !== postId));
  };

  return (
    <div className="container">
      <div className="m-auto d-flex flex-column align-items-center">
        <h2 className="text-center text-secondary my-4">Previews</h2>
        {isFetching ? (
          <Spinner width="5rem" height="5rem" classes="text-secondary mt-5" />
        ) : (
          <BlogList posts={posts} onDelete={deletePost} />
        )}
      </div>
    </div>
  );
};

export default Home;
