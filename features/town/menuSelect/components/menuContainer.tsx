import { ScrollArea } from "@radix-ui/react-scroll-area";
import { useCharacterEngineContext } from "@/engines/characterEngineContext";
import MenuButton from "@/features/town/menuSelect/components/menuButton";
import { MenuId } from "@/data/menus/enums";
import { menuTable } from "@/data/menus/menus";
import { SkillId } from "@/data/skills/enums";
import { useMenuEngineContext } from "@/engines/menuEngineContext";

export default function MenuContainer({
  menuItems,
}: Readonly<{
  menuItems: Array<MenuId>;
}>) {
  const { character } = useCharacterEngineContext();
  const { selectedMenu, setSelectedMenu } = useMenuEngineContext();

  return (
    <ScrollArea className="flex w-full flex-col">
      {menuItems.map((menuId) => {
        let menu = menuTable[menuId];
        let level =
          menuId in SkillId
            ? character.skills[menuId as unknown as SkillId].level
            : undefined;
        return (
          <MenuButton
            level={level}
            menu={menu.data}
            isSelected={
              menuId === selectedMenu ||
              ([MenuId.MARTIAL, MenuId.MAGIC].includes(selectedMenu) &&
                [MenuId.MARTIAL, MenuId.MAGIC].includes(menuId))
            }
            key={menuId}
            onClick={() => setSelectedMenu(menuId)}
          ></MenuButton>
        );
      })}
    </ScrollArea>
  );
}
