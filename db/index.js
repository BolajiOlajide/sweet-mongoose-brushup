const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017/something';

const mongoOpts = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
};
mongoose.connect(url, mongoOpts);
mongoose.set('useCreateIndex', true);

const db = mongoose.connection;

db.once('open', _ => console.log('Database connected:', url));
db.on('error', err => console.error('connection error:', err));

module.exports = mongoose;
