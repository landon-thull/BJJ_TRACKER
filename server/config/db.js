const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.log(err);
});

module.exports = connectDB;