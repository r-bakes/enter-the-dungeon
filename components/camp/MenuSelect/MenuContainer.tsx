import { ScrollArea } from "@radix-ui/react-scroll-area";
import MenuButton from "./MenuButton";
import { useCampEngineContext } from "@/engine/CampEngineContext";
import { GameObject } from "@/data/GameObject";
import { useCharacterEngineContext } from "@/engine/CharacterEngineContext";

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
            isSelected={item.name === selectedMenu.name}
            key={item.id}
            onClick={() => setSelectedMenu(item)}
          ></MenuButton>
        );
      })}
    </ScrollArea>
  );
}
