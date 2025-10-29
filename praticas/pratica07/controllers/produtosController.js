const mongoose = require('mongoose'); 
const Produto = require('../models/produtosModel');

const criar = async (req, res) => {
    try {
        const novoProduto = await Produto.create({ 
            nome: req.body.nome, 
            preco: req.body.preco 
        });
        return res.status(201).json(novoProduto);
    } catch (error) {
        return res.status(422).json({ msg: 'Nome e preço do produto são obrigatórios' });
    }
};

const listar = async (req, res) => {
    try {
        const produtosCadastrados = await Produto.find({});
        return res.status(200).json(produtosCadastrados);
    } catch (error) {
        return res.status(500).json({ msg: 'Erro ao listar produtos' });
    }
};

const buscar = async (req, res, next) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ msg: 'Parâmetro inválido' });
    }

    try {
        const produtoEncontrado = await Produto.findOne({ _id: id });
       
        if (produtoEncontrado) {
            req.produto = produtoEncontrado; 
            return next(); 
        } else {
            return res.status(404).json({ msg: 'Produto não encontrado' });
        }
    } catch (error) {
        return res.status(500).json({ msg: 'Erro interno ao buscar produto' });
    }
};

const exibir = (req, res) => {
    return res.status(200).json(req.produto); 
};

const atualizar = async (req, res) => {
    const { id } = req.params;
    try {

        const produtoAtualizado = await Produto.findOneAndUpdate(
            { _id: id },
            { nome: req.body.nome, preco: req.body.preco },
            { new: true, runValidators: true } 
        );

        return res.status(200).json(produtoAtualizado);
    } catch (error) {
        return res.status(422).json({ msg: 'Nome e preço do produto são obrigatórios' });
    }
};

const remover = async (req, res) => {
    const { id } = req.params;
    try {
        const produtoRemovido = await Produto.findOneAndDelete({ _id: id });

        return res.status(204).send(); 
    } catch (error) {
        return res.status(500).json({ msg: 'Erro interno ao remover produto' });
    }
};

module.exports = {
    criar,
    listar,
    buscar,
    exibir,
    atualizar,
    remover
};