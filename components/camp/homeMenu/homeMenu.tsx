import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
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
import UpgradeCard from "./upgradeCard";
import { upgradeTable } from "@/data/modifiers/upgrades";
import { HomeRooms } from "@/data/menus/types";
import { home } from "@/data/menus/home";
import { Ellipsis, Lock } from "lucide-react";
import { TASK_AND_ITEM_ICON_STYLE } from "@/data/configurations";
import { Label } from "@/components/ui/label";

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
        <CardHeader className="flex w-full flex-row items-center">
          {renderIcon(home.icon, 44, {
            ...home.iconStyle,
          })}
          <div className="flex flex-col pl-4">
            <CardTitle>{home.name}</CardTitle>
            <CardDescription>{home.description}</CardDescription>
          </div>
        </CardHeader>
      </Card>
      <div className="flex h-full w-full flex-row gap-6">
        <div className="w-0 border-4 shadow-sm"></div>

        <div className="flex h-full grow flex-col">
          <Select
            defaultValue={defaultRoom}
            onValueChange={(value: HomeRooms) => {
              setSelectedRoom(value);
            }}
          >
            <SelectTrigger className="mb-2 w-full font-light text-muted-foreground">
              <SelectValue></SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {Object.entries(HomeRooms).map(([roomId, room]) => (
                  <SelectItem
                    className="font-light text-muted-foreground"
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
                  <Label>Purchase home upgrades from the Grand Bazaar.</Label>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
