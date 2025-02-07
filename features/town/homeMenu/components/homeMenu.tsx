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
        character.upgrades.has(upgradeTable[upgradeId].next)
      ),
  );

  return (
    <div className="flex h-full w-full flex-col gap-6 px-8">
      <Card className="w-full items-center">
        <CardHeader className="flex flex-row items-center">
          {renderIcon(home.icon, 44, home.iconStyle)}
          <div className="m-0 flex flex-col pl-4">
            <CardTitle>{home.name}</CardTitle>
            <CardDescription>{home.description}</CardDescription>
          </div>
        </CardHeader>
      </Card>
      <div className="flex h-full w-full flex-row gap-6">
        <div className="w-0 border-4 shadow-xs"></div>

        <div className="flex h-full grow flex-col">
          <Select
            defaultValue={defaultRoom}
            onValueChange={(value: HomeRooms) => {
              setSelectedRoom(value);
            }}
          >
            <SelectTrigger className="mb-2 w-full font-normal text-muted-foreground">
              <SelectValue></SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {Object.entries(HomeRooms).map(([roomId, room]) => (
                  <SelectItem
                    className="font-normal text-muted-foreground"
                    key={roomId}
                    value={room}
                  >
                    {formatCapitalCase(room)}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className="flex h-full w-full flex-col gap-2 overflow-y-scroll">
            {selectedRoomUpgrades.length > 0 ? (
              selectedRoomUpgrades.map((upgradeId) => (
                <UpgradeCard
                  key={upgradeId}
                  upgrade={upgradeTable[upgradeId]}
                ></UpgradeCard>
              ))
            ) : (
              <div className="flex h-full w-full flex-col items-center gap-4 pt-32">
                {renderIcon(Lock, 140, {
                  fill: "none",
                  ...TASK_AND_ITEM_ICON_STYLE,
                })}
                {selectedRoom === HomeRooms.TROPHY_ROOM ? (
                  <Label>Progress more to unlock trophies.</Label>
                ) : (
                  <Label>
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
