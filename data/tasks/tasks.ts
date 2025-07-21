import { craftingTasks as prospectingCraftingTasks } from "./prospecting/crafting";
import { smeltingTasks as smithingSmeltingTasks } from "./smithing/smelting";
import { smithingTasks as smithingSmithingTasks } from "./smithing/smithing";
import { miningTasks as prospectingMiningTasks } from "./prospecting/mining";
import { calistheticsTasks as athleticsCalistheticsTasks } from "./athletics/calisthetics";
import { TaskId } from "./enum";
import { Task } from "@/types/tasks";
import { botanyTasks as agricultureBotanyTasks } from "./agriculture/botany";
import { thievingTasks as stealthThievingTasks } from "./stealth/thieving";
import { alchemyReagentTasks } from "./alchemy/reagents";
import { alchemyFlaskTasks } from "./alchemy/flasks";
import { alchemyPotionTasks } from "./alchemy/potions";

export const taskTable = {
  ...smithingSmithingTasks,
  ...smithingSmeltingTasks,
  ...prospectingMiningTasks,
  ...prospectingCraftingTasks,
  ...athleticsCalistheticsTasks,
  ...agricultureBotanyTasks,
  ...stealthThievingTasks,
  ...alchemyReagentTasks,
  ...alchemyFlaskTasks,
  ...alchemyPotionTasks,
} as { [id in TaskId]: Task };
