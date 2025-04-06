import React from "react";
import { useExpeditionContext } from "./expeditionEngineContext";
import { useEncounterContext } from "./encounterEngineContext";
import { Combatant } from "@/types/combatants";
import { DrawPhase, EncounterPhase } from "@/data/encounters/enums";
import { DRAW_LIMIT } from "@/configurations/configurations";
import { CombatCard } from "@/types/combatCards";

type AnimaationContextContents = {
  finishTurn: () => void;
  handleEnemyAttackComplete: () => void;
  attackingCombatant: null | Combatant;
  phase: EncounterPhase;
};
const AnimationEngineContext = React.createContext(
  {} as AnimaationContextContents,
);

export const useAnimationEngineContext = (): AnimaationContextContents =>
  React.useContext(AnimationEngineContext);

export default function AnimationEngineProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { characterCombatant, setCharacterCombatant } = useExpeditionContext();
  const {
    hand,
    setHand,
    discardPile,
    setDiscardPile,
    drawPile,
    setDrawPile,
    round,
    setRound,
    stamina,
    setStamina,
    setIsRoundDialogOpen,
    phase,
    setPhase,
    enemyCombatants,
  } = useEncounterContext();

  // NOTE: Player Phase state management

  // NOTE: Enemy phase state management
  const [attackingCombatants, setAttackingCombatants] = React.useState<
    Combatant[]
  >([]);
  const [attackingCombatant, setAttackingCombatant] =
    React.useState<null | Combatant>(null);

  // Initiate phase
  React.useEffect(() => {
    if (phase === EncounterPhase.ENEMY_PHASE) {
      const phaseStartAttackers = Object.values(enemyCombatants);
      const phaseStartAttacker = phaseStartAttackers.shift();

      setTimeout(() => {
        setAttackingCombatants(Object.values(phaseStartAttackers));
        setAttackingCombatant(phaseStartAttacker || null);
      }, 1000);
    }
  }, [phase]);

  const nextAttacker = () => {
    console.log("...Next attacker");

    const newAttackingCombatants = [...attackingCombatants];
    const attacker = newAttackingCombatants.shift();

    setAttackingCombatant(attacker || null);
    setAttackingCombatants(newAttackingCombatants);
    if (!attacker) {
      resetPlayer();
      setPhase(EncounterPhase.NEW_ROUND);
    }
  };

  const damagePlayer = () => {
    if (attackingCombatant === null) return;

    let damageTaken = Math.max(
      attackingCombatant.atk - characterCombatant.def,
      0,
    );
    let defenceRemaining = Math.max(
      characterCombatant.def - attackingCombatant.atk,
      0,
    );

    characterCombatant.hp -= damageTaken;
    characterCombatant.def = defenceRemaining;
    setCharacterCombatant({ ...characterCombatant });
  };

  const resetPlayer = () => {
    characterCombatant.def = characterCombatant.baseDef;
    setCharacterCombatant({ ...characterCombatant });
  };

  const handleEnemyAttackComplete = () => {
    damagePlayer();
    setTimeout(() => {
      nextAttacker();
    }, 1000);
  };

  // NOTE: Player prep phase state management
  const [drawPhase, setDrawPhase] = React.useState<DrawPhase>(
    DrawPhase.INACTIVE,
  );

  const shuffle = (cards: CombatCard[]): CombatCard[] => {
    for (var i = cards.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = cards[i];
      cards[i] = cards[j];
      cards[j] = temp;
    }
    return cards;
  };

  React.useEffect(() => {
    switch (drawPhase) {
      case DrawPhase.DISCARD:
        let newDiscardPile = [...discardPile, ...hand];

        setDiscardPile(newDiscardPile);
        setHand([]);

        setTimeout(() => {
          if (drawPile.length < DRAW_LIMIT) {
            setDrawPhase(DrawPhase.SHUFFLE);
          } else {
            setDrawPhase(DrawPhase.DRAW);
          }
        }, 800);
        break;

      case DrawPhase.SHUFFLE:
        let newDrawPile = [...drawPile, ...shuffle(discardPile)];

        setDrawPile(newDrawPile);
        setDiscardPile([]);

        setTimeout(() => {
          setDrawPhase(DrawPhase.DRAW);
        }, 800);

        break;

      case DrawPhase.DRAW:
        let newHand: CombatCard[] = [];
        let prevDrawPile = [...drawPile];

        for (let i = 0; i < DRAW_LIMIT; i++) {
          if (prevDrawPile.length > 0) {
            newHand.push(prevDrawPile.pop() as CombatCard);
          }
        }

        newHand.sort((a, b) => a.name.localeCompare(b.name));
        setDrawPile([...prevDrawPile]);
        setHand([...newHand]);

        setTimeout(() => {
          setDrawPhase(DrawPhase.INACTIVE);
          setPhase(EncounterPhase.PLAYER_PHASE);
        }, 1000);

        break;
    }
  }, [drawPhase]);

  const draw = () => {
    setDrawPhase(DrawPhase.DISCARD);
  };

  // NOTE: General phase state management
  const finishTurn = () => {
    setPhase(EncounterPhase.ENEMY_PHASE);
  };

  // Trigger next phase if player is out of stamina or cards
  React.useEffect(() => {
    if (
      (stamina == 0 || hand.length == 0) &&
      phase === EncounterPhase.PLAYER_PHASE
    ) {
      setPhase(EncounterPhase.ENEMY_PHASE);
    }
  }, [stamina, hand]);

  // NOTE: Main phase orchestration
  React.useEffect(() => {
    switch (phase) {
      case EncounterPhase.ENCOUNTER_START:
        console.log("Encounter start");
        setTimeout(() => {
          setPhase(EncounterPhase.NEW_ROUND);
        }, 3000);
        break;
      case EncounterPhase.PLAYER_PREP:
        console.log("Player prep");
        draw();
        setStamina(characterCombatant.stamina);
        break;
      case EncounterPhase.PLAYER_PHASE:
        console.log("Player phase");
        break;
      case EncounterPhase.ENEMY_PHASE:
        console.log("Enemy phase");
        break;
      case EncounterPhase.NEW_ROUND:
        console.log("New round");
        setRound(round + 1);
        setIsRoundDialogOpen(true);
        setTimeout(() => {
          setIsRoundDialogOpen(false);
          setPhase(EncounterPhase.PLAYER_PREP);
        }, 2000);
        break;
      case EncounterPhase.ENCOUNTER_OVER:
        console.log("Encounter over");
        break;
    }
  }, [phase]);

  return (
    <AnimationEngineContext.Provider
      value={{
        finishTurn,
        handleEnemyAttackComplete,
        attackingCombatant,
        phase,
      }}
    >
      {children}
    </AnimationEngineContext.Provider>
  );
}
