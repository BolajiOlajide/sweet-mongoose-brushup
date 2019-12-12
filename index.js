const mongoose = require('mongoose');

const { Character } = require('./models');


const url = 'mongodb://127.0.0.1:27017/something';

const mongoOpts = {
  useUnifiedTopology: true,
  useNewUrlParser: true
}
mongoose.connect(url, mongoOpts);

const db = mongoose.connection;

db.once('open', _ => console.log('Database connected:', url));
db.on('error', err => console.error('connection error:', err));
