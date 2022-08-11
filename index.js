const {send} = require('./mail')
const express = require('express')
const app = express()
app.use(express.json())

app.post('/send', function (req, res) {
  testMail.text = req.body.text;
  testMail.html = req.body.html;
  send(testMail).then(info=> {
    console.log('mail sent', info);
    res.send('Mail sent');
  })
  .catch(error => {
    console.error(error);
    res.send('Error')
  });
})

app.listen(3000, () => console.log('Listening on port 3000'))
