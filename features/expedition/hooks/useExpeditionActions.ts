import { useExpeditionContext } from "@/engines/expeditionEngineContext";

const useExpeditionActions = () => {
  const { loot, setLoot, artifacts, setArtifacts, supplies, setSupplies } =
    useExpeditionContext();

  return {};
};
export default useExpeditionActions;
