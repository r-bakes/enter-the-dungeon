import { Circle, Gem, Mountain, SearchSlash } from "lucide-react";
import { Skill, Task } from "../GameObject";

const mineCopperOre: Task = {
  id: "mineCopperOre",
  name: "Mine Copper",
  description: "Mine copper ore.",
  icon: Mountain,
  durationSec: 2,
  experience: 1,
  requiredLevel: 1,
  lootTable: {
    ore: { copperOre: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
    geode: {
      _: { weight: 20, minQuantity: 0, maxQuantity: 0 },
      geode: { weight: 1, minQuantity: 1, maxQuantity: 1 },
    },
  },
};
const mineTinOre: Task = {
  id: "mineTinOre",
  name: "Mine Tin",
  description: "Mine tin ore.",
  icon: Mountain,
  durationSec: 2,
  experience: 1,
  requiredLevel: 1,
  lootTable: {
    ore: { tinOre: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
    geode: {
      _: { weight: 20, minQuantity: 0, maxQuantity: 0 },
      geode: { weight: 1, minQuantity: 1, maxQuantity: 1 },
    },
  },
};
const mineCoal: Task = {
  id: "mineCoal",
  name: "Mine Coal",
  description: "Mine coal.",
  icon: Circle,
  durationSec: 2,
  experience: 5,
  requiredLevel: 5,
  lootTable: {
    ore: { coal: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
  },
};
const mineIronOre: Task = {
  id: "mineIronOre",
  name: "Mine Iron",
  description: "Mine iron ore.",
  icon: Mountain,
  durationSec: 2,
  experience: 10,
  requiredLevel: 10,
  lootTable: {
    ore: { ironOre: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
    geode: {
      _: { weight: 20, minQuantity: 0, maxQuantity: 0 },
      geode: { weight: 1, minQuantity: 1, maxQuantity: 1 },
    },
  },
};
const mineSilverOre: Task = {
  id: "mineSilverOre",
  name: "Mine Silver",
  description: "Mine silver ore.",
  icon: Mountain,
  durationSec: 2,
  experience: 20,
  requiredLevel: 20,
  lootTable: {
    ore: { silverOre: { weight: 1, minQuantity: 1, maxQuantity: 1 } },
    geode: {
      _: { weight: 10, minQuantity: 0, maxQuantity: 0 },
      geode: { weight: 1, minQuantity: 1, maxQuantity: 1 },
    },
  },
};
const cutGeode: Task = {
  id: "cutGeode",
  name: "Cut Geode",
  description: "Cut a geode into a gem.",
  icon: Gem,
  durationSec: 8,
  experience: 100,
  requiredLevel: 10,
  lootTable: {
    gems: {
      sapphire: { weight: 20, minQuantity: 1, maxQuantity: 1 },
      emerald: { weight: 10, minQuantity: 1, maxQuantity: 1 },
    },
  },
  requires: { geode: 1 },
};

export const prospecting: Skill = {
  id: "prospecting",
  name: "Prospecting",
  description: "The ability to search for and excavate mineral deposits.",
  icon: SearchSlash,
  tasks: {
    gathering: [
      mineCopperOre,
      mineTinOre,
      mineCoal,
      mineIronOre,
      mineSilverOre,
    ],
    crafting: [cutGeode],
  },
};
