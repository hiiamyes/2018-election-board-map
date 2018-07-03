const express = require('express');

const app = express();
const path = require('path');

app.use(require('prerender-node').set('prerenderToken', 'PD71to4DJVqjBE53SmMp'));

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});
app.listen(8081);
