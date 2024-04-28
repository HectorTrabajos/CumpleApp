const miMiddleware = (req, res, next) => {
    console.log('Middleware ejecutado');
    next();
};

module.exports = miMiddleware;