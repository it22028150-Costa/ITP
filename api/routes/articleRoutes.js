const express = require('express');
const { createArticle, getArticles, getArticle, updateArticle, deleteArticle } = require('../controllers/articleController');
const router = express.Router();

router.post('/create', createArticle);
router.get('/get', getArticles);
router.get('/get/:id', getArticle);
router.put('/update/:id', updateArticle);
router.delete('/delete/:id', deleteArticle);

module.exports = router;