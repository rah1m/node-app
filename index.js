const express = require('express');
const app = express();
const port = 3000;

app.post('/success', function (req, res) {
  res.redirect(`https://vincode.az/success?params=${req.query.params}`);
});

app.post('/decline', function (req, res) {
  res.redirect(`https://vincode.az/decline`);
});

app.post('/topup/success', function (req, res) {
  res.redirect(`https://vincode.az/success?params=${req.query.params}`);
});

app.post('/topup/decline', function (req, res) {
  res.redirect(`https://vincode.az/decline`);
});

app.post('/', (req, res) => {
  res.redirect('https://vincode.az');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
