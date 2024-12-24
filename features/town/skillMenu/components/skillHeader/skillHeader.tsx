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
import { Skill } from "@/types/Skill";
import { requiredExpForLevelUp } from "@/utils/characterStateUtilities";
import { formatRoundedQuantity } from "@/utils/formattingUtilities";
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
    <Card className="flex h-40 min-h-40 w-full flex-col">
      <CardHeader className="flex min-w-max flex-row items-center justify-between gap-4">
        <div className="flex gap-4">
          <skill.icon size={44} strokeWidth={1}></skill.icon>
          <div className="mr-6 flex min-w-max flex-col">
            <CardTitle>{skill.name}</CardTitle>
            <CardDescription className="font-normal">
              {skill.description}
            </CardDescription>
          </div>
          <div className="mr-6 flex min-w-max flex-col">
            <CardTitle>
              {skillLevel} / {LEVEL_CAP}
            </CardTitle>
            <CardDescription className="font-normal">Level</CardDescription>
          </div>
        </div>
        <div className="flex min-w-max flex-col">
          <Button className="h-11 w-11 p-0" variant="outline">
            <FlaskRound strokeWidth={1.5}></FlaskRound>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 pb-0">
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
