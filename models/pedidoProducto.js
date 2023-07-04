import { DataTypes } from 'sequelize';
import sequelize from '../Database/database.js';

const PedidoProducto = sequelize.define('pedidosproductos', {
    idPP: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idPedido :{
        type: DataTypes.INTEGER,
        unique: true,
    },
    idProducto :{
        type: DataTypes.INTEGER,
        unique: true,
    },
    cantidad :{
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
});


export default PedidoProducto;