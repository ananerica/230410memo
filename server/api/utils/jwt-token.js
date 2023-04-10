const jwt = require('jsonwebtoken');
const config = require('config');

const {
    auth: { jwtSecret, accessTokenExpiredTime, refreshTokenExpiredTime }
} = config;

exports.generateAccessToken = data =>
    jwt.sign(
        {
            ...data,
            type: 'accessToken'
        },
        jwtSecret,
        {
            expiresIn: data?.liveTime ?? accessTokenExpiredTime
        }
    );

exports.generateRefreshToken = ({ userId }) =>
    jwt.sign(
        {
            userId,
            type: 'refreshToken'
        },
        jwtSecret,
        {
            expiresIn: refreshTokenExpiredTime
        }
    );

exports.decodeToken = ({ token, type }) => {
    const data = jwt.verify(token, jwtSecret);

    if (data?.type !== type) {
        throw new Error('Token type error.');
    }

    return data;
};
