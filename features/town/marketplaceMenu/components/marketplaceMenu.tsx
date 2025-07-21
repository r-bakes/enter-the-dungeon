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
import StoreMenu from "./storeMenu";
import { itemTable } from "@/data/items/items";

export default function MarcketplaceMenu() {
  const defaultCategory = MarketplaceStores.UPGRADES;
  const { character } = useCharacterEngineContext();
  const [selectedStore, setSelectedStore] =
    React.useState<MarketplaceStores>(defaultCategory);

  const upgradeStoreContent = generateUpgradeOptions(
    character.upgrades,
    character.milestones,
  );
  const tradeGoodsItemsForSale = [itemTable.GLASS_VIAL];
  const materialsForSale = [
    itemTable.MANURE,
    itemTable.COMPOST,
    itemTable.GINSENG_SEED,
    itemTable.MANDRAKE_SEED,
    itemTable.SILVERLEAF_SEED,
  ];

  const storeMenu = {
    [MarketplaceStores.UPGRADES]: (
      <UpgradesStoreMenu upgrades={upgradeStoreContent}></UpgradesStoreMenu>
    ),
    [MarketplaceStores.TRADE_GOODS]: (
      <StoreMenu items={tradeGoodsItemsForSale}></StoreMenu>
    ),
    [MarketplaceStores.MATERIALS]: (
      <StoreMenu items={materialsForSale}></StoreMenu>
    ),
  };

  return (
    <div className="flex h-full w-full flex-col gap-4 px-4 lg:gap-6 lg:px-8">
      <Card className="w-full items-center">
        <CardHeader className="flex flex-row items-center">
          <div className="lg:hidden">
            {renderIcon(marketplace.icon, 32, marketplace.iconStyle)}
          </div>
          <div className="hidden lg:block">
            {renderIcon(marketplace.icon, 44, marketplace.iconStyle)}
          </div>
          <div className="m-0 flex flex-col pl-3 lg:pl-4">
            <CardTitle className="text-base lg:text-lg">{marketplace.name}</CardTitle>
            <CardDescription className="text-xs lg:text-sm">{marketplace.description}</CardDescription>
          </div>
        </CardHeader>
      </Card>
      <div className="flex h-full w-full flex-col gap-4 lg:flex-row lg:gap-6">
        <div className="hidden w-0 border-4 shadow-xs lg:block"></div>
        <div className="flex h-full grow flex-col items-center lg:items-stretch lg:w-full">
          <Select
            defaultValue={defaultCategory}
            onValueChange={(value: MarketplaceStores) => {
              setSelectedStore(value);
            }}
          >
            <SelectTrigger className="text-muted-foreground mx-auto mb-2 w-full font-normal lg:mx-0 lg:w-full">
              <SelectValue></SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {Object.entries(MarketplaceStores).map(
                  ([categoryId, category]) => (
                    <SelectItem
                      className="text-muted-foreground font-normal"
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
          <div className="flex h-full w-full flex-col items-center gap-1 overflow-y-auto lg:items-stretch lg:gap-2">
            {storeMenu[selectedStore]}
          </div>
        </div>
      </div>
    </div>
  );
}
