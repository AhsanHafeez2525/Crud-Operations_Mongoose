const mongoose = require('mongoose');

const main = async () => {
	await mongoose.connect('mongodb://localhost:27017/e-commerce');
	const ProductSchema = new mongoose.Schema({
		name: String,
		price: Number,
		brand: String,
		category: String,
	});
	const ProductsModel = mongoose.model('products', ProductSchema);
	let data = new ProductsModel({
		name: 'note12',
		price: 3000,
		brand: 'high-paid',
		category: 'mobile',
	});
	let result = await data.save();
	console.log(result);
};

main();
