import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { LEVEL_CAP } from "@/configurations/configurations";
import { Skill } from "@/types/skills";
import { requiredExpForLevelUp } from "@/utils/charaterStateUtilities";

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
      <CardHeader className="flex min-w-max flex-row items-center gap-4">
        <skill.icon size={44} strokeWidth={1}></skill.icon>
        <div className="mr-6 flex min-w-max flex-col gap-1">
          <CardTitle>{skill.name}</CardTitle>
          <CardDescription className="font-normal">
            {skill.description}
          </CardDescription>
        </div>
        <div className="flex min-w-max flex-col">
          <CardTitle>
            {skillLevel} / {LEVEL_CAP}
          </CardTitle>
          <CardDescription className="font-normal">Level</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 pb-0">
        <Progress
          className="h-3 w-full rounded-sm"
          value={(expGainedAtLevel / expRemainingForLevelUp) * 100}
        ></Progress>
        <CardDescription className="font-normal">
          {skillExperience + " / " + requiredExpForLevelUp(skillLevel)}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
