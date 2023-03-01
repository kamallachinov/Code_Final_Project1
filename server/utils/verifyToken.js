const jwt = require("jsonwebtoken")
const createError = require("../utils/error")

function verifyToken(err, req, res, next) {
    if (err) next(err)
    const token = req.cookies.access_token;
    if (!token) {
        return next(createError(401, "You are not authenticated!"))
    }
    jwt.verify(token, process.env.JWT, (err, user) => {
        if (err) return next(createError(403, "Token is not valid!"))
        req.user = user;
        next()
    })
}
function verifyUser(err, req, res, next) {

    verifyToken(req, res, next, () => {
        if (err) next(err)
        if (req.params.id === req.user?.id || req.params.isAdmin) {
            next()
        } else {
            return next(createError(403, "You are not authorized!"))
        }
    })
}
function verifyAdmin(err, req, res, next) {
    verifyToken(req, res, next, () => {
        if (err) next(err)
        if (req.user?.isAdmin) {
            next()
        } else {
            return next(createError(403, "You are not authorized!"))
        }
    })
}
module.exports = { verifyToken, verifyUser, verifyAdmin }