import { Label } from "@/components/ui/label";

export default function TaskDataEntry({
  data,
  label,
}: Readonly<{
  data: number | string;
  label: string;
}>) {
  return (
    <div className="flex py-2 gap-2">
      <Label>{data}</Label>
      <Label className="font-light text-muted-foreground ">{label}</Label>
    </div>
  );
}
