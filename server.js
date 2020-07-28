const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });

const app = express();

app.get('/', (req, res) => {
  res.send('Bienvenue');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(
    `Your server is running in mode ${process.env.NODE_ENV} on port ${PORT}`
  )
);
