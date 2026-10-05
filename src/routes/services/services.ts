import { Router } from 'express';
import { getAllServices, getServiceById } from '../../services/services.service.ts';
import { type Request, type Response, type NextFunction } from 'express';

export const router = Router();

// Rejects any :id that isn't a positive whole number (e.g. "abc", "1.5", "-2", "1e3", " ")
const validateNumericId = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  if (typeof id !== 'string' || !/^\d+$/.test(id) || !Number.isSafeInteger(Number(id))) {
    res.status(400).json({ error: 'Business ID must be a positive integer' });
    return;
  }
  next();
};

router.get('/', async (req, res) => {
  const services = await getAllServices();
  res.json(services);
});

router.get('/:id', validateNumericId, async (req, res) => {
  const { id } = req.params;
  const service = await getServiceById(Number(id));
  if (service) {
    res.json(service);
  } else {
    res.status(404).json({ error: 'Service not found' });
  }
});


