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
    const pushSubscription = req.body;
    webpush.sendNotification(pushSubscription, 'Your Push Payload Text')

    res.send(vapidKeys.publicKey);
})

module.exports = router;
