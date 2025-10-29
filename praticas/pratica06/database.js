const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://MariaClara:<2212>@cluster0.h0c8te1.mongodb.net/?appName=Cluster0';
const client = new MongoClient(url);

async function conectarDb() {
  await client.connect();
  return client.db('agenda');
}

module.exports = { conectarDb };
