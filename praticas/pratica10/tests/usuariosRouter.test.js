const supertest = require('supertest');
const app = require('../app');

const request = supertest(app);

describe('/usuarios', () => {
  let createdId;
  let savedToken;

  it('POST /usuarios cria usuário e retorna 201', async () => {
    const res = await request
      .post('/usuarios')
      .send({ email: 'usuario@email.com', senha: 'abcd1234' });
    expect(res.status).toBe(201);
    expect(res.headers['content-type']).toMatch(/json/);
    expect(res.body._id).toBeDefined();
    expect(res.body.email).toBe('usuario@email.com');
    createdId = res.body._id;
  });

  it('POST /usuarios sem body retorna 422', async () => {
    const res = await request.post('/usuarios').send({});
    expect(res.status).toBe(422);
    expect(res.body.msg).toBe('Email e Senha são obrigatórios');
  });

  it('POST /usuarios/login retorna token e 200', async () => {
    const res = await request
      .post('/usuarios/login')
      .send({ usuario: 'usuario@email.com', senha: 'abcd1234' });
    expect(res.status).toBe(200);
    expect(res.body.token).toBeDefined();
    savedToken = res.body.token;
  });

  it('POST /usuarios/login sem body retorna 401', async () => {
    const res = await request.post('/usuarios/login').send({});
    expect(res.status).toBe(401);
    expect(res.body.msg).toBe('Credenciais inválidas');
  });

  it('POST /usuarios/renovar com token retorna 200 e token', async () => {
    const res = await request
      .post('/usuarios/renovar')
      .set('authorization', `Bearer ${savedToken}`)
      .send();
    expect(res.status).toBe(200);
    expect(res.body.token).toBeDefined();
  });

  it('POST /usuarios/renovar com token inválido retorna 401', async () => {
    const res = await request
      .post('/usuarios/renovar')
      .set('authorization', 'Bearer 123456789')
      .send();
    expect(res.status).toBe(401);
    expect(res.body.msg).toBe('Token invalido');
  });

  it('DELETE /usuarios/:id com token retorna 204', async () => {
    const res = await request
      .delete(`/usuarios/${createdId}`)
      .set('authorization', `Bearer ${savedToken}`)
      .send();
    expect(res.status).toBe(204);
  });
});