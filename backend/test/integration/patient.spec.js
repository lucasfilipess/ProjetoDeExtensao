const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('Patient', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create, update and list a patient or all patients', async () => {
    const response = await request(app).post('/patient').send({
      tipo: 3,
      nome: 'Paciente',
      cpf: 12345678911,
      rg: 'MG-15054226',
      telefone: '3199862134',
      celular: '31999869768',
      email: 'paciente@teste.com',
      cep: 39402331,
      uf: 'MG',
      cidade: 'Belo Horizonte',
      bairro: 'São Luís',
      rua: 'Principal',
      numero: 150,
      complemento: 'A',
      senha: 'password',
    });
    // set('Authorization', request.body.token)

    expect(response.body).toHaveProperty('token');
    expect(response.body).toHaveProperty('status');
    expect(response.body.token).toHaveLength(149);
    expect(response.body.status).toHaveLength(7);
  });
});
