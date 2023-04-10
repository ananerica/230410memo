const datastore = require('../../db/mainDB');

const TABLE_NAME = 'user';

exports.getUserById = ({ id }) =>
    datastore
        .select('*')
        .from(TABLE_NAME)
        .where('id', id);
