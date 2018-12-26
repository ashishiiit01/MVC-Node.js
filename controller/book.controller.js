const Book = require('../models/book.model');

//Get all Books
exports.get_all_book = function (){
	return new Promise((resolve, reject) => {
		Book.find().then(result => {
			resolve(result);
		}).catch(err => {
			reject(err);
		});
	})
}

//Gets Particular Book
exports.get_id_book = function(req, res){
	Book.findOne({_id: req.params.id}, function(err, book){
		console.log("book: ", book);
		res.send(book);
	});
}

//insert new book
exports.create_book = function(req, res){
	var data = req.body;
	console.log(data);
	var _book = new Book(data);
	_book.save((err, book) => {
		res.send(book);
	});
}

//update existing book
exports.update_book = function(req, res){
  
  Book.findByIdAndUpdate(req.params.id,
    { 
      title: req.body.title,
      author: req.body.author,
      category: req.body.category
    }, {upsert : true, new  : true}, function(err, book){
    	console.log("book: ", book);
		res.send(book);
	});
}

//Delete Existing Book
exports.delete_book = function(req, res){
    Book.findByIdAndRemove(req.params.id, function(err, book){
    	console.log("book: ", book);
		res.send(book);
    });
}