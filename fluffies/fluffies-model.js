const db = require('../data/dbConfig.js');

module.exports = {
    insert,
    update,
    remove,
    getAll,
    findById,
};

async function insert(fluffy) {
    return db('fluffies').insert(fluffy, 'id');
}

async function update(id, changes) {
    return null;
}

function remove(id) {
    return null;
}

function getAll() {
    return db('fluffies');
}

function findById(id) {
    return null;
}
