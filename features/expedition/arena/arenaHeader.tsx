import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { MenuId } from "@/data/menus/enums";
import { useMenuEngineContext } from "@/engines/menuEngineContext";

export default function ArenaHeader() {
  const { setSelectedMenu } = useMenuEngineContext();
  return <Button onClick={() => setSelectedMenu(MenuId.HOME)}>Escape!</Button>;
}
