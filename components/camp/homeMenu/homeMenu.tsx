import {
  Card,
  CardContent,
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
import { home, HomeRooms } from "@/data/menus/home";
import { useCharacterEngineContext } from "@/engine/characterEngineContext";
import { formatCapitalCase } from "@/engine/utils/formattingUtilities";
import React from "react";
import TaskButton from "../skillMenu/tasksMenu/taskButton";
import { upgradeTable } from "@/data/upgrades/upgrade";
import UpgradeCard from "./upgradeCard";

export default function HomeMenu() {
  const defaultRoom = HomeRooms.TOOL_SHED;
  const { character } = useCharacterEngineContext();
  const [selectedRoom, setSelectedRoom] = React.useState(defaultRoom);

  return (
    <div className="flex h-full w-full flex-col px-8">
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
      <Select
        defaultValue={defaultRoom}
        onValueChange={(value) => {
          setSelectedRoom(value);
        }}
      >
        <SelectTrigger className="mb-2 mt-6 w-full font-light text-muted-foreground">
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
      <ScrollArea>
        <div className="flex w-full flex-col gap-2">
          {character.upgrades
            .filter(
              (upgradeId) => upgradeTable[upgradeId].homeRoom === selectedRoom,
            )
            .map((upgradeId) => (
              <UpgradeCard
                key={upgradeId}
                upgrade={upgradeTable[upgradeId]}
              ></UpgradeCard>
            ))}
        </div>
        <ScrollBar orientation="vertical"></ScrollBar>
      </ScrollArea>
    </div>
  );
}
