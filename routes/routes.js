const express = require('express');
var router = express.Router();
const BookController = require('../controller/book.controller');




router.get('/', async (req, res) => {
	try {
		var response = await BookController.get_all_book();
		res.send(response);
	} catch(err) {
		res.send(err);
	}
})

router.get('/:id', BookController.get_id_book);

router.post('/',BookController.create_book);

router.put('/:id', BookController.update_book);

router.delete('/:id', BookController.delete_book);

module.exports = router;