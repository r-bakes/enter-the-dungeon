import { PastureId, PlotId } from "@/data/character/enums";
import { IconStylePrimitive } from "@/types/gameObjects";

export const LEVEL_CAP = 60;
export const TICK_RATE_MS = 100;
export const AGRICULTURE_TICK_RATE_MS = 60000;
export const MARTIAL_DECK_LIMIT = 10;
export const MAGIC_DECK_LIMIT = 5;
export const DRAW_LIMIT = 5;
export const AGILITY_LEVELS_FOR_STAMINA_BONUS = 15;

export const SKILL_AND_MENU_ICON_STYLE: IconStylePrimitive = {
  strokeWidth: 1,
};

export const TASK_AND_ITEM_ICON_STYLE: IconStylePrimitive = {
  strokeWidth: 0.5,
};

export const COMBATANT_ICON_STYLE: IconStylePrimitive = {
  strokeWidth: 1.5,
};

export const CONTAINER_LEVEL_REQUIREMENTS = {
  [PlotId.PLOT_ONE]: 1,
  [PlotId.PLOT_TWO]: 5,
  [PlotId.PLOT_THREE]: 10,
  [PlotId.PLOT_FOUR]: 20,
  [PlotId.PLOT_FIVE]: 30,
  [PlotId.PLOT_SIX]: 40,
  [PlotId.PLOT_SEVEN]: 50,
  [PlotId.PLOT_EIGHT]: 60,
  [PastureId.PASTURE_ONE]: 1,
  [PastureId.PASTURE_TWO]: 5,
  [PastureId.PASTURE_THREE]: 10,
  [PastureId.PASTURE_FOUR]: 20,
  [PastureId.PASTURE_FIVE]: 30,
  [PastureId.PASTURE_SIX]: 40,
  [PastureId.PASTURE_SEVEN]: 50,
  [PastureId.PASTURE_EIGHT]: 60,
};
