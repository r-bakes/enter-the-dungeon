import { prospecting } from "./prospecting";
import { smithing } from "./smithing";
import { martial } from "./martial";
import { enchanting } from "./enchanting";
import { magic } from "./magic";
import { crafting } from "./crafting";
import { athletics } from "./athletics";
import { Skill } from "./types";
import { stealth } from "./stealth";
import { alchemy } from "./alchemy";
import { agriculture } from "./agriculture";

export const skillTable: { [skillId: string]: Skill } = {
  [prospecting.id]: prospecting,
  [smithing.id]: smithing,
  [martial.id]: martial,
  [magic.id]: magic,
  [enchanting.id]: enchanting,
  [crafting.id]: crafting,
  [athletics.id]: athletics,
  [stealth.id]: stealth,
  [alchemy.id]: alchemy,
  [agriculture.id]: agriculture,
};
