import { IPaso } from "./IPaso";
import { Paso } from "../Paso";

export interface IPasoConHerramienta extends IPaso {
  readonly herramienta: string;
}
