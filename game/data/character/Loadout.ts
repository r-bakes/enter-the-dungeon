export class Loadout {
  loadout;

  constructor(loadout: LoadoutData) {
    this.loadout = { ...loadout };
  }
}
export type LoadoutData = {
  head: string | null;
  neck: string | null;
  shoulder: string | null;
  cloak: string | null;
  chest: string | null;
  waist: string | null;
  leg: string | null;
  wrist: string | null;
  glove: string | null;
  feet: string | null;
  ring1: string | null;
  ring2: string | null;
  trinket1: string | null;
  trinket2: string | null;
  flask1: string | null;
  flask2: string | null;
  leftHand: string | null;
  rightHand: string | null;
};
export type LoadoutSlots = "head" | "neck" | "shoulder" | "cloak" | "chest" | "waist" | "leg" | "wrist" | "glove" | "feet" | "ring1" | "ring2" | "trinket1" | "trinket2" | "flask1" | "flask2" | "leftHand" | "rightHand";
