import PostPreview from './PostPreview';

const BlogList = ({ posts, onDelete }) => {
  function PostPreviews() {
    return posts.map((post) => (
      <PostPreview postPreview={post} onDelete={onDelete} key={post._id} />
    ));
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <PostPreviews />
    </div>
  );
};

export default BlogList;
