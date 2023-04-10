import express from 'express';
import bodyParser from 'body-parser';
import { apiRouter } from './api.js';

const app = express();

// GET cars
// GET parts
// GET parts of a car

// Configure our app to handle CORS requests
// app.use(function (req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', ['GET', 'POST']);
//   res.setHeader(
//     'Access-Control-Allow-Headers',
//     'X-Requested-With, content-type, Authorization'
//   );
//   next();
// });

// Handles application content types
app.use(bodyParser.json());

//route for the web view of the app
// app.use(express.static(__dirname + '/public/'))

app.use('/api', apiRouter);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
