const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config()

const postRouter = require('./routes/posts');
const usersRouter = require('./routes/users');

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true })); //limiting the size of the body to 30mb
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
const PORT=process.env.PORT || 5000;

app.use('/posts', postRouter);
app.use('/users', usersRouter);

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>app.listen(PORT, ()=>console.log(`Server & DB started on port ${PORT}`))).catch(err=>console.log(err));

