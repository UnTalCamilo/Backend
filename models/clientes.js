import { DataTypes } from 'sequelize';
import sequelize from '../Database/database.js';

const Cliente = sequelize.define('clientes', {
    idCliente: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    identificacion: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
}, {
    timestamps: false
});


export default Cliente;

