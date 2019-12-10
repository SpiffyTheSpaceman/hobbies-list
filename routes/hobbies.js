var express = require('express');
var router = express.Router();
var hobbiesCtrl = require('../controllers/hobbies');

/* GET view page */
router.get('/:id', hobbiesCtrl.show);

router.post('/', hobbiesCtrl.create);

router.delete('/:id', hobbiesCtrl.delete);

router.put('/:id', hobbiesCtrl.update);

module.exports = router;
