const express = require('express');
const router = express.Router();
const webPush = require('web-push');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const vapidKeys = webPush.generateVAPIDKeys();
webPush.setVapidDetails(
  'mailto:yicha7@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

router.get('/public', async function (req, res) {
    res.send(vapidKeys.publicKey);
})

router.post('/sendNoti', async function (req, res) {
    setTimeout(function () {
      webPush
        .sendNotification(req.body.subscription)
        .then(function () {
          res.sendStatus(201);
        })
        .catch(function (error) {
          res.sendStatus(500);
          console.log(error);
        });
    }, 3000);

})

module.exports = router;
