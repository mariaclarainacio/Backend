require('dotenv').config();
const {MongoClient } = require('mongodb');

const url = 'mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}<>:<>@${process.env.MONGO_HOST}/';

const client = new MongoClient(url);

let db = null;

async function conectar() {
    try {
    if (db == null) {
        db = await client.connect();
        db = client.db("agenda");
    }
    console.log("Conectando ao MongoDB");
    return db;
} catch (e) {
console.log("Erro ao conectar no MongoDB", e.message);
 }
}

module.exports = conectar;