import React, { useState } from "react";
import axios from "axios";

const AddArticleForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newArticle = { title, content };
      await axios.post('http://localhost:3500/api/articles/create', newArticle);
      setShowSuccessModal(true);
    } catch (err) {
      console.error(err);
    }
  };

  const handleOkButtonClick = () => {
    setShowSuccessModal(false);
    window.location.href = '/article/dashboard'; // Redirect to the dashboard
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Add New Article</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">Content</label>
          <textarea
            className="form-control"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{ height: "400px" }} // Set the height of the textarea
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Article
        </button>
      </form>

      {/* Bootstrap Modal for Success Message */}
      <div className={`modal fade ${showSuccessModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showSuccessModal ? 'block' : 'none' }}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Article Added Successfully</h5>
              <button type="button" className="btn-close" onClick={() => setShowSuccessModal(false)} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Your article has been added successfully.
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={handleOkButtonClick}>OK</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddArticleForm;
