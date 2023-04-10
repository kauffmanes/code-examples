import express from 'express';
import { readFile } from 'fs/promises';
import { cwd } from 'process';

const app = express();

app.get('/', async (req, res) => {
  try {
    const data = await readFile('./dist/public/index.html', 'utf-8');
    res.send(data);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error, oh no.');
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`App is listening on http://localhost:${3000}`)
);
