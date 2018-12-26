var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Defining Schema Book
var BookSchema = new Schema({

title: String,
author: String,
category: String

});

module.exports = mongoose.model('Book', BookSchema);


/**
 ** @author: Anupam Saha
 *
 ** @date: 19/12/18 
 *
 *  @title: Holds the title of Book.
 *  @author: Holds the author of the above book.
 *  @category: Holds the category of above book.
 * 
 **/