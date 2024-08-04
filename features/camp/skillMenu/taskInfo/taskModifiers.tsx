import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { SkillModifierType } from "@/data/modifiers/enums";
import { SkillModifierIcons } from "@/data/modifiers/skillModifiers";
import { SkillModifier } from "@/types/modifiers";
import { formatCapitalCase, renderIcon } from "@/utils/formattingUtilities";

export default function TaskModifiers({
  data,
}: Readonly<{ data: SkillModifier }>) {
  if (Object.entries(data).length === 0) {
    return <></>;
  }

  return (
    <div className="flex flex-col gap-1">
      <Label className="text-xs font-light text-muted-foreground">
        modifiers
      </Label>
      {Object.entries(data).map(([type, value]) => (
        <Card key={type} className="flex w-full justify-between p-2">
          <div className="flex h-full items-center gap-1">
            {renderIcon(
              SkillModifierIcons[type as SkillModifierType].icon,
              24,
              {
                ...SkillModifierIcons[type as SkillModifierType].iconStyle,
                strokeOpacity: 1,
              },
            )}
            <Label className="text-xs font-medium">
              {type !== SkillModifierType.PRODUCTION_MULTIPLIER
                ? "+" + value + "%"
                : "x" + value}
            </Label>
            <Label className="text-xs font-normal text-muted-foreground">
              {formatCapitalCase(type)}
            </Label>
          </div>
        </Card>
      ))}
    </div>
  );
}
