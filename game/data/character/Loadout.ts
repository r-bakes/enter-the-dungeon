export class Loadout {
  loadout;

  constructor(loadout: LoadoutData) {
    this.loadout = { ...loadout };
  }
}
export type LoadoutData = {
  head: number | null;
  neck: number | null;
  shoulder: number | null;
  cloak: number | null;
  chest: number | null;
  waist: number | null;
  leg: number | null;
  wrist: number | null;
  glove: number | null;
  feet: number | null;
  ring1: number | null;
  ring2: number | null;
  trinket1: number | null;
  trinket2: number | null;
  flask1: number | null;
  flask2: number | null;
  leftHand: number | null;
  rightHand: number | null;
};
