require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const noteRouter = require('./routes/noteRouter');
const path =  require('path')

const app = express();
app.use(express.json());
app.use(cors());

//routes
app.use('/api/notes', noteRouter);

//connect to MongoDB
const URI = process.env.MONGODB_URL;
mongoose.connect(
  URI,
  {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  (err) => {
    if (err) throw err;
    console.log('Connected to MongoDB');
  }
);

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'))
  app.use('*', (req,res) =>{
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
  })
}

//Listen to server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log('Server is Running on PORT:-', PORT);
});
