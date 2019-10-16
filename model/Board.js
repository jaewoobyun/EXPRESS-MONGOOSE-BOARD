const mongoose = require('mongoose');

//1. Set Schema
const boardSchema = new mongoose.Schema({
	title      : { type: String, required: true },
	content    : { type: String, required: true },
	author     : String,
	created_at : { type: Date, default: Date.now },
	comments   : [
		//Array
		{
			content : String,
			date    : { type: Date, default: Date.now }
		}
	]
});

//2. Model
const Board = mongoose.model('Board', boardSchema);

module.exports = Board;
