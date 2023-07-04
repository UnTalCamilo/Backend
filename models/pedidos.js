import { DataTypes } from 'sequelize';
import sequelize from '../Database/database.js';

const Pedido = sequelize.define('pedidos', {
    idPedido: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idCliente: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fechaSolicitud: {
        type: DataTypes.DATE,
        allowNull: false
    },
    estado: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    timestamps: false
});


export default Pedido;