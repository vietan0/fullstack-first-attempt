const path = require('path');
const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());

app.use(express.static(path.resolve(__dirname, '../client/dist')));

app.get('/api', (req, res) => {
  res.json({ users: ['user1', 'user2', 'user3'] });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'));
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
