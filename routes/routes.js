import { Router } from 'express';
import pedidosController from '../controllers/pedidos.controller.js';
import pedidosProdController from '../controllers/pedidosProd.controller.js';
import productosController from '../controllers/productos.controller.js';
import clientesController from '../controllers/clientes.controller.js';


import multer from 'multer';

const router = Router();

// clientes
router.get('/clientes', clientesController.getClientes);
router.post('/clientes', clientesController.postCliente);
router.put('/clientes/:id', clientesController.putCliente);
router.delete('/clientes/:id', clientesController.deleteCliente);

// productos
router.get('/productos', productosController.getProductos);
router.get('/productos/:id', productosController.getProducto);
router.post('/productos', productosController.postProducto);
router.post('/productosImg', multer().single('image'), productosController.postProductoImg);
router.put('/productosImg/:id', multer().single('image'), productosController.putProductoImg);
router.put('/productos/:id', productosController.putProducto);
router.delete('/productos/:id', productosController.deleteProducto);

// pedidos
router.get('/pedidos', pedidosController.getPedidos);
router.get('/pedidosCliente/:id', pedidosController.getPedidosCliente);
router.get('/pedidos/:id', pedidosController.getPedido);
router.post('/pedidos', pedidosController.postPedido);
router.put('/pedidos/:id', pedidosController.putPedido);
router.delete('/pedidos/:id', pedidosController.deletePedido);

// pedidosProd
router.get('/pedidosProd', pedidosProdController.getPedidosProd);
router.post('/pedidosProd', pedidosProdController.postPedidoProd);
router.put('/pedidosProd/:id', pedidosProdController.putPedidoProd);
router.delete('/pedidosProd/:id', pedidosProdController.deletePedidoProd);

// login
router.post('/login', clientesController.login);


export default router;