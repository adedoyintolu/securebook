import express from 'express';
import { healthRouter } from './routes/index.ts';

export const app = express();

app.use('/health', healthRouter);

