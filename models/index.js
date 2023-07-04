
import Cliente from './clientes.js';
import Producto from './productos.js';
import Pedido from './pedidos.js';
import PedidoProducto from './pedidoProducto.js';


// Relaciones
// cliente - pedido
Cliente.hasMany(Pedido, {
    foreignKey: 'idCliente',
    onDelete: 'CASCADE',
    hooks: true
});

Pedido.belongsTo(Cliente, {
    foreignKey: 'idCliente'
});

// pedido - pedidoProducto
Pedido.hasMany(PedidoProducto, {
    foreignKey: 'idPedido',
    onDelete: 'CASCADE',
    hooks: true
});

PedidoProducto.belongsTo(Pedido, {
    foreignKey: 'idPedido'
});

// producto - pedidoProducto
Producto.hasMany(PedidoProducto, {
    foreignKey: 'idProducto',
    onDelete: 'CASCADE',
    hooks: true
});

PedidoProducto.belongsTo(Producto, {
    foreignKey: 'idProducto'
});



export default {
    Cliente,
    Producto,
    Pedido,
    PedidoProducto
};