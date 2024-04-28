const hello = (req, res) => {
    res.json({ message: '¡Hola mundo!' });
};

module.exports = {
    hello,
};