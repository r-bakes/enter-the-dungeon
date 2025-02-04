import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { renderIcon } from "@/features/common/utils/formattingUtilities";
import { GameObject } from "@/types/gameObjects";

export default function MenuButton({
  menu,
  isSelected,
  level,
  onClick,
}: Readonly<{
  menu: GameObject;
  isSelected: boolean;
  level?: number;
  onClick: React.Dispatch<React.SetStateAction<any>>;
}>) {
  let extraFormat = isSelected
    ? "font-medium bg-slate-900 border-l-2 border-white rounded-none"
    : "font-normal";

  return (
    <Button
      className={
        "flex h-10 w-full gap-2 rounded-none px-5 text-center hover:rounded-none hover:bg-slate-900 " +
        extraFormat
      }
      onClick={onClick}
      variant="ghost"
    >
      {renderIcon(menu.icon, 24, { ...menu.iconStyle, color: "white" })}
      <Label className="text-xs text-white">{menu.name}</Label>
      <div className="flex grow justify-end">
        {level ? (
          <Label className="text-xs text-muted-foreground text-white">
            ({level} / 60)
          </Label>
        ) : (
          <></>
        )}
      </div>
    </Button>
  );
}
