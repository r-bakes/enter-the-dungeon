import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { LEVEL_CAP } from "@/configurations/configurations";
import { requiredExpForLevelUp } from "@/features/common/experience/utils/experienceUtils";
import { formatRoundedQuantity } from "@/features/common/utils/formattingUtilities";
import { Skill } from "@/types/skills";
import { FlaskRound } from "lucide-react";

export function SkillHeader({
  skill,
  skillLevel,
  skillExperience,
}: Readonly<{
  skill: Skill;
  skillLevel: number;
  skillExperience: number;
}>) {
  let expGainedAtLevel =
    skillExperience - requiredExpForLevelUp(skillLevel - 1);
  let expRemainingForLevelUp =
    requiredExpForLevelUp(skillLevel) - requiredExpForLevelUp(skillLevel - 1);

  return (
    <Card className="flex w-full flex-col">
      <CardHeader className="flex w-full flex-row items-center justify-between gap-2 p-4 lg:gap-4 lg:p-6">
        <div className="flex min-w-0 flex-1 gap-2 lg:gap-4">
          <skill.icon
            size={32}
            strokeWidth={1}
            className="shrink-0 lg:hidden"
          ></skill.icon>
          <skill.icon
            size={44}
            strokeWidth={1}
            className="hidden shrink-0 lg:block"
          ></skill.icon>
          <div className="mr-2 flex min-w-0 flex-1 flex-col lg:mr-4">
            <CardTitle className="truncate text-sm lg:text-xl">
              {skill.name}
            </CardTitle>
            <CardDescription className="line-clamp-1 text-xs font-normal lg:line-clamp-2 lg:text-sm">
              {skill.description}
            </CardDescription>
          </div>
          <div className="mr-2 flex shrink-0 flex-col lg:mr-4">
            <CardTitle className="text-sm lg:text-xl">
              {skillLevel} / {LEVEL_CAP}
            </CardTitle>
            <CardDescription className="text-xs font-normal lg:text-sm">
              Level
            </CardDescription>
          </div>
        </div>
        <div className="flex shrink-0 flex-col">
          <Button className="h-8 w-8 p-0 lg:h-11 lg:w-11" variant="outline">
            <FlaskRound
              strokeWidth={1.5}
              size={16}
              className="lg:hidden"
            ></FlaskRound>
            <FlaskRound
              strokeWidth={1.5}
              size={24}
              className="hidden lg:block"
            ></FlaskRound>
          </Button>
        </div>
      </CardHeader>

      {/* Mobile: Compact experience bar */}
      <CardContent className="flex flex-col px-4 pt-0 pb-4 lg:hidden">
        <Progress
          className="h-1.5 w-full rounded-sm"
          value={(expGainedAtLevel / expRemainingForLevelUp) * 100}
        ></Progress>
      </CardContent>

      {/* Desktop: Full experience section */}
      <CardContent className="hidden flex-col gap-2 pb-4 lg:flex">
        <Progress
          className="h-3 w-full rounded-sm"
          value={(expGainedAtLevel / expRemainingForLevelUp) * 100}
        ></Progress>
        <CardDescription className="font-normal">
          {formatRoundedQuantity(skillExperience) +
            " / " +
            requiredExpForLevelUp(skillLevel)}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
