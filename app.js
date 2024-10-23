const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const movieRoutes = require('./routes/movieRoutes');

const app = express();
app.use(express.static('public'));



const mongoDBUri = 'mongodb+srv://renilbhai1983:movie123@cluster0.uqyexua.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoDBUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB:', err));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(movieRoutes);

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(5050, () => {
  console.log('Server is running on port 5050');
});
