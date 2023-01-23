const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/', (req, res) => {
  res.json({
    welcome: 'this is the server, go to /api to get data.',
  });
});

app.get('/api', (req, res) => {
  res.json({ users: ['user1', 'user2', 'user3'] });
});

app.all('*', (req, res) => {
  res.status(500).json({
    message: "there's nothing here, go back to / or /api please.",
  });
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
