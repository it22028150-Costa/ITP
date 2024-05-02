import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdateArticleForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const articleId = window.location.pathname.split('/')[2];
    axios.get(`http://localhost:3500/api/articles/get/${articleId}`)
      .then((res) => {
        setArticle(res.data);
        setTitle(res.data.title); // Set title from fetched article
        setContent(res.data.content); // Set content from fetched article
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedArticle = { title, content };
      await axios.put(`http://localhost:3500/api/articles/update/${article._id}`, updatedArticle);
      window.location.href = '/article/dashboard'; // Redirect to the dashboard
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container mt-4"> {/* Added margin to the form */}
      <h1 className="mb-4">Update Article</h1> {/* Added margin below heading */}
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-4"> {/* Added margin bottom to form-group */}
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group mb-4"> {/* Added margin bottom to form-group */}
          <label htmlFor="content">Content</label>
          <textarea
            className="form-control"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{ height: "400px" }}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Update Article
        </button>
      </form>
    </div>
  );
};

export default UpdateArticleForm;
