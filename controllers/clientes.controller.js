import Models from '../models/index.js';
import jwt from 'jsonwebtoken';

const login = async (req, res) => {
    try {
        let { email, password } = req.body;
        let cliente = await Models.Cliente.findOne({
            attributes: ['idCliente', 'identificacion', 'nombre', 'apellido', 'email', 'rol'],
            where: {
                email: email,
                contrasena: password
            }
        });
        
        if (cliente) {
            console.log(cliente);
            let data = JSON.stringify(cliente);
            let token = jwt.sign(data, 'secretKey');
            res.status(200).send({ token });
        } else {
            res.status(401).json({ message: 'Credenciales incorrectas' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }

}

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
    login,
    getClientes,
    postCliente,
    putCliente,
    deleteCliente
};