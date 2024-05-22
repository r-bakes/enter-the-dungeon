import { Card, CardContent, CardHeader } from "@/components/ui/card";


export default function ArenaRow({cards, style} : { cards: JSX.Element[], style?: "sm" | "lg" }) {

    let height = "h-80"
    if (style === "sm") {
        height = "h-56"
    }

    return (
        <Card className={"flex w-full " + height}>
            <CardContent className="flex items-center justify-center w-full h-full">
                {cards}
            </CardContent>
        </Card>
  );
}
