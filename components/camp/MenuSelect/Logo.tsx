import { Label } from "@/components/ui/label";

export default function Logo({}: {}) {
  return (
    <div className="flex flex-col h-32 px-8 w-64">
      <Label className="font-extrabold text-white text-4xl">
        Enter
      </Label>
      <Label className="font-bold text-white text-xl">
        the
      </Label>
      <Label className="font-extrabold text-white text-4xl">
        Dungeon
      </Label>
    </div>
  );
}
