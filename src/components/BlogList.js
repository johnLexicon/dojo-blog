import PostPreview from './PostPreview';

const BlogList = ({ posts, onDelete }) => {
  function PostPreviews() {
    return posts.map((post) => (
      <PostPreview
        postPreview={{ ...post, body: post.body.slice(0, 200) + '...' }}
        onDelete={onDelete}
        isPreview={true}
        key={post._id}
      />
    ));
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <PostPreviews />
    </div>
  );
};

export default BlogList;
