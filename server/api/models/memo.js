const datastore = require('../../db/mainDB');

const TABLE_NAME = 'memo';

exports.getMemoByTripId = ({ tripId }) =>
    datastore
        .select('*')
        .from(TABLE_NAME)
        .where('trip_id', tripId)
        .then(result => ({
            status: 200,
            response: result
        }))
        .catch(err => ({
            status: 400,
            response: err
        }));

exports.createMemo = ({ newMemo }) =>
    datastore
        .insert(newMemo)
        .into(TABLE_NAME)
        .then(() => ({
            status: 200,
            response: ''
        }))
        .catch(err => ({
            status: 400,
            response: err
        }));

exports.updateMemo = ({ cardId, content }) =>
    datastore
        .from(TABLE_NAME)
        .where('id', cardId)
        .update(content)
        .then(() => ({
            status: 200,
            response: ''
        }))
        .catch(err => ({
            status: 400,
            response: err
        }));

exports.deleteMemo = ({ cardId }) =>
    datastore
        .from(TABLE_NAME)
        .where('id', cardId)
        .del()
        .then(() => ({
            status: 200,
            response: ''
        }))
        .catch(err => ({
            status: 400,
            response: err
        }));
