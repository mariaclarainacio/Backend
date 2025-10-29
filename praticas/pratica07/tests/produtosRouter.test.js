const request = require('supertest'); 
const mongoose = require('mongoose'); 
const app = require('../app'); 
const Produto = require('../models/produtosModel'); 

let id; 

const api = request(app); 

describe('Testes da API /produtos', () => {

    beforeAll(async () => {
        if (mongoose.connection.readyState === 0) {
            await new Promise(resolve => setTimeout(resolve, 500)); 
        }
        await Produto.deleteMany({});
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });
 
    it('POST /produtos → cria um produto', async () => {
        const res = await api
            .post('/produtos')
            .send({ nome: 'Laranja', preco: 10.0 });

        expect(res.status).toBe(201);
        expect(res.type).toBe('application/json');
        expect(res.body).toHaveProperty('_id'); 
        expect(res.body.nome).toBe('Laranja');
        expect(res.body.preco).toBe(10.0);
        
        id = res.body._id; 
    });

    it('POST /produtos sem body → erro 422', async () => {
        const res = await api.post('/produtos').send({});

        expect(res.status).toBe(422);
        expect(res.type).toBe('application/json');
        expect(res.body.msg).toBe('Nome e preço do produto são obrigatórios');
    });

    it('GET /produtos → lista todos', async () => {
        const res = await api.get('/produtos');
        
        expect(res.status).toBe(200);
        expect(res.type).toBe('application/json');
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body.length).toBeGreaterThanOrEqual(1); 
    });

    it('GET /produtos/:id → busca produto', async () => {
        const res = await api.get(`/produtos/${id}`);

        expect(res.status).toBe(200);
        expect(res.type).toBe('application/json');
        expect(res.body).toHaveProperty('_id', id);
        expect(res.body.nome).toBe('Laranja');
        expect(res.body.preco).toBe(10.0);
    });

    it('GET /produtos/0 → parâmetro inválido', async () => {
        const res = await api.get('/produtos/0');

        expect(res.status).toBe(400);
        expect(res.type).toBe('application/json');
        expect(res.body.msg).toBe('Parâmetro inválido');
    });

    it('GET /produtos/000000000000000000000000 → não encontrado', async () => {
        const res = await api.get('/produtos/000000000000000000000000');
        
        expect(res.status).toBe(404);
        expect(res.type).toBe('application/json');
        expect(res.body.msg).toBe('Produto não encontrado');
    });

    it('PUT /produtos/:id → atualiza produto', async () => {
        const res = await api
            .put(`/produtos/${id}`)
            .send({ nome: 'Laranja Pera', preco: 18.00 });

        expect(res.status).toBe(200);
        expect(res.type).toBe('application/json');
        expect(res.body.nome).toBe('Laranja Pera');
        expect(res.body.preco).toBe(18.00);
    });

    it('PUT /produtos/:id sem body → erro 422', async () => {
        const res = await api
            .put(`/produtos/${id}`)
            .send({});

        expect(res.status).toBe(422);
        expect(res.type).toBe('application/json');
        expect(res.body.msg).toBe('Nome e preço do produto são obrigatórios');
    });
   
    it('PUT /produtos/0 → parâmetro inválido', async () => {
        const res = await api.put('/produtos/0').send({ nome: 'A', preco: 1 });

        expect(res.status).toBe(400);
        expect(res.type).toBe('application/json');
        expect(res.body.msg).toBe('Parâmetro inválido');
    });

    it('PUT /produtos/000000000000000000000000 → não encontrado', async () => {
        const res = await api
            .put('/produtos/000000000000000000000000')
            .send({ nome: 'A', preco: 1 });
            
        expect(res.status).toBe(404);
        expect(res.type).toBe('application/json');
        expect(res.body.msg).toBe('Produto não encontrado');
    });

    it('DELETE /produtos/:id → remove produto', async () => {
        const res = await api.delete(`/produtos/${id}`);

        expect(res.status).toBe(204);
        expect(res.body).toEqual({}); 
    });

    it('DELETE /produtos/0 → parâmetro inválido', async () => {
        const res = await api.delete('/produtos/0');
        
        expect(res.status).toBe(400);
        expect(res.type).toBe('application/json');
        expect(res.body.msg).toBe('Parâmetro inválido');
    });

    it('DELETE /produtos/:id que não existe → não encontrado', async () => {
        const res = await api.delete(`/produtos/${id}`); 

        expect(res.status).toBe(404);
        expect(res.type).toBe('application/json');
        expect(res.body.msg).toBe('Produto não encontrado');
    });
});