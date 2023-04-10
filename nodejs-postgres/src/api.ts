import express from 'express';
import { query } from './db.js';

export const apiRouter = express.Router();

// GET cars
// GET

apiRouter

  .get('/', (_req, res) => {
    res.json({ message: '🎉 API is up and running!!!!! 🎉' });
  })

  .get('/cars', (req, res) => {
    query('SELECT * FROM cars ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    });
  });
