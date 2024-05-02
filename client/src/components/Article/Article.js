import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Article = () => {
  const { id } = useParams(); // Get the article ID from the URL params
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`http://localhost:3500/api/articles/get/${id}`);
        setArticle(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchArticle();
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1 className="mt-3">{article.title}</h1>
      <div className="mt-3">{article.content}</div>
    </div>
  );
};

export default Article;
