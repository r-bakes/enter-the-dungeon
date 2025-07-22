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
  isSelected = false,
}: Readonly<{
  task: Task;
  onClick: React.Dispatch<React.SetStateAction<any>>;
  isSelected?: boolean;
}>) {
  const { applySpeedModifier, applyExperienceModifier } = useModifierActions();

  return (
    <Card className="flex h-16 md:h-16 w-full lg:min-w-max">
      <Button
        className={`flex h-full w-full flex-col items-center py-3 md:py-4 ${isSelected ? 'bg-accent text-accent-foreground' : ''}`}
        onClick={onClick}
        variant="ghost"
      >
        <CardHeader className="flex w-full flex-row justify-between gap-3 md:gap-6 p-0">
          <div className="flex h-full flex-row items-center gap-2 md:gap-4 min-w-0 flex-1">
            {renderIcon(task.icon, 32, {
              ...task.iconStyle,
            })}
            <div className="flex h-full flex-col gap-0.5 text-left min-w-0 flex-1">
              <CardTitle className="text-sm md:text-base leading-tight truncate lg:whitespace-normal lg:overflow-visible">{task.name}</CardTitle>
              <CardDescription className="text-xs font-normal leading-tight truncate lg:whitespace-normal lg:overflow-visible">
                {task.description}
              </CardDescription>
            </div>
          </div>
          <div className="flex h-full flex-col justify-center min-w-0 shrink-0">
            <div className="flex w-full gap-1 justify-end">
              <Label className="text-xs">{applySpeedModifier(task.id)}</Label>
              <Label className="text-xs font-normal text-muted-foreground">
                seconds
              </Label>
            </div>
            <div className="flex w-full gap-1 justify-end">
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
