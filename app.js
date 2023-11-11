// const mongoose = require('mongoose');

// const main = async () => {
// 	await mongoose.connect('mongodb://localhost:27017/e-commerce');
// 	const ProductSchema = new mongoose.Schema({
// 		name: String,
// 		price: Number,
// 		brand: String,
// 		category: String,
// 	});
// 	const ProductsModel = mongoose.model('products', ProductSchema);
// 	let data = new ProductsModel({
// 		name: 'note12',
// 		price: 3000,
// 		brand: 'high-paid',
// 		category: 'mobile',
// 	});
// 	let result = await data.save();
// 	console.log(result);
// };
// const saveInDB = async () => {
// 	const Product = mongoose.model('products', productSchema);
// 	let data = new Product({
// 		name: 'max 100',
// 		price: 200,
// 		brand: 'maxx',
// 		category: 'Mobile',
// 	});
// 	const result = await data.save();
// 	console.log(result);
// };

// const updateInDB = async () => {
// 	const Product = mongoose.model('products', productSchema);
// 	let data = await Product.updateOne(
// 		{ name: 'max 6' },
// 		{
// 			$set: { price: 550, name: 'max pro 6' },
// 		}
// 	);
// 	console.log(data);
// };

// const deleteInDB = async () => {
// 	const Product = mongoose.model('products', productSchema);
// 	let data = await Product.deleteOne({ name: 'max 100' });
// 	console.log(data);
// };
// const findInDB = async () => {
// 	const Product = mongoose.model('products', productSchema);
// 	let data = await Product.find({ name: 'max pro 611' });
// 	console.log(data);
// };

// findInDB();

// main();

const express = require('express');
require('./config');
const Product = require('./product');
const app = express();

app.use(express.json());
// app.post('/create', async (req, resp) => {
// 	let data = new Product(req.body);
// 	const result = await data.save();
// 	resp.send(result);
// });

// app.get('/list', async (req, resp) => {
// 	let data = await Product.find();
// 	resp.send(data);
// });

// app.delete('/delete/:_id', async (req, resp) => {
// 	console.log(req.params);
// 	let data = await Product.deleteOne(req.params);
// 	resp.send(data);
// });

// app.put('/update/:_id', async (req, resp) => {
// 	console.log(req.params);
// 	let data = await Product.updateOne(req.params, { $set: req.body });
// 	resp.send(data);
// });

//   search by single and multiple

app.get('/search/:key', async (req, resp) => {
	let data = await Product.find({
		$or: [
			{ name: { $regex: req.params.key } },
			{ brand: { $regex: req.params.key } },
		],
	});
	resp.send(data);
});
app.listen(5000);
