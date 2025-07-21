import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Upgrade } from "@/types/upgrades";
import {
  formatCapitalCase,
  renderIcon,
} from "@/features/common/utils/formattingUtilities";
import { formatModifier } from "../../modifiers/utils/modifier";
import { Label } from "@/components/ui/label";

export default function UpgradeCard({
  upgrade,
}: Readonly<{ upgrade: Upgrade }>) {
  return (
    <Card className="mx-auto flex h-auto min-h-max w-full items-center p-3 lg:mx-0 lg:h-16 lg:max-w-none lg:px-4 lg:py-3">
      <CardHeader className="flex h-full w-full flex-col items-center gap-3 p-0 lg:flex-row lg:items-center lg:justify-between lg:gap-4">
        <div className="flex w-full items-center justify-center gap-2 lg:w-auto lg:justify-start lg:gap-3">
          <div className="flex items-start gap-3">
            {renderIcon(upgrade.icon, 32, { ...upgrade.iconStyle })}
            <div className="flex min-w-0 flex-1 flex-col justify-center gap-0.5 text-left lg:flex-none lg:text-left">
              <CardTitle className="text-sm leading-tight break-words lg:text-sm">
                {upgrade.name}
              </CardTitle>
              <CardDescription className="p-0 text-xs leading-tight break-words">
                {upgrade.description}
              </CardDescription>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-wrap items-center justify-center gap-x-3 gap-y-1 lg:w-auto lg:flex-col lg:items-end lg:gap-1">
          {Object.entries(upgrade.modifier.values).map(([type, value]) => (
            <div
              key={type}
              className="flex items-center gap-1 whitespace-nowrap"
            >
              <Label className="text-xs font-medium">
                {formatModifier(value, type)}
              </Label>
              <Label className="text-muted-foreground text-xs font-normal">
                {formatCapitalCase(type)}
              </Label>
            </div>
          ))}
        </div>
      </CardHeader>
    </Card>
  );
}
