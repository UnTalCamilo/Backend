import Models from '../models/index.js';

const getPedidosProd = async (req, res) => {
    try {
        const pedidosProd = await Models.PedidoProducto.findAll({
            include: [
                {
                    model: Models.Pedido
                },
                {
                    model: Models.Producto
                }
            ]
        });
        res.status(200).json(pedidosProd);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const postPedidoProd = async (req, res) => {
    try {
        const pedidoProd = await Models.PedidoProducto.create(req.body);
        res.status(200).json(pedidoProd);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const putPedidoProd = async (req, res) => {
    try {
        let idPedidoProd = req.params.id;
        let { cantidad } = req.body;
        let pedidoProd = await Models.PedidoProducto.findByPk(idPedidoProd);
        pedidoProd = await pedidoProd.update({ cantidad: cantidad });
        res.status(200).json(pedidoProd);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }

}

const deletePedidoProd = async (req, res) => {
    try {
        let idPedidoProd = req.params.id;
        let pedidoProd = await Models.PedidoProducto.findByPk(idPedidoProd);
        pedidoProd = await pedidoProd.destroy();
        res.status(200).json(pedidoProd);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export default {
    getPedidosProd,
    postPedidoProd,
    putPedidoProd,
    deletePedidoProd
};