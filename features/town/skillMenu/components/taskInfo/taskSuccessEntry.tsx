import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { TASK_AND_ITEM_ICON_STYLE } from "@/configurations/configurations";
import { renderIcon } from "@/features/common/utils/formattingUtilities";
import { EyeClosed } from "lucide-react";

export default function TaskSuccessEntry({
  value,
  description,
}: {
  value: string;
  description: string;
}) {
  return (
    <div>
      <Label className="text-xs font-light text-muted-foreground">
        Success
      </Label>
      <Card className="w-fill flex items-center gap-2 p-2">
        {renderIcon(EyeClosed, 24, {
          ...TASK_AND_ITEM_ICON_STYLE,
        })}
        <div className="flex gap-2">
          <Label className="text-xs font-medium">{value}%</Label>
          <Label className="text-xs font-normal text-muted-foreground">
            {description}
          </Label>
        </div>
      </Card>
    </div>
  );
}
