import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { skillTable } from "@/data/skills/skills";
import { SkillImpactedPopup } from "@/features/town/common/components/skillImpactedPopup";
import { Upgrade } from "@/types/upgrades";
import {
  formatCapitalCase,
  renderIcon,
} from "@/features/common/utils/formattingUtilities";
import { SkillId } from "@/data/skills/enums";
import { formatModifier } from "../../modifiers/utils/modifier";

export default function UpgradeCard({
  upgrade,
}: Readonly<{ upgrade: Upgrade }>) {
  return (
    <Card className="flex h-20 w-full min-w-max items-center px-4 py-2">
      <CardHeader className="flex h-full w-full flex-row items-center justify-between p-0">
        <div className="flex h-full">
          <div className="flex h-full w-60 items-center gap-4">
            {renderIcon(upgrade.icon, 44, { ...upgrade.iconStyle })}
            <div className="flex h-full min-w-max flex-col justify-center">
              <CardTitle className="text-base">{upgrade.name}</CardTitle>
              <CardDescription className="p-0 text-left text-xs">
                {upgrade.description}
              </CardDescription>
            </div>
          </div>
          <div className="mx-6 flex h-full max-w-[500px] gap-2 overflow-x-scroll py-2">
            {/* {Object.entries(upgrade.modifier.targets).map( */}
            {/*   ([skillId, taskIds]) => ( */}
            {/*     <SkillImpactedPopup */}
            {/*       key={skillId} */}
            {/*       skill={skillTable[skillId as SkillId]} */}
            {/*       taskIds={taskIds} */}
            {/*       upgrade={upgrade} */}
            {/*     ></SkillImpactedPopup> */}
            {/*   ), */}
            {/* )} */}
          </div>
        </div>
        <div className="flex h-full gap-4">
          {Object.entries(upgrade.modifier.values).map(([type, value]) => (
            <div
              key={type}
              className="flex h-full flex-col items-center justify-center"
            >
              <CardTitle className="text-base">
                {formatModifier(value, type)}
              </CardTitle>
              <CardDescription className="max-w-min p-0 text-center text-xs">
                {formatCapitalCase(type)}
              </CardDescription>
            </div>
          ))}
        </div>
      </CardHeader>
    </Card>
  );
}
