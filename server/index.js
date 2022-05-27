const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const postRouter = require('./routes/posts');
require('dotenv').config()

const app = express();

app.use('/posts', postRouter);
app.use(bodyParser.json({ limit: '30mb', extended: true })); //limiting the size of the body to 30mb
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

const PORT=process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`))).catch(err=>console.log(err));

