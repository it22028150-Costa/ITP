let Article = require('../models/Article.js');

// Create and Save a new Article

exports.createArticle = (req, res) => {
    // Validate request
    if (!req.body.title || !req.body.content) {
        return res.status(400).send({
            message: "Article title or content can not be empty"
        });
    }

    // Create an Article
    const article = new Article({
        title: req.body.title,
        content: req.body.content
    });

    // Save Article in the database
    article.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Article."
            });
        });
};

// Retrieve and return all articles from the database.

exports.getArticles = (req, res) => {
    Article.find()
        .then(articles => {
            res.send(articles);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving articles."
            });
        });
};

// Find a single article with an articleId

exports.getArticle = (req, res) => {
    Article.findById(req.params.id)
        .then(article => {
            if (!article) {
                return res.status(404).send({
                    message: "Article not found with id " + req.params.id
                });
            }
            res.send(article);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Article not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error retrieving article with id " + req.params.id
            });
        });
};

// Update an article identified by the articleId in the request

exports.updateArticle = (req, res) => {
    // Validate Request
    if (!req.body.content) {
        return res.status(400).send({
            message: "Article content can not be empty"
        });
    }

    // Find article and update it with the request body
    Article.findByIdAndUpdate(req.params.id, {
        title: req.body.title || "Untitled Article",
        content: req.body.content
    }, { new: true })
        .then(article => {
            if (!article) {
                return res.status(404).send({
                    message: "Article not found with id " + req.params.id
                });
            }
            res.send(article);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Article not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error updating article with id " + req.params.id
            });
        });
};

// Delete an article with the specified articleId in the request

exports.deleteArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const article = await Article.findByIdAndDelete(id); // Use findByIdAndDelete instead of findByIdAndRemove
    if (!article) {
      res.status(404).json({ message: `Article with id ${id} not found` });
      return;
    }
    res.json({ message: `Article with id ${id} deleted successfully` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


