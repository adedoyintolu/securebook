import { Router } from 'express';
import { getAllBooks, getBookById } from '../../services/book.service.ts';

export const router = Router();

router.get('/', async (req, res) => {
  try {
    const books = await getAllBooks();
    res.json(books);
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const book = await getBookById(id);
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    console.error('Error fetching book:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
