import { describe, expect, it } from 'vitest';
import request from 'supertest';
import { app } from '../../app.ts';

describe('GET /health', () => {
  it('returns 200 with a healthy status payload', async () => {
    const res = await request(app).get('/health').expect(200);

    expect(res.body).toMatchObject({
      status: 'OK',
      message: 'Server is healthy',
    });
    expect(new Date(res.body.timestamp).toString()).not.toBe('Invalid Date');
  });
});