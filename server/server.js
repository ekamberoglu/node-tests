const express = require('express');

var app = express();

app.get('/', (req, res) => {
  //res.send('Hello world!');
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) => {
  var users = [
    {
      name: 'Kayra',
      age: 8
    },
    {
      name: 'Elif',
      age: 47
    },
    {
      name: 'Ekrem',
      age: 50
    }
  ];
  res.send(users);
});

app.listen(3000, () => {
  console.log('server start to listen at port 3000');
});

module.exports.app = app;