const express = require('express');
const router = express.Router();
const blacklivesCtrl = require('../controllers/blacklives');

router.get('/', blacklivesCtrl.index);
router.post('/', blacklivesCtrl.create);
router.delete('/:id', blacklivesCtrl.delete)
router.get('/:id', blacklivesCtrl.show);
router.put('/:id', blacklivesCtrl.update);

module.exports = router;
