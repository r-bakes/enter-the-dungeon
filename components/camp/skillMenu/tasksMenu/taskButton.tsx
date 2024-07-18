import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Task } from "@/data/skills/skills";
import { renderIcon } from "@/data/gameObject";

export default function TaskButton({
  task,
  onClick,
}: Readonly<{
  task: Task;
  onClick: React.Dispatch<React.SetStateAction<any>>;
}>) {
  return (
    <Card className="flex w-full min-w-max">
      <Button
        className="flex h-full w-full flex-col items-start justify-start py-4"
        onClick={onClick}
        variant="ghost"
      >
        <CardHeader className="flex w-full flex-row items-center justify-between gap-6 p-0">
          <div className="flex h-full flex-row gap-4">
            {renderIcon(task.icon, 40, {
              ...task.iconStyle,
            })}
            <div className="flex h-full flex-col text-left">
              <CardTitle className="text-base">{task.name}</CardTitle>
              <CardDescription className="p-0 text-left text-xs">
                {task.description}
              </CardDescription>
            </div>
          </div>
          <div className="flex h-full flex-col">
            <div className="flex w-full gap-1">
              <Label className="text-xs">{task.durationSec}</Label>
              <Label className="text-xs font-extralight text-muted-foreground">
                seconds
              </Label>
            </div>
            <div className="flex w-full gap-1">
              <Label className="text-xs">{task.experience} </Label>
              <Label className="text-xs font-extralight text-muted-foreground">
                experience
              </Label>
            </div>
          </div>
        </CardHeader>
      </Button>
    </Card>
  );
}
