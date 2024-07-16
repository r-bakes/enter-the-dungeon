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
    <Card className="flex flex-col w-full h-60">
      <div className="w-full">
        <CardHeader className="flex flex-row">
          <div className="w-[56px] h-[56px]">
            <skill.icon size={56} strokeWidth={1}></skill.icon>
          </div>
          <div className="flex pl-6 flex-col w-[400px]">
            <CardTitle>{skill.name}</CardTitle>
            <CardDescription>{skill.description}</CardDescription>
          </div>
          <div className="flex pl-6 flex-col w-[150px]">
            <CardTitle>
              {skillLevel} / {LEVEL_CAP}
            </CardTitle>
            <CardDescription>Level</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col grow">
            <Label className="pb-2 text-lg">Experience</Label>
            <Progress
              className="w-full h-4 rounded-sm"
              value={(expGainedAtLevel / expRemainingForLevelUp) * 100}
            ></Progress>
            <CardDescription className="mt-2">
              {skillExperience + " / " + requiredExpForLevelUp(skillLevel)}
            </CardDescription>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
