const supertest = require('supertest');
const app = require('../app');

const request = supertest(app);

describe('Prática 8 - Autenticação JWT', () => {
  let token;
  let novoToken;

  test('GET /produtos sem token deve retornar 401 e mensagem "Não autorizado"', async () => {
    const res = await request.get('/produtos');
    expect(res.status).toBe(401);
    expect(res.type).toMatch(/json/);
    expect(res.body.msg).toBe('Não autorizado');
  });

  test('GET /produtos com token inválido deve retornar 401 e "Token inválido"', async () => {
    const res = await request
      .get('/produtos')
      .set('authorization', 'Bearer 123456789');
    expect(res.status).toBe(401);
    expect(res.type).toMatch(/json/);
    expect(res.body.msg).toBe('Token inválido');
  });

  test('POST /usuarios/login deve retornar 200 e fornecer token', async () => {
    const res = await request
      .post('/usuarios/login')
      .send({ usuario: 'email@exemplo.com', senha: 'abcd1234' });
    expect(res.status).toBe(200);
    expect(res.type).toMatch(/json/);
    expect(res.body.token).toBeDefined();
    token = res.body.token;
  });

  test('GET /produtos com token válido deve retornar 200', async () => {
    const res = await request
      .get('/produtos')
      .set('authorization', `Bearer ${token}`);
    expect(res.status).toBe(200);
    expect(res.type).toMatch(/json/);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('POST /usuarios/renovar deve retornar 200 e novo token', async () => {
    const res = await request
      .post('/usuarios/renovar')
      .set('authorization', `Bearer ${token}`);
    expect(res.status).toBe(200);
    expect(res.type).toMatch(/json/);
    expect(res.body.token).toBeDefined();
    novoToken = res.body.token;
  });

  test('GET /produtos com novo token deve retornar 200', async () => {
    const res = await request
      .get('/produtos')
      .set('authorization', `Bearer ${novoToken}`);
    expect(res.status).toBe(200);
    expect(res.type).toMatch(/json/);
    expect(Array.isArray(res.body)).toBe(true);
  });
});