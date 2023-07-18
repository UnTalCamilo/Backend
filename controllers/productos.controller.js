import Models from '../models/index.js';
import fs from 'fs';
import sequelize from '../Database/database.js';

const getProductos = async (req, res) => {
    try {
        const productos = await Models.Producto.findAll({
            attributes: ['idProducto', 'nombre', 'descripcion', 'precio', [sequelize.fn('concat', 'http://localhost:3000/media/', sequelize.col('imagen')), 'imagen']]
        });
        res.status(200).json(productos);
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
}

const getProducto = async (req, res) => {
    try {
        let idProducto = req.params.id;
        let producto = await Models.Producto.findByPk(idProducto);
        res.status(200).json(producto);
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
}

const postProducto = async (req, res) => {
    try {
        const producto = await Models.Producto.create(req.body);

        let update = await Models.Producto.findByPk(producto.idProducto);
        // set name image with id of producto
        update.imagen = `${producto.idProducto}.jpg`;
        await update.save();

        res.status(200).json(producto);
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
}


const postProductoImg = async (req, res) => {
    try {
        let t = await sequelize.transaction();
        let body = JSON.parse(req.body.data);
        let img = req.file;

        let producto = await Models.Producto.create(body, { transaction: t });
        let update = await Models.Producto.findByPk(producto.idProducto, { transaction: t });

        // set name image with id of producto
        let nameImg = `${producto.idProducto}.jpg`;
        update.imagen = nameImg;
        if (img) {
            // save image
            fs.writeFileSync(`./public/media/${nameImg}`, img.buffer);
        }

        await update.save({ transaction: t });
        await t.commit();

        res.status(200).json(producto);
    } catch (error) {
        await t.rollback();
        res.status(500).json(error);
        console.log(error);
    }
}

const putProductoImg = async (req, res) => {
    try {
        console.log(req.body, req.file);
        let body = JSON.parse(req.body.data);
        let img = req.file;
        console.log(body, img);
        let t = await sequelize.transaction({ autocommit: false });
        let idProducto = req.params.id;
        let producto = await Models.Producto.findByPk(idProducto, { transaction: t });
        producto = await producto.update(body, { transaction: t });

        // set name image with id of producto
        let nameImg = `${producto.idProducto}.jpg`;
        producto.imagen = nameImg;
        if (img) {
            // save image
            fs.writeFileSync(`./public/media/${nameImg}`, img.buffer);
        }

        await producto.save({ transaction: t });
        await t.commit();

        res.status(200).json(producto);

    } catch (error) {
        await t.rollback();
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
    getProducto,
    postProducto,
    postProductoImg,
    putProductoImg,
    putProducto,
    deleteProducto
};