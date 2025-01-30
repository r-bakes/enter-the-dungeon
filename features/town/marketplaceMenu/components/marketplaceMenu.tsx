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
import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import {
  formatCapitalCase,
  renderIcon,
} from "@/features/common/utils/formattingUtilities";
import React from "react";
import { marketplace } from "@/data/menus/marketplace";
import UpgradesStoreMenu from "./upgradesStoreMenu";
import { generateUpgradeOptions } from "@/features/town/marketplaceMenu/services/helpers";
import { MarketplaceStores } from "@/data/menus/enums";

export default function MarcketplaceMenu() {
  const defaultCategory = MarketplaceStores.UPGRADES;
  const { character } = useCharacterEngineContext();
  const [selectedStore, setSelectedStore] =
    React.useState<MarketplaceStores>(defaultCategory);

  let upgradeStoreContent = generateUpgradeOptions(
    character.upgrades,
    character.milestones,
  );

  const storeMenu = {
    [MarketplaceStores.UPGRADES]: (
      <UpgradesStoreMenu upgrades={upgradeStoreContent}></UpgradesStoreMenu>
    ),
  };

  return (
    <div className="flex h-full w-full flex-col gap-6 px-8">
      <Card className="w-full items-center">
        <CardHeader className="flex w-full flex-row items-center">
          {renderIcon(marketplace.icon, 44, {
            ...marketplace.iconStyle,
          })}
          <div className="flex flex-col pl-4">
            <CardTitle>{marketplace.name}</CardTitle>
            <CardDescription>{marketplace.description}</CardDescription>
          </div>
        </CardHeader>
      </Card>
      <div className="flex h-full w-full flex-row gap-6">
        <div className="w-0 border-4 shadow-sm"></div>
        <div className="flex h-full grow flex-col">
          <Select
            defaultValue={defaultCategory}
            onValueChange={(value: MarketplaceStores) => {
              setSelectedStore(value);
            }}
          >
            <SelectTrigger className="mb-2 w-full font-normal text-muted-foreground">
              <SelectValue></SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {Object.entries(MarketplaceStores).map(
                  ([categoryId, category]) => (
                    <SelectItem
                      className="font-light text-muted-foreground"
                      key={categoryId}
                      value={category}
                    >
                      {formatCapitalCase(category)}
                    </SelectItem>
                  ),
                )}
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
