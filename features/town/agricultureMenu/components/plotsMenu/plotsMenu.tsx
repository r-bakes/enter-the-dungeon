import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function PlotsMenu() {
  return (
    <ScrollArea>
      <div className="flex w-full flex-col gap-2"></div>
      <ScrollBar orientation="vertical"></ScrollBar>
    </ScrollArea>
  );
}
