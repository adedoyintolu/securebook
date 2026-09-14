import express from 'express';
import { bookRouter, healthRouter } from './routes/index.ts';

export const app = express();

app.use('/health', healthRouter);
app.use('/books', bookRouter);

