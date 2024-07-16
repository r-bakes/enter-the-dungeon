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
    <Card className="flex w-[240px] h-[120px]">
      <Button
        className="flex flex-col  w-full h-full items-start justify-start py-4"
        onClick={onClick}
        variant="ghost"
      >
        <CardHeader className="flex w-full flex-col p-0">
          <div className="flex flex-row w-full h-full space-x-3">
            {renderIcon(task.icon, {
              ...task.iconStyle,
              size: 40,
              strokeWidth: 0.5,
              strokeOpacity: 0.5,
              fillOpacity: 0.5,
            })}
            <div className="flex flex-col text-left">
              <CardTitle className="text-base">{task.name}</CardTitle>
              <CardDescription className="text-xs text-left p-0">
                {task.description}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-1 p-0 pt-2 w-full">
          <div className="flex gap-1 w-full">
            <Label className="text-xs">{task.durationSec}</Label>
            <Label className="text-xs font-extralight text-muted-foreground">
              seconds
            </Label>
          </div>
          <div className="flex gap-1 w-full">
            <Label className="text-xs">{task.experience} </Label>
            <Label className="text-xs font-extralight text-muted-foreground">
              experience
            </Label>
          </div>
        </CardContent>
      </Button>
    </Card>
  );
}
