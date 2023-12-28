import { Label } from "@/components/ui/label";

export default function Logo({}: {}) {
  return (
    <div className="flex h-24 pl-10 border-r border-gray-800">
      <Label className="font-extrabold text-gray-800 text-4xl">
        Enter the Dungeon
      </Label>
    </div>
  );
}
