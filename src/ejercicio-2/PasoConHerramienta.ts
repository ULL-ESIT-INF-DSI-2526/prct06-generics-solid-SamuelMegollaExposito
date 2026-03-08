import { Paso } from "./Paso";
import { IPasoConHerramienta } from "./IpasoConHerramienta";

export class PasoConHerramienta extends Paso implements IPasoConHerramienta {
  constructor(
    id: string, nombre: string, duracion: number, etiquetas: string[], 
    opcional: boolean, private _herramienta: string
  ) {
    super(id, nombre, duracion, etiquetas, opcional);
  }
  get herramienta(): string { return this._herramienta; }
}