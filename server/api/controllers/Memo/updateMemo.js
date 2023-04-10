const { updateMemo } = require('../../models/memo');

module.exports = async ctx => {
    const cardId = ctx.params.id;
    const content = ctx.request.body;

    const { status, response } = await updateMemo({ cardId, content });
    ctx.status = status;
    ctx.body = response;
};
