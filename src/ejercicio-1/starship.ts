// src/ejercicio-1/starship.ts
import { Affiliation } from "./types";

export interface Starship {
  id: string;
  name: string;
  affiliation: Affiliation;
  shipClass: string;
  constructionYear: number;
  manufacturerPlanet: string;
}