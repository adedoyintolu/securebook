import { type Request, type Response, type NextFunction } from 'express';

const errorHandler = (err: unknown, _req: Request, res: Response, next: NextFunction) => {
  console.error(err instanceof Error ? err.stack : err);

  if (res.headersSent) {
    return next(err);
  }

  const status =
    typeof err === 'object' && err !== null && 'status' in err && typeof err.status === 'number'
      ? err.status
      : 500;

  res.status(status).json({ error: status === 500 ? 'Internal Server Error' : String((err as Error).message) });
};

export default errorHandler;
