const imoveis = require('../bancodedados/dados');

const get = (req, res) => {
    return res.send(imoveis);
};

const getId = (req, res) => {
    const { id } = req.params;

    const IdImovel = imoveis.find((item) => {
        return item.id === Number(id);
    });
    return res.json(IdImovel);
};

module.exports = {
    get,
    getId
};