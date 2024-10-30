const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const signupRouter = require('./Routers/Signuproute');
const loginRouter = require('./Routers/Loginroute');
const emailRouter=require('./Routers/Emailroute');
const Sell=require('./Routers/sellerroute')
const app = express();
app.use(bodyParser.json());
app.use(cors());

const MONGO_URI ="mongodb+srv://bindhu:bindhu@cluster0.qisn3.mongodb.net/realestate?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongodb connection error'));

app.get('/', (req, res) => {
  res.send('Hello world');
});


app.use('/api/signup', signupRouter);
app.use('/api/login',loginRouter );
app.use('/api/email',emailRouter)
app.use('/api/seller',Sell);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});



