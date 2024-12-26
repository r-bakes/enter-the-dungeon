import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function LockedTaskButton({
  requiredLevel,
}: Readonly<{ requiredLevel: number }>) {
  return (
    <Card className="flex w-full min-w-max">
      <Button
        className="flex h-full w-full flex-col items-center justify-center p-4"
        disabled={true}
        variant="ghost"
      >
        <CardHeader className="flex flex-col p-0">
          <CardTitle className="text-xl">Locked</CardTitle>
          <CardDescription className="text-left text-xs">
            Requires level {requiredLevel}
          </CardDescription>
        </CardHeader>
      </Button>
    </Card>
  );
}
