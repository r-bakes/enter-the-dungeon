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
import React from "react";
import UpgradeCard from "./upgradeCard";
import { home } from "@/data/menus/home";
import { Lock } from "lucide-react";
import { Label } from "@/components/ui/label";
import { HomeRooms } from "@/data/menus/enums";
import { upgradeTable } from "@/data/upgrades/upgrades";
import {
  formatCapitalCase,
  renderIcon,
} from "@/features/common/utils/formattingUtilities";
import { TASK_AND_ITEM_ICON_STYLE } from "@/configurations/configurations";

export default function HomeMenu() {
  const defaultRoom = HomeRooms.TOOL_SHED;
  const { character } = useCharacterEngineContext();
  const [selectedRoom, setSelectedRoom] =
    React.useState<HomeRooms>(defaultRoom);

  let selectedRoomUpgrades = Array.from(character.upgrades).filter(
    (upgradeId) =>
      upgradeTable[upgradeId].homeRoom === selectedRoom &&
      !(
        upgradeTable[upgradeId].next &&
        character.upgrades.has(upgradeTable[upgradeId].next!)
      ),
  );

  return (
    <div className="flex h-full w-full flex-col gap-4 px-4 md:gap-6 md:px-8">
      <Card className="w-full items-center">
        <CardHeader className="flex flex-row items-center">
          <div className="lg:hidden">
            {renderIcon(home.icon, 32, home.iconStyle)}
          </div>
          <div className="hidden lg:block">
            {renderIcon(home.icon, 44, home.iconStyle)}
          </div>
          <div className="m-0 flex flex-col pl-3 lg:pl-4">
            <CardTitle className="text-sm lg:text-base">{home.name}</CardTitle>
            <CardDescription className="text-sm lg:text-sm">
              {home.description}
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
      <div className="flex h-full w-full flex-col gap-4 md:gap-6 lg:flex-row">
        <div className="hidden w-0 border-4 shadow-xs lg:block"></div>

        <div className="flex h-full grow flex-col items-center lg:w-full lg:items-stretch">
          <Select
            defaultValue={defaultRoom}
            onValueChange={(value: HomeRooms) => {
              setSelectedRoom(value);
            }}
          >
            <SelectTrigger className="text-muted-foreground mx-auto mb-2 w-full font-normal lg:mx-0 lg:max-w-none">
              <SelectValue></SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {Object.entries(HomeRooms).map(([roomId, room]) => (
                  <SelectItem
                    className="text-muted-foreground w-full font-normal"
                    key={roomId}
                    value={room}
                  >
                    {formatCapitalCase(room)}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className="flex h-full w-full max-w-full flex-col items-center gap-1 overflow-y-auto lg:items-stretch">
            {selectedRoomUpgrades.length > 0 ? (
              selectedRoomUpgrades.map((upgradeId) => (
                <UpgradeCard
                  key={upgradeId}
                  upgrade={upgradeTable[upgradeId]}
                ></UpgradeCard>
              ))
            ) : (
              <div className="mx-auto flex h-full w-full flex-col items-center gap-4 pt-16 lg:mx-0 lg:max-w-none lg:pt-32">
                <div className="lg:hidden">
                  {renderIcon(Lock, 80, {
                    fill: "none",
                    ...TASK_AND_ITEM_ICON_STYLE,
                  })}
                </div>
                <div className="hidden lg:block">
                  {renderIcon(Lock, 140, {
                    fill: "none",
                    ...TASK_AND_ITEM_ICON_STYLE,
                  })}
                </div>
                {selectedRoom === HomeRooms.TROPHY_ROOM ? (
                  <Label className="text-center text-sm lg:text-base">
                    Progress more to unlock trophies.
                  </Label>
                ) : (
                  <Label className="text-center text-sm lg:text-base">
                    Purchase home upgrades from the Grand Marketplace.
                  </Label>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
