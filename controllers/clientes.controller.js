import Models from '../models/index.js';

const getClientes = async (req, res) => {
    try {
        const clientes = await Models.Cliente.findAll();
        res.status(200).json(clientes);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const postCliente = async (req, res) => {
    try {
        const cliente = await Models.Cliente.create(req.body);
        res.status(200).json(cliente);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const putCliente = async (req, res) => {
    try {
        let idCliente = req.params.id;
        let cliente = await Models.Cliente.findByPk(idCliente);
        cliente = await cliente.update(req.body);
        res.status(200).json(cliente);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const deleteCliente = async (req, res) => {
    try {
        let idCliente = req.params.id;
        let cliente = await Models.Cliente.findByPk(idCliente);
        cliente = await cliente.destroy();
        res.status(200).json(cliente);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}


export default {
    getClientes,
    postCliente,
    putCliente,
    deleteCliente
};