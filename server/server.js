const bodyParser = require('body-parser');
const axios = require('requestify');
const express = require('express');

const app = express();
const API_URL = 'https://intra.epitech.eu';

app.use(bodyParser.json());

function apiBuilder(route) {
  return `${API_URL}${route}`;
}

app.post('/login', (req, res) => { // http://localhost:3000/login, {login: 'x', password: 'x'}
  const credentials = {
    login: req.body.login,
    password: req.body.password,
    format: 'json',
  };

  console.log('URL', apiBuilder('/'));
  console.log('CRED', credentials);

  axios
      .post(apiBuilder('/'), credentials)
      .then(response => res.send(response))
      .catch(error => res.send(error.response.data.message));
});

console.log('[SERVER] Started : http://localhost:3000');

app.listen(3000);
