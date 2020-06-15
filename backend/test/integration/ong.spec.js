const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('???', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('???', async () => {
    const response = await request(app).post('/???').send({
      test: '???',
    });

    expect(response.body).toHaveProperty('???');
    expect(response.body.id).toHaveLength(8);
  });
});
