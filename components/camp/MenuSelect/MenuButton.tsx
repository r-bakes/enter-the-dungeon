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
        "flex text-center gap-2 px-5 w-full h-10 hover:bg-red-700/30 " +
        extraFormat
      }
      onClick={onClick}
      variant="ghost"
    >
      {renderIcon(menu.icon, {
        ...menu.iconStyle,
        size: 24,
        strokeWidth: 1,
        color: "white",
      })}
      <Label className="text-xs text-white">{menu.name}</Label>
      <div className="flex grow justify-end ">
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
