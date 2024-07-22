import { Label } from "@/components/ui/label";

export default function TaskDataEntry({
  data,
  label,
}: Readonly<{
  data: number | string;
  label: string;
}>) {
  return (
    <div className="flex gap-2 py-2">
      <Label className="font-medium">{data}</Label>
      <Label className="font-normal text-muted-foreground">{label}</Label>
    </div>
  );
}
