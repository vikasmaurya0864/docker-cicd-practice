import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app = express();
const port = process.env.API_PORT || 3001;

app.use(cors());

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', app: process.env.APP_NAME || 'Docker CI/CD Practice' });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`API listening on http://localhost:${port}`);
});
