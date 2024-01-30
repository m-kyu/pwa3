const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./router/pwa-push');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/pwa-push',router);

app.listen(5000)