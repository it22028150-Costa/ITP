import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const ArticleList = () => {
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

  return (
    <div className="container">
      <h1 className="text-center mb-5">Article</h1>
      <div className="row">
        {filteredArticles.map(article => (
          <div className="col-md-4 mb-4" key={article._id}>
            <div className="card">
              {/* <img src={article.imageURL} className="card-img-top" alt={article.title} /> */}
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.content.substring(0, 100)}...</p>
                {/* Use Link component from react-router-dom */}
                <Link to={`/article/article/${article._id}`} className="btn btn-primary">Read More</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
