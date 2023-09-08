const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const postRoute = require('./Routes/api');
const cors  = require('cors');

app.use(cors());

mongoose.connect('mongodb://localhost:27017/blogify_DB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log('Database Connected');
}).catch((err)=>{
    console.log(err);
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

app.get('/', (req, res) => {
    res.json('Hello')
})

app.use('/api', postRoute);


app.listen(8000, () => {
    console.log('Server Started');
})