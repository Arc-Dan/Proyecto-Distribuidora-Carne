// Sistema de roles: administrador almacenista y cliente
export type RolUsuario = 'administrador' | 'almacenista' | 'cliente';

export interface Usuario {
  id: number;
  nombre: string;
  correo: string;
  rol: RolUsuario;
  activo: boolean;
}

// Lo que hace falta para crear una: nada de id, estado ni creadaEn.
// Eso lo decide el dominio, no quien manda la peticion.
export type NuevoUsuario = Omit<Usuario, 'id' | 'rol' | 'activo'>;
