import { useEncounterContext } from "@/engines/encounterEngineContext";
import { useExpeditionContext } from "@/engines/expeditionEngineContext";
import React from "react";
import { EncounterPhases } from "@/data/encounters/enums";
import { Combatant } from "@/types/combatants";
import { CombatCard } from "@/types/combatCards";
import { DRAW_LIMIT } from "@/configurations/configurations";

const enum DrawPhase {
  INACTIVE = "INACTIVE",
  DRAW = "DRAW",
  SHUFFLE = "SHUFFLE",
  DISCARD = "DISCARD",
}

const useEncounterPhaseActions = () => {
  const { characterCombatant } = useExpeditionContext();
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
    setEnemyCombatants,
    alliedCombatants,
    setAlliedCombatants,
  } = useEncounterContext();

  // NOTE: Player Phase state management

  // NOTE: Enemy phase state management
  const [attackingCombatants, setAttackingCombatants] = React.useState<
    Combatant[]
  >([]);
  const [attackingCombatant, setAttackingCombatant] =
    React.useState<null | Combatant>(null);

  const startEnemyRound = () => {
    setAttackingCombatants(Object.values(enemyCombatants));
    nextAttacker();
  };

  const nextAttacker = () => {
    console.log("...Next attacker");

    setAttackingCombatants((prevAttackingCombatants) => {
      const attackingCombatants = [...prevAttackingCombatants];
      const attacker = attackingCombatants.pop();

      setAttackingCombatant(attacker || null);

      if (!attacker) {
        setPhase(EncounterPhases.NEW_ROUND);
      }
      return attackingCombatants;
    });
  };

  const handleEnemyAttackComplete = () => {
    if (attackingCombatant === null) return;

    let damageTaken = attackingCombatant.atk;

    characterCombatant.hp -= damageTaken;
    characterCombatant.def = characterCombatant.baseDef;
    characterCombatant.atk = characterCombatant.baseAtk;

    nextAttacker();
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
        setDrawPhase(DrawPhase.INACTIVE);

        break;
    }
  }, [drawPhase]);

  const draw = () => {
    setDrawPhase(DrawPhase.DISCARD);
  };

  // NOTE: General phase state management
  const finishTurn = () => {
    setPhase(EncounterPhases.ENEMY_PHASE);
  };

  // Trigger next phase if player is out of stamina or cards
  React.useEffect(() => {
    if (
      (stamina == 0 || hand.length == 0) &&
      phase === EncounterPhases.PLAYER_PHASE
    ) {
      setPhase(EncounterPhases.ENEMY_PHASE);
    }
  }, [stamina, hand]);

  // Remove dead enemies
  React.useEffect(() => {
    let initialLength = Object.keys(enemyCombatants).length;
    let filteredEnemyCombatants = Object.fromEntries(
      Object.entries(enemyCombatants).filter(
        ([_, combatant]) => combatant.hp > 0,
      ),
    );
    let newLength = Object.keys(filteredEnemyCombatants).length;

    if (newLength < initialLength) {
      setEnemyCombatants({ ...filteredEnemyCombatants });
    }
  }, [enemyCombatants]);

  // Remove dead allies
  React.useEffect(() => {
    let initialLength = Object.keys(alliedCombatants).length;
    let filteredAlliedCombatants = Object.fromEntries(
      Object.entries(alliedCombatants).filter(
        ([_, combatant]) => combatant.hp > 0,
      ),
    );
    let newLength = Object.keys(alliedCombatants).length;

    if (newLength < initialLength) {
      setAlliedCombatants({ ...alliedCombatants });
    }
  }, [alliedCombatants]);

  // NOTE: Main phase orchestration
  React.useEffect(() => {
    switch (phase) {
      case EncounterPhases.ENCOUNTER_START:
        console.log("Encounter start");
        setTimeout(() => {
          setPhase(EncounterPhases.NEW_ROUND);
        }, 3000);
        break;
      case EncounterPhases.PLAYER_PREP:
        console.log("Player prep");
        draw();
        setStamina(characterCombatant.stamina);
        setTimeout(() => {
          setPhase(EncounterPhases.PLAYER_PHASE);
        }, 2400);
        break;
      case EncounterPhases.PLAYER_PHASE:
        console.log("Player phase");
        break;
      case EncounterPhases.ENEMY_PHASE:
        console.log("Enemy phase");
        startEnemyRound();
        setTimeout(() => {}, 10000);
        break;
      case EncounterPhases.NEW_ROUND:
        console.log("New round");
        setRound(round + 1);
        setIsRoundDialogOpen(true);
        setTimeout(() => {
          setIsRoundDialogOpen(false);
          setPhase(EncounterPhases.PLAYER_PREP);
        }, 2000);
        break;
      case EncounterPhases.ENCOUNTER_OVER:
        console.log("Encounter over");
        break;
    }
  }, [phase]);

  return { finishTurn, handleEnemyAttackComplete, attackingCombatant };
};
export default useEncounterPhaseActions;
