import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Combatant } from "@/data/combatants/combatants";
import CombatantCard from "./combatantCard";


export default function ArenaRow({combatants, style} : { combatants: Combatant[], style?: "sm" | "lg" }) {

    let height = "h-80"
    if (style === "sm") {
        height = "h-64"
    }

    return (
        <Card className={"flex w-full " + height}>
            <CardContent className="flex items-center p-0 space-x-6 justify-center w-full h-full">
                {combatants.map((combatant, id) => <CombatantCard key={id} combatant={combatant}></CombatantCard>)}
            </CardContent>
        </Card>
  );
}
