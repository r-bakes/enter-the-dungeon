import ArenaRow from "./ArenaRow";
import DeckRow from "./DeckRow";

export default function Arena({}) {

    return (
        <div className="flex flex-col w-full h-full space-y-4">
            <ArenaRow cards={[]}></ArenaRow>
            <ArenaRow cards={[]} style="sm"></ArenaRow>
            <DeckRow cards={[]}></DeckRow>
        </div>
    )
}