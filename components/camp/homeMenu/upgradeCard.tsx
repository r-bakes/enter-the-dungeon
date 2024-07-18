import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { renderIcon } from "@/data/gameObject";
import { Upgrade } from "@/data/upgrades/upgrade";

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
              {[...upgrade.modifier.skill]
                .map((skill) => skill.name)
                .join("| ")}
            </CardTitle>
            <CardDescription className="p-0 text-left text-xs">
              impacted
            </CardDescription>
          </div>
        </div>
        <div className="flex h-full flex-col">
          <CardTitle className="text-base">
            +{upgrade.modifier.value}%
          </CardTitle>
          <CardDescription className="p-0 text-left text-xs">
            {upgrade.modifier.type.valueOf()}
          </CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
}
