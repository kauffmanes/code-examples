// const { readFile } = require('fs');
const { readFile } = require('fs').promises;
const express = require('express');
const app = express();

// create instance of an express app
// create URLs and endpoints to navigate to
// define code for server to handle requests
// GET request -> return some data on the server (not modify)

/**
 * Think of every request to the URL as an event, and
 * you respond to the event with the callback.
 */
// app.use('/', (request, response) => {
//   readFile('./home.html', 'utf8', (error, html) => {
//     if (error) {
//       response.status(500).send('sorry, out of order');
//     }

//     response.send(html);
//   });
// });

app.use('/', async (request, response) => {
  response.send(await readFile('./home.html', 'utf-8'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App is available on ${port}!`));

/**
 * Callbacks can be difficult to work with. Callback hell.
 * Avoid callbacks by using promises.
 */
