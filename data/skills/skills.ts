import { prospecting } from "./prospecting";
import { smithing } from "./smithing";
import { martial } from "./martial";
import { enchanting } from "./enchanting";
import { magic } from "./magic";
import { crafting } from "./crafting";
import { athletics } from "./athletics";
import { Skill } from "./types";

export const skillTable: { [skillId: string]: Skill } = {
  [prospecting.id]: prospecting,
  [smithing.id]: smithing,
  [martial.id]: martial,
  [magic.id]: magic,
  [enchanting.id]: enchanting,
  [crafting.id]: crafting,
  [athletics.id]: athletics,
};
