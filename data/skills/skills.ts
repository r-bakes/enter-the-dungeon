import { agriculture } from "@/data/skills/agriculture";
import { alchemy } from "@/data/skills/alchemy";
import { athletics } from "@/data/skills/athletics";
import { crafting } from "@/data/skills/crafting";
import { enchanting } from "@/data/skills/enchanting";
import { magic } from "@/data/skills/magic";
import { martial } from "@/data/skills/martial";
import { prospecting } from "@/data/skills/prospecting";
import { smithing } from "@/data/skills/smithing";
import { stealth } from "@/data/skills/stealth";
import { Skill } from "@/types/skills";
import { SmithingTaskId } from "@/types/tasks";
import { smithingTasks } from "../tasks/smithing/smithing";

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
