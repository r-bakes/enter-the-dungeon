import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { renderIcon } from "@/data/gameObject";
import { Upgrade } from "@/data/modifiers/upgrades";
import { skillTable } from "@/data/skills/skills";
import { formatCapitalCase } from "@/engine/utils/formattingUtilities";

export default function UpgradeCard({ upgrade }: { upgrade: Upgrade }) {
  return (
    <Card className="flex w-full min-w-max p-4">
      <CardHeader className="flex w-full flex-row items-center justify-between p-0">
        <div className="flex h-full">
          <div className="flex h-full w-60 gap-4">
            {renderIcon(upgrade.icon, 40, { ...upgrade.iconStyle })}
            <div className="flex h-full flex-col">
              <CardTitle className="text-base">{upgrade.name}</CardTitle>
              <CardDescription className="p-0 text-left text-xs">
                {upgrade.description}
              </CardDescription>
            </div>
          </div>
          <div className="mt-0 flex h-full w-56 flex-col">
            <CardTitle className="text-base">
              {Object.keys(upgrade.modifier.targets)
                .map((skillId) => skillTable[skillId])
                .map((skill) => skill.name)
                .join("| ")}
            </CardTitle>
            <CardDescription className="p-0 text-left text-xs">
              impacted
            </CardDescription>
          </div>
        </div>
        {Object.entries(upgrade.modifier.values).map(([type, value]) => (
          <div key={type} className="flex h-full flex-col">
            <CardTitle className="text-base">+{value}%</CardTitle>
            <CardDescription className="p-0 text-left text-xs">
              {formatCapitalCase(type)}
            </CardDescription>
          </div>
        ))}
      </CardHeader>
    </Card>
  );
}
