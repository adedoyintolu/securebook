import express from 'express';
import { businessRouter, healthRouter, serviceRouter } from './routes/index.ts';
import { logger, errorHandler } from './middleware/index.ts';


export const app = express();
    
app.use(logger);
app.use('/health', healthRouter);
app.use('/businesses', businessRouter);
app.use('/services', serviceRouter);
app.use(errorHandler);
