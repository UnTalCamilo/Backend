import Models from '../models/index.js';

const getPedidos = async (req, res) => {
    try {
        const pedidos = await Models.Pedido.findAll({
            include: [
                {
                    model: Models.Cliente,
                    attributes: ['idCliente', 'identificacion', 'nombre', 'apellido', 'email', 'rol']
                },
                {
                    model: Models.PedidoProducto,
                    required: true,
                    include: [
                        {
                            model: Models.Producto,
                            required: true
                        }, 
                    ]
                }
            ]
        });
        res.status(200).json(pedidos);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const getPedidosCliente = async (req, res) => {
    try {
        const pedidos = await Models.Pedido.findAll({
            where: {
                idCliente: req.params.id
            },
            include: [
                {
                    model: Models.PedidoProducto,
                    required: true,
                    include: [
                        {
                            model: Models.Producto,
                            required: true
                        }
                    ]
                }
            ]
        });
        res.status(200).json(pedidos);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const getPedido = async (req, res) => {
    try {
        let idPedido = req.params.id;
        let pedido = await Models.Pedido.findByPk(idPedido);
        res.status(200).json(pedido);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const postPedido = async (req, res) => {
    let { idCliente } = req.body;
    try {
        const pedido = await Models.Pedido.create({
            idCliente: idCliente
        });

        const pedidoProducto = await Models.PedidoProducto.create({
            idPedido: pedido.idPedido,
            idProducto: req.body.idProducto,
            cantidad: req.body.cantidad
        });

        res.status(200).json(pedido);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const putPedido = async (req, res) => {
    try {
        let idPedido = req.params.id;
        let { estado } = req.body;
        let pedido = await Models.Pedido.findByPk(idPedido);
        pedido = await pedido.update({ estado: estado });
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
    getPedidosCliente,
    getPedidos,
    getPedido,
    postPedido,
    putPedido,
    deletePedido
};
