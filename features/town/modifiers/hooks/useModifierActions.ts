import { ModifierType } from "@/data/modifiers/enums";
import { TaskId } from "@/data/tasks/enum";
import { taskTable } from "@/data/tasks/tasks";
import { Loot } from "@/types/loot";
import { ItemId } from "@/data/items/enums";
import { useModifierEngineContext } from "@/engines/modifierEngineContext";

export const useModifierActions = () => {
  const { modifiers, setModifiers } = useModifierEngineContext();

  const roundModifiedValue = (value: number): number => {
    return Math.round(value * 100) / 100;
  };

  const applySpeedModifier = (taskId: TaskId): number => {
    let modifier = modifiers[taskId][ModifierType.SPEED];
    let duration = taskTable[taskId].durationSec;

    if (!modifier) {
      return duration;
    }

    return roundModifiedValue(duration * (1 - modifier / 100));
  };

  const applyExperienceModifier = (taskId: TaskId): number => {
    let modifier = modifiers[taskId][ModifierType.EXPERIENCE];
    let amount = taskTable[taskId].experience;

    if (!modifier) {
      return amount;
    }

    return roundModifiedValue(amount + (amount * modifier) / 100);
  };

  const applyProductionModifier = (taskId: TaskId, loot: Loot): Loot => {
    let modifier = modifiers[taskId][ModifierType.PRODUCTION_MULTIPLIER];

    if (!modifier) {
      return loot;
    }
    Object.entries(loot).forEach(
      ([itemId, amount]) => (loot[itemId as ItemId] = amount * modifier),
    );
    return loot;
  };

  return {
    applySpeedModifier,
    applyExperienceModifier,
    applyProductionModifier,
  };
};
