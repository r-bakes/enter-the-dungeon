import { Anvil, Bed, Bird, Hammer, Heater, Pickaxe } from "lucide-react";
import { Upgrade } from "@/types/upgrades";
import { pickaxeUpgrades } from "@/data/upgrades/pickaxeUpgrades";
import { hammerUpgrades } from "@/data/upgrades/hammerUpgrades";
import { bedUpgrades } from "@/data/upgrades/bedUpgrades";
import { miscUpgrades } from "./misc";
import { UpgradeId } from "./enums";

export const upgradeTable = {
  ...pickaxeUpgrades,
  ...hammerUpgrades,
  ...bedUpgrades,
  ...miscUpgrades,
} as { [id in UpgradeId]: Upgrade };
