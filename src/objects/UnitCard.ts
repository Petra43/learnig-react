import { type } from "os";

// define the UnitCard type and the default variables 
export class UnitCard{
  // section 1: identifiers
  unitName: string = 'Unit name';
  battlefieldRole: string = '';
  crusadeFaction: string = '';
  selectableKeyWords: string[] = [];
  id: number = 0;

  // section 2: points
  powerRating: number = 0;
  exp: number = 0;
  crusadePoints: number = 0;

  //section 3: information
  unitType: string = '';
  equipment: string[] = [];
  psychicPowers: string[] = [];
  warlordTraits: string[] = [];
  relics: string[] = [];
  otherUpgradesAndSelectableAbilities: string[] = [];

  //section 4: combat tallis
  battlesPLayed: number = 0;
  battlesSurvived: number = 0;
  enemyUnitsDestroyed: number = 0;
  enemyUnitsDestroyedWithPsychicPowers: number = 0;
  enemyUnitsDestroyedWithRangedWeapons: number = 0;
  enemyUnitsDestroyedWithMeleeWeapons: number = 0;
  
  //section 5: rank
  rank: rank = 'Battle Ready'
  battleHonours: string[] = [];
  battleScars: string[] = [];

}

export type rank = 'Battle Ready' | 'Blooded' | 'Battle Hardened' | 'Heroic' | 'Legendary';