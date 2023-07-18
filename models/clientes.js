import { DataTypes } from 'sequelize';
import sequelize from '../Database/database.js';

const Cliente = sequelize.define('clientes', {
    idCliente: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    identificacion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contrasena: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rol : {
        type: DataTypes.STRING
    }
}, {
    timestamps: false
});


export default Cliente;

