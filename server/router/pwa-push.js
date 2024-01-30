const router = require('express').Router();
const webPush = require('web-push');

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
        .sendNotification(req.body.subscription, JSON.stringify({
          title: 'Web Push | Getting Started',
          body:'(Empty message)',
        }))
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
