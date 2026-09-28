import { Producto, Lote, Cliente, Pedido, Merma, NuevoPedido, MovimientoSurtido } from './entidades';

// El Service sólo conoce esta interfaz.
// No sabe si detrás hay memoria, Prisma, PostgreSQL o MongoDB.

export interface InventarioRepository {

  // Productos
  listarProductos(): Promise<Producto[]>;

  buscarProducto(
    productoId: number,
  ): Promise<Producto | null>;

  // Lotes
  listarLotesProducto(
    productoId: number,
  ): Promise<Lote[]>;

  buscarLote(
    loteId: number,
  ): Promise<Lote | null>;

  registrarLote(
    lote: Omit<Lote, 'id'>,
  ): Promise<Lote>;

  actualizarLote(
    lote: Lote,
  ): Promise<Lote>;

  // Clientes
  buscarCliente(
    clienteId: number,
  ): Promise<Cliente | null>;

  // Pedidos
  crearPedido(
    pedido: NuevoPedido,
  ): Promise<Pedido>;

  buscarPedido(
    pedidoId: number,
  ): Promise<Pedido | null>;

  actualizarPedido(
    pedido: Pedido,
  ): Promise<Pedido>;

  // Surtido FEFO (First Expired, First Out)
  registrarSurtido(
    movimiento: MovimientoSurtido,
  ): Promise<void>;

  // Mermas
  registrarMerma(
    merma: Omit<Merma, 'id'>,
  ): Promise<Merma>;

  // Consultas de inventario
  existenciaVigente(
    productoId: number,
    fecha: Date,
  ): Promise<number>;
}