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
