import React, { useState, useEffect } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";

const Dashboard = () => {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://localhost:3500/api/articles/get');
        setArticles(response.data);
        setFilteredArticles(response.data); // Initialize filteredArticles with all articles
      } catch (err) {
        console.error(err);
      }
    };

    fetchArticles();
  }, []);

  const deleteArticle = async (id) => {
    try {
      await axios.delete(`http://localhost:3500/api/articles/delete/${id}`);
      setArticles(articles.filter(article => article._id !== id)); 
      setFilteredArticles(filteredArticles.filter(article => article._id !== id)); 
    } catch (err) {
      console.error(err);
    }
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = articles.filter(article =>
      article.title.toLowerCase().includes(term) || article.content.toLowerCase().includes(term)
    );
    setFilteredArticles(filtered);
  };

  const handleGenerateReport = async () => {
    try {
      const doc = new jsPDF();
      doc.autoTable({
        head: [["Title", "Content"]],
        body: filteredArticles.map(article => [article.title, article.content]),
      });
      doc.save("report.pdf");
    } catch (err) {
      console.error(err);
    }
  };

  const truncateContent = (content, maxLength) => {
    if (content.length <= maxLength) {
      return content;
    }
    return content.substring(0, maxLength) + '...';
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 text-center mb-4">
          <h1>Dashboard</h1>
        </div>
        <div className="col-12 text-center mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="col-12 text-center mb-3">
          <button
            className="btn btn-success"
            onClick={() => {
              window.location.href = '/article/add'
            }}
          >
            Add Article
          </button>
          <button
            className="btn btn-primary ms-3"
            onClick={handleGenerateReport}
          >
            Generate Report
          </button>
        </div>
      </div>

      <div className="table-responsive mt-4">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Title</th>
              <th>Content</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredArticles.map((article) => (
              <tr key={article._id}>
                <td>{article.title}</td>
                <td>{truncateContent(article.content, 50)}</td>
                <td>
                  <button
                    className="btn btn-warning me-2"
                    onClick={() => {
                      window.location.href = `/article/update/${article._id}`
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteArticle(article._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
