import { useState, useEffect } from 'react';
import PostPreview from './PostPreview';

const CreatePost = () => {
  const [post, setPost] = useState({ title: '', body: '', imgUrl: '' });
  const [isValid, setIsValid] = useState(false);

  const validatePost = () => {
    if (post.title && post.body && post.body.length >= 50) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  useEffect(() => {
    validatePost();
  });

  const onCreatePost = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2 className="text-secondary my-4">Create Post</h2>
      <form className="border border-light mb-5" onSubmit={onCreatePost}>
        <div className="form-group mb-4">
          <label className="fw-bold fs-5 text-muted" htmlFor="title">
            Title
          </label>
          <input
            required
            type="text"
            id="title"
            className="form-control rounded-2"
            placeholder="Title..."
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
          />
          <span className="small text-muted">Required</span>
        </div>
        <div className="form-group mb-5">
          <label className="fw-bold fs-5 text-muted" htmlFor="imageUrl">
            Image Url
          </label>
          <input
            type="text"
            id="imageUrl"
            className="form-control rounded-2"
            placeholder="Image Url"
            value={post.imgUrl}
            onChange={(e) => {
              setPost({ ...post, imgUrl: e.target.value });
            }}
          />
        </div>

        <div className="form-group mb-5">
          <label className="fw-bold fs-5 text-muted" htmlFor="content">
            Content
          </label>
          <textarea
            required
            className="form-control rounded-2"
            id="content"
            rows="3"
            placeholder="Blog Content..."
            value={post.body}
            onChange={(e) => {
              setPost({ ...post, body: e.target.value });
            }}
          ></textarea>
          <span className="small text-muted">
            Required, at least 50 characters
          </span>
        </div>

        <button
          disabled={!isValid}
          className="btn btn-danger btn-block"
          type="submit"
        >
          Send
        </button>
      </form>
      <h2 className="text-secondary">Preview Post</h2>
      <PostPreview postPreview={post} isPreview={false} />
    </div>
  );
};

export default CreatePost;
