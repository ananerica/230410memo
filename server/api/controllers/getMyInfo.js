const { getUserById } = require('../models/user');

module.exports = async ctx => {
    const { id } = ctx.request.query;

    const { name } = (await getUserById({ id }))[0];

    ctx.body = {
        name
    };
};
