import { DataTypes } from 'sequelize';
import sequelize from '../Database/database.js';

const Producto = sequelize.define('productos', {
    idProducto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precio: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    imagen: {
        type: DataTypes.STRING,
    }
}, {
    timestamps: false
});


export default Producto;