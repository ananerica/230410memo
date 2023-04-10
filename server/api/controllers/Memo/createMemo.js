const { createMemo } = require('../../models/memo');

module.exports = async ctx => {
    const newMemo = ctx.request.body;
    const { memo_type: memoType, card_id: cardId = null } = ctx.request.body;

    // check whether the request body is legal
    if (!memoType && cardId) {
        ctx.status = 400;
        ctx.body = "error: card-independent memo shouldn't specify card_id";
    } else if (memoType && cardId === null) {
        ctx.status = 400;
        ctx.body = 'error: card-related memo should specify card_id';
    } else {
        const { status, response } = await createMemo({ newMemo });
        ctx.status = status;
        ctx.body = response;
    }
};
