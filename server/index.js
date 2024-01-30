const express = require('express');
const cors = require('cors');
const router = require('./router/pwa-push');

const app = express();
app.use(cors());
app.use('/pwa-push',router);

app.listen(3000)