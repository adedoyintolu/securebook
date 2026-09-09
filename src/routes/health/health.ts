import { Router } from 'express';

export const router = Router();

router.get('/', (req, res) => {
  res.send({
    message: 'Server is healthy',
    status: 'OK',
    timestamp: new Date().toISOString(),
  });
});