import { Button } from "@/components/ui/button";
import { GameObject, renderIcon } from "@/data/gameObject";
import { Label } from "@radix-ui/react-label";

export default function MenuButton({
  menu,
  isSelected,
  level,
  onClick,
}: {
  menu: GameObject;
  isSelected: boolean;
  level?: number;
  onClick: React.Dispatch<React.SetStateAction<any>>;
}) {
  let extraFormat = isSelected
    ? "font-normal bg-red-700/30 border-l-2 border-white rounded-none"
    : "font-light";

  return (
    <Button
      className={
        "flex h-10 w-full gap-2 px-5 text-center hover:bg-red-700/30 " +
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
