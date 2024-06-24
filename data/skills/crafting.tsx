import { PencilRuler } from "lucide-react";
import { Skill } from "./skills";

export const crafting: Skill = {
  id: "crafting",
  name: "Crafting",
  description: "The ability to create accessories.",
  icon: PencilRuler,
  tasks: {
    necklaces: [],
  },
};
