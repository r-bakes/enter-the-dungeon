import { Label } from "@/components/ui/label";

export default function Logo() {
  return (
    <div className="flex h-32 w-full flex-col px-5">
      <Label className="text-4xl font-extrabold text-white">Enter</Label>
      <Label className="text-xl font-bold text-white">the</Label>
      <Label className="text-4xl font-extrabold text-white">Dungeon</Label>
    </div>
  );
}
