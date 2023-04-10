const { deleteMemo } = require('../../models/memo');

module.exports = async ctx => {
    const cardId = ctx.params.id;

    const { status, response } = await deleteMemo({ cardId });
    ctx.status = status;
    ctx.body = response;
};
