import { ScrollArea } from "@radix-ui/react-scroll-area";
import MenuButton from "./menuButton";
import { useCampEngineContext } from "@/engine/campEngineContext";
import { GameObject } from "@/data/gameObject";
import { useCharacterEngineContext } from "@/engine/characterEngineContext";
import { martial } from "@/data/skills/martial";
import { magic } from "@/data/skills/magic";

export default function MenuContainer({
  menuItems,
  selectedMenu,
  setSelectedMenu,
}: {
  menuItems: Array<GameObject>;
  selectedMenu: GameObject;
  setSelectedMenu: React.Dispatch<React.SetStateAction<GameObject>>;
}) {
  const { character } = useCharacterEngineContext();
  return (
    <ScrollArea className="flex flex-col w-full">
      {menuItems.map((item) => {
        let level =
          item.id in character.skills
            ? character.skills[item.id].level
            : undefined;
        return (
          <MenuButton
            level={level}
            menu={item}
            isSelected={
              item.name === selectedMenu.name ||
              ([martial.name, magic.name].includes(selectedMenu.name) &&
                [martial.name, magic.name].includes(item.name))
            }
            key={item.id}
            onClick={() => setSelectedMenu(item)}
          ></MenuButton>
        );
      })}
    </ScrollArea>
  );
}
