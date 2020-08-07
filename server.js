require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const port = process.env.PORT || 3001;
const app = express();

require('./config/database');

const userRouter = require('./routes/users');
const blackliveRouter = require('./routes/blacklives')

const cors = require(('cors'))




app.use(cors());
app.use(logger('dev'));
app.use(express.json());

app.use('/api/blacklives', blackliveRouter);
app.use('/api/users', userRouter);


app.listen(port, () => {
    console.log(`Express is listening on ${port}.`)
})