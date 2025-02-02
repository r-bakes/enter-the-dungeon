import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ModifierType } from "@/data/modifiers/enums";
import { ModifierIcons } from "@/data/modifiers/modifiers";
import {
  formatCapitalCase,
  renderIcon,
} from "@/features/common/utils/formattingUtilities";
import { formatModifier } from "@/features/town/modifiers/utils/modifier";
import { Modifier } from "@/types/modifiers";

export default function TaskModifiersEntry({
  data,
}: Readonly<{ data: Modifier }>) {
  if (Object.entries(data).length === 0) {
    return <></>;
  }

  return (
    <div className="flex flex-col gap-1">
      <Label className="text-xs font-light text-muted-foreground">
        Modifiers
      </Label>
      {Object.entries(data).map(([type, value]) => (
        <Card key={type} className="flex w-full justify-between p-2">
          <div className="flex h-full items-center gap-2">
            {renderIcon(ModifierIcons[type as ModifierType].icon, 24, {
              ...ModifierIcons[type as ModifierType].iconStyle,
              strokeOpacity: 1,
            })}
            <div className="flex gap-1">
              <Label className="text-xs font-medium">
                {formatModifier(value, type)}
              </Label>
              <Label className="text-xs font-normal text-muted-foreground">
                {formatCapitalCase(type)}
              </Label>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
