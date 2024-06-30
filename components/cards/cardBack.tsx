import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Label } from "@radix-ui/react-label";

export default function CardBack({
  onClick,
}: Readonly<{
  onClick: React.Dispatch<React.SetStateAction<any>>;
}>) {
  return (
    <Card className="w-40 h-48">
      <Button
        onClick={() => {}}
        className="flex w-full h-full items-start justify-start"
        variant="ghost"
      >
        <CardContent className="flex flex-col w-full h-full justify-start pt-6">
          <Label className=" font-extrabold text-xl ">Enter</Label>
          <Label className="font-extrabold">the</Label>
          <Label className=" font-extrabold text-xl ">Dungeon</Label>
        </CardContent>
      </Button>
    </Card>
  );
}
