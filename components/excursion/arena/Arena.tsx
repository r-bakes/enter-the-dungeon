import ArenaRow from "./ArenaRow";

export default function Arena({}) {

    return (
        <div className="flex flex-col w-full h-full space-y-4">
            <ArenaRow cards={[]}></ArenaRow>
            <ArenaRow cards={[]}></ArenaRow>
            <ArenaRow cards={[]} style="deck"></ArenaRow>
        </div>
    )
}