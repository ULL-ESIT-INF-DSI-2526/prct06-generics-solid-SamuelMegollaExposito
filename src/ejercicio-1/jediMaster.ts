// src/ejercicio-1/jediMaster.ts
import { Affiliation } from "./types";

export interface JediMaster {
  id: string;
  name: string;
  affiliation: Affiliation;
  powerLevel: number;
  formationYear: number;
  originPlanet: string;
}