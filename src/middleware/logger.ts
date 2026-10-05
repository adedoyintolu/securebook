import type { RequestHandler } from 'express';

const error: RequestHandler = (req, _res, next) => {
  console.log(req.method, req.path);
  next();
};

export default error;