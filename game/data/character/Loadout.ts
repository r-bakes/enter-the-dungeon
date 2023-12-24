export class Loadout {
    loadout;

    constructor(loadout: LoadoutData) {
        this.loadout = {...loadout}
    }
}
export type LoadoutData = {
    head: number | null,
    shoulders: number | null,
    chest: number | null,
    gloves: number | null,
    wrists: number | null,
    legs: number | null,
    feet: number | null,
    neck: number | null,
    trinket: number | null,
    ringOne: number | null,
    ringTwo: number | null,
    leftHand: number | null;
    rightHand: number | null;
}
