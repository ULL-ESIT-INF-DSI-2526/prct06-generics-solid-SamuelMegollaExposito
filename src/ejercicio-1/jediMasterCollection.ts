import { BasicGalacticCollection } from "./basicGalacticCollection";
import { JediMaster } from "./jediMaster";

/**
 * Colección específica para Maestros Jedi
 */
export class JediMasterCollection extends BasicGalacticCollection<JediMaster> {
  
  searchByPowerOrClass(level: number): JediMaster[] {
    return this.items.filter(jedi => jedi.powerLevel >= level);
  }

  searchByYear(year: number): JediMaster[] {
    return this.items.filter(jedi => jedi.formationYear === year);
  }

  searchByPlanet(planet: string): JediMaster[] {
    return this.items.filter(jedi => jedi.originPlanet.toLowerCase() === planet.toLowerCase());
  }
}