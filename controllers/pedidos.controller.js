import Models from '../models/index.js';

const getPedidos = async (req, res) => {
    try {
        const pedidos = await Models.Pedido.findAll({
            include: [
                {
                    model: Models.Cliente
                }
            ]
        });
        res.status(200).json(pedidos);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const postPedido = async (req, res) => {
    try {
        const pedido = await Models.Pedido.create(req.body);
        res.status(200).json(pedido);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const putPedido = async (req, res) => {
    try {
        let idPedido = req.params.id;
        let pedido = await Models.Pedido.findByPk(idPedido);
        pedido = await pedido.update(req.body);
        res.status(200).json(pedido);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const deletePedido = async (req, res) => {
    try {
        let idPedido = req.params.id;
        let pedido = await Models.Pedido.findByPk(idPedido);
        pedido = await pedido.destroy();
        res.status(200).json(pedido);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export default {
    getPedidos,
    postPedido,
    putPedido,
    deletePedido
};
