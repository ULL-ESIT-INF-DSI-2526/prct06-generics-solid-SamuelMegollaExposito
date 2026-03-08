// src/ejercicio-1/holocron.ts
import { Affiliation } from "./types";

export interface Holocron {
  id: string;
  name: string;
  affiliation: Affiliation;
  knowledgeLevel: number;
  creationYear: number;
  discoveryPlanet: string;
}