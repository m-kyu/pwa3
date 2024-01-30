const express = require('express');
const cors = require('cors');
const router = require('./router/pwa-push');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use('/pwa-push',router);

app.listen(3000)