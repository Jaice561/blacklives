const express = require('express');
const router = express.Router();
const likesCtrl = require('../controllers/likes');

router.use(require('../config/auth'));
router.get('/', likesCtrl.index);
router.post('/', checkAuth, likesCtrl.create);
router.delete('/:id', checkAuth, likesCtrl.delete)
router.get('/:id', checkAuth, likesCtrl.show);
router.put('/:id', checkAuth, likesCtrl.update);

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;