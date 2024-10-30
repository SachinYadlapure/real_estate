const mongoose = require('mongoose');

const SellerSchema = new mongoose.Schema({
  sellerid: String,
  sellername: String,
  sellerphno: Number,
  selleremail: String,
  selleraddress: String,
  landarea: String,
  landaddress: String,
  landcost: String,
  producttype:String,
  imgurl:String

});

module.exports = mongoose.model('Seller',SellerSchema);