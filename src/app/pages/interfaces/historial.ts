export interface HistorialData {
  columnas: string[];
  historial: Historial[];
}

export interface Historial {
  [nombrePropiedad: string]: any;
}