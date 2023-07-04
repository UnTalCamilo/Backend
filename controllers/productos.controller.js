import Models from '../models/index.js';

const getProductos = async (req, res) => {
    try {
        const productos = await Models.Producto.findAll();
        res.status(200).json(productos);
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
}

const postProducto = async (req, res) => {
    try {
        const producto = await Models.Producto.create(req.body);
        res.status(200).json(producto);
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
}

const putProducto = async (req, res) => {
    try {
        let idProducto = req.params.id;
        let producto = await Models.Producto.findByPk(idProducto);
        producto = await producto.update(req.body);
        res.status(200).json(producto);
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }

}

const deleteProducto = async (req, res) => {
    try {
        let idProducto = req.params.id;
        let producto = await Models.Producto.findByPk(idProducto);
        producto = await producto.destroy();
        res.status(200).json(producto);
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
}

export default {
    getProductos,
    postProducto,
    putProducto,
    deleteProducto
};