import { PersonStanding } from "lucide-react";
import { Skill, Task } from "./skills";

const jumpingJacks: Task = {
  id: "jumpingJacks",
  name: "Jumping Jacks",
  description: "Do jumping jacks.",
  icon: PersonStanding,
  durationSec: 10,
  experience: 1,
  requiredLevel: 1,
  lootTable: {
    _: {
      _: { weight: 100, minQuantity: 0, maxQuantity: 0 },
    },
  },
};

export const agility: Skill = {
  id: "agility",
  name: "Agility",
  description: "The ability to perform physically.",
  icon: PersonStanding,
  tasks: {
    workouts: [jumpingJacks],
  },
};
