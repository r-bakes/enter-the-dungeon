import { Combatant } from "../combatants/combatants"

export type Encounter = {
    id: string
    difficulty: number
    combatants: Combatant[]
    modifiers: Modifier[]
}

type Modifier = {}