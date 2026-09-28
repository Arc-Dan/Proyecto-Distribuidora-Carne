// Productos que vende la distribuidora

export interface Producto {
  id: number;
  nombre: string;
  presentacion: string; // Caja (10kg), pieza
  unidadMedida: 'kg' | 'pieza' | 'caja';
  precioBase: number;
  stockMinimo: number;
}

// Cada entrada de mercancía genera un lote.

export interface Lote {
  id: number;
  productoId: number;
  proveedor: string;
  cantidadDisponible: number;
  fechaIngreso: Date;
  fechaCaducidad: Date;
}

// Clientes

export type TipoCliente =
  | 'tienda'
  | 'restaurante';

export interface Cliente {
  id: number;
  nombre: string;
  tipo: TipoCliente;
  correo: string;
  activo: boolean;
}

// Sistema de roles: administrador almacenista y cliente

export type RolUsuario =
  | 'administrador'
  | 'almacenista'
  | 'cliente';

export interface Usuario {
  id: number;
  nombre: string;
  correo: string;
  rol: RolUsuario;
}

// Pedido

export type EstadoPedido =
  | 'recibido'
  | 'surtido'
  | 'en_ruta'
  | 'entregado';

export interface Pedido {
  id: number;
  clienteId: number;
  fecha: Date;
  estado: EstadoPedido;
}

// Renglón del pedido

export interface PedidoDetalle {
  productoId: number;
  cantidad: number;
  precioUnitario: number;
}

// Resultado de surtir usando FEFO
// (First Expired First Out)

export interface SurtidoLote {
  loteId: number;
  cantidad: number;
}

export interface MovimientoSurtido {
  pedidoId: number;
  productoId: number;
  lotes: SurtidoLote[];
}

// Mermas

export type MotivoMerma =
  | 'caducidad'
  | 'dano'
  | 'faltante';

export interface Merma {
  id: number;
  loteId: number;
  cantidad: number;
  motivo: MotivoMerma;
  fecha: Date;
}

// Objeto que el sistema recibe al crear un pedido

export interface NuevaLineaPedido {
  productoId: number;
  cantidad: number;
}

export interface NuevoPedido {
  clienteId: number;
  productos: NuevaLineaPedido[];
}