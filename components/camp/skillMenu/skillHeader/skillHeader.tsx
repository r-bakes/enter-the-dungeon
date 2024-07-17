import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { LEVEL_CAP } from "@/data/configurations";
import { Skill } from "@/data/skills/skills";
import { requiredExpForLevelUp } from "@/engine/utils/charaterStateUtilities";

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
    <Card className="flex h-40 w-full flex-col min-h-40">
      <CardHeader className="flex min-w-max flex-row items-center gap-4">
        <skill.icon size={44} strokeWidth={1}></skill.icon>
        <div className="mr-6 flex min-w-max flex-col">
          <CardTitle>{skill.name}</CardTitle>
          <CardDescription>{skill.description}</CardDescription>
        </div>
        <div className="flex min-w-max flex-col">
          <CardTitle>
            {skillLevel} / {LEVEL_CAP}
          </CardTitle>
          <CardDescription>Level</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <Progress
          className="h-3 w-full rounded-sm"
          value={(expGainedAtLevel / expRemainingForLevelUp) * 100}
        ></Progress>
        <CardDescription>
          {skillExperience + " / " + requiredExpForLevelUp(skillLevel)}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
