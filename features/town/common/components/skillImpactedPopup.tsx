import { Button } from "@/components/ui/button";
import { Card, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Skill } from "@/types/Skill";
import { Upgrade } from "@/types/upgrades";
import { formatCapitalCase, renderIcon } from "@/utils/formattingUtilities";
import { formatModifiers } from "@/utils/modifierUtilities";

export function SkillImpactedPopup({
  skill,
  taskIds,
  upgrade,
}: Readonly<{
  skill: Skill;
  taskIds: string[];
  upgrade: Upgrade;
}>) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Card className="flex p-0">
          <Button
            variant="ghost"
            className="flex h-full flex-row gap-2 px-4 py-2"
          >
            {renderIcon(skill.icon, 32, { ...skill.iconStyle })}
            <div className="flex h-full flex-col justify-center text-left">
              <CardDescription className="text-xs font-black text-foreground">
                {skill.name}
              </CardDescription>
              <CardDescription className="text-xs">impacted</CardDescription>
            </div>
          </Button>
        </Card>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex h-full w-full flex-col gap-4">
          <div className="flex h-full w-full flex-col gap-2">
            <Label className="text-xs font-normal text-muted-foreground">
              Production Modifiers
            </Label>
            <div className="flex flex-col gap-1">
              {Object.entries(upgrade.modifier.values).map(([type, value]) => {
                return (
                  <Card
                    key={type}
                    className="flex flex-row items-center justify-center gap-1 p-2"
                  >
                    <Label className="text-xs font-medium">
                      {formatModifiers(value, type)}
                    </Label>
                    <Label className="text-xs font-normal text-muted-foreground">
                      {formatCapitalCase(type)}
                    </Label>
                  </Card>
                );
              })}
            </div>
          </div>
          <div className="flex h-full w-full flex-col gap-2">
            <Label className="text-xs font-normal text-muted-foreground">
              Tasks Impacted
            </Label>
            <div className="flex flex-col gap-1 overflow-y-scroll">
              {taskIds.length < Object.keys(skill.tasks).length ? (
                taskIds.map((taskId) => {
                  let task = skill.tasks[taskId];
                  return (
                    <Card
                      key={taskId}
                      className="flex flex-row items-center gap-2 p-2"
                    >
                      {renderIcon(task.icon, 24, task.iconStyle)}
                      <Label className="text-xs font-normal text-muted-foreground">
                        {formatCapitalCase(task.name)}
                      </Label>
                    </Card>
                  );
                })
              ) : (
                <div className="w-full justify-center text-center">
                  <Label>All tasks impacted</Label>
                </div>
              )}
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
