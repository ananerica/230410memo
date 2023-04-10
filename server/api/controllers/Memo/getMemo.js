const { getMemoByTripId } = require('../../models/memo');

module.exports = async ctx => {
    const tripId = ctx.params.trip_id;

    const { status, response } = await getMemoByTripId({ tripId });
    ctx.status = status;
    ctx.body = response;
};
