const express = require('express');
const app = express();
const logger = require('morgan');
const port = process.env.PORT || 3001;

const blackliveRouter = require('./routes/blacklives')
const cors = require(('cors'))



require('dotenv').config();
require('./config/database');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());

app.use('/api/blacklives', blackliveRouter);

app.listen(port, () => {
    console.log(`Express is listening on ${port}.`)
})