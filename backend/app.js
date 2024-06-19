const express = require('express');
const morgan = require('morgan');
const app = express();
const router = express.Router();
const cors = require('cors');
const authRouter = require('./routes/authRoutes');
const advertisementRoute = require('./routes/addRoute')
const categoryRoute = require('./routes/categRoute')

app.use(express.json())
app.use(cors())


app.use(morgan('dev'));

app.use('/api/auth', authRouter);
app.use('/api/v1/add', advertisementRoute)
app.use('/api/v1/category', categoryRoute)
module.exports = app;