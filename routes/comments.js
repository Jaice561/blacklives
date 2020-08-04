const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');

router.get('/', commentsCtrl.index);
router.post('/', commentsCtrl.create);
router.delete('/:id', commentsCtrl.delete)
router.get('/:id', commentsCtrl.show);
router.put('/:id', commentsCtrl.update);

module.exports = router;