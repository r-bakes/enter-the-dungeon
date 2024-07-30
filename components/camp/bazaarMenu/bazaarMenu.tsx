import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectGroup,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { renderIcon } from "@/data/gameObject";
import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import { formatCapitalCase } from "@/engines/utils/formattingUtilities";
import React from "react";
import { BazaarStores } from "@/data/menus/types";
import { bazaar } from "@/data/menus/bazaar";
import UpgradesStoreMenu from "./upgradesStoreMenu";
import { generateUpgradeOptions } from "@/engines/utils/bazaarStateUtilities";

export default function BazaarMenu() {
  const defaultCategory = BazaarStores.UPGRADES;
  const { character } = useCharacterEngineContext();
  const [selectedStore, setSelectedStore] =
    React.useState<BazaarStores>(defaultCategory);

  let upgradeStoreContent = generateUpgradeOptions(
    character.upgrades,
    character.milestones,
  );

  const storeMenu = {
    [BazaarStores.UPGRADES]: (
      <UpgradesStoreMenu upgrades={upgradeStoreContent}></UpgradesStoreMenu>
    ),
  };

  return (
    <div className="flex h-full w-full flex-col gap-6 px-8">
      <Card className="w-full items-center">
        <CardHeader className="flex w-full flex-row items-center">
          {renderIcon(bazaar.icon, 44, {
            ...bazaar.iconStyle,
          })}
          <div className="flex flex-col pl-4">
            <CardTitle>{bazaar.name}</CardTitle>
            <CardDescription>{bazaar.description}</CardDescription>
          </div>
        </CardHeader>
      </Card>
      <div className="flex h-full w-full flex-row gap-6">
        <div className="w-0 border-4 shadow-sm"></div>
        <div className="flex h-full grow flex-col">
          <Select
            defaultValue={defaultCategory}
            onValueChange={(value: BazaarStores) => {
              setSelectedStore(value);
            }}
          >
            <SelectTrigger className="mb-2 w-full font-normal text-muted-foreground">
              <SelectValue></SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {Object.entries(BazaarStores).map(([categoryId, category]) => (
                  <SelectItem
                    className="font-light text-muted-foreground"
                    key={categoryId}
                    value={category}
                  >
                    {formatCapitalCase(category)}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className="flex w-full flex-col gap-2 overflow-y-scroll">
            {storeMenu[selectedStore]}
          </div>
        </div>
      </div>
    </div>
  );
}
