import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { renderIcon } from "@/features/common/utils/formattingUtilities";
import { Task } from "@/types/tasks";
import { useModifierActions } from "@/features/town/modifiers/hooks/useModifierActions";

export default function TaskButton({
  task,
  onClick,
}: Readonly<{
  task: Task;
  onClick: React.Dispatch<React.SetStateAction<any>>;
}>) {
  const { applySpeedModifier, applyExperienceModifier } = useModifierActions();

  return (
    <Card className="flex h-20 w-full min-w-max">
      <Button
        className="flex h-full w-full flex-col items-center py-4"
        onClick={onClick}
        variant="ghost"
      >
        <CardHeader className="flex w-full flex-row justify-between gap-6 p-0">
          <div className="flex h-full flex-row items-center gap-4">
            {renderIcon(task.icon, 44, {
              ...task.iconStyle,
            })}
            <div className="flex h-full flex-col gap-1 text-left">
              <CardTitle className="text-base">{task.name}</CardTitle>
              <CardDescription className="text-left text-xs font-normal">
                {task.description}
              </CardDescription>
            </div>
          </div>
          <div className="flex h-full flex-col justify-center">
            <div className="flex w-full gap-1">
              <Label className="text-xs">{applySpeedModifier(task.id)}</Label>
              <Label className="text-xs font-normal text-muted-foreground">
                seconds
              </Label>
            </div>
            <div className="flex w-full gap-1">
              <Label className="text-xs">
                {applyExperienceModifier(task.id)}
              </Label>
              <Label className="text-xs font-normal text-muted-foreground">
                experience
              </Label>
            </div>
          </div>
        </CardHeader>
      </Button>
    </Card>
  );
}
