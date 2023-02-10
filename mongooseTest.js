const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopDB');

const product = mongoose.model('Product', { name: String , price : Number, stock: Number });
console.log(product)
const kitty = new product({ name: 'Zildjian' , price:20  });
kitty.save().then(() => console.log('meow'));

let data =   product.find({}).then((value)=>console.log(value))


