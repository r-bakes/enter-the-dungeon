import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Label } from "@radix-ui/react-label";
import { Play, X, Backpack } from "lucide-react";
import { useCampEngineContext } from "@/engine/campEngineContext";
import { generateDropRates } from "@/engine/utils/lootUtilities";
import { Item } from "@/data/items/types";
import { Skill } from "@/data/skills/skills";
import { Task } from "@/data/skills/skills";
import { itemTable } from "@/data/items/items";
import { useCharacterEngineContext } from "@/engine/characterEngineContext";

export default function TaskInfo({
  skill,
  task,
}: {
  skill: Skill | null;
  task: Task | null;
}) {
  const { setWorkingSkill, setWorkingTask, taskProgress: progress, workingTask } =
    useCampEngineContext();
  const { character } = useCharacterEngineContext();

  let content = null;
  if (!task) {
    content = (
      <div className="flex w-full h-full justify-center items-center">
        <Label className="flex text-2xl text-muted-foreground font-extralight h-10">
          Select a task
        </Label>
      </div>
    );
  } else {
    let taskProduction = generateDropRates(task.lootTable);
    let taskRequires:
      | null
      | { item: Item; quantity: number; haveEnough: boolean }[] = null;
    let requirementsMet: boolean = true;

    if (task.requires) {
      taskRequires = Object.entries(task.requires).map(
        ([itemId, quantity]) => ({
          item: itemTable[itemId],
          quantity: quantity,
          haveEnough:
            !(itemId in character.inventory) ||
            quantity > character.inventory[itemId],
        })
      );

      for (const element of taskRequires) {
        let reqs = element;
        if (
          !(reqs.item.id in character.inventory) ||
          reqs.quantity > character.inventory[reqs.item.id]
        ) {
          requirementsMet = false;
        }
      }
    }

    content = (
      <div className="flex flex-col w-full h-full ">
        <CardHeader className="flex flex-row">
          <div className="w-[56px] h-[56px]">
            <task.icon size={56} strokeWidth={1.5}></task.icon>
          </div>
          <div className="flex pl-6 flex-col">
            <CardTitle>{task.name}</CardTitle>
            <CardDescription>{task.description}</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col w-full">
            {task == workingTask ? (
              <Progress
                className="w-full h-4 rounded-sm"
                value={(progress / task.durationSec) * 100}
              ></Progress>
            ) : (
              <Progress className="w-full h-4 rounded-sm"></Progress>
            )}
            <CardDescription className="mt-2">Task Progress</CardDescription>
          </div>
          <div className="w-full mt-6 mb-2 border rounded-sm border-gray-700 border-b-[2px]"></div>
          <div className="flex w-full py-2">
            <div className="w-1/4 text-left">
              <Label className="pointer-events-none">{task.durationSec}</Label>
            </div>
            <div className="w-full border-gray-800 mt-4 mb-2 border-dotted h-1 border-b-[2px]"></div>
            <div className="w-3/4 text-right">
              <Label className="font-light text-muted-foreground pointer-events-none">
                seconds
              </Label>
            </div>
          </div>
          <div className="flex w-full py-2">
            <div className="w-1/4 text-left">
              <Label className="pointer-events-none">{task.experience} </Label>
            </div>
            <div className="w-full border-gray-800 mt-4 mb-2 border-dotted h-1 border-b-[2px]"></div>
            <div className="w-3/4 text-right">
              <Label className="font-light text-muted-foreground pointer-events-none">
                experience
              </Label>
            </div>
          </div>
          <div className="flex w-full py-2">
            <div className="flex w-full text-left space-x-1">
              {taskProduction.map((lootGroup) => (
                <div
                  className={
                    "flex " +
                    (lootGroup.length > 1 ? "border rounded-sm px-1" : "")
                  }
                  key={lootGroup[0].item.id}
                >
                  {lootGroup.map((data) => (
                    <div
                      className="flex flex-col w-max min-w-[80px] text-center w-20 border rounded-sm items-center p-2"
                      key={data.item.id}
                    >
                      <div className="w-[42px] h-[42px]">
                        <data.item.icon
                          size={42}
                          strokeWidth={1}
                        ></data.item.icon>
                      </div>
                      <Label className="text-xs text-muted-foreground">
                        {data.item.name}
                      </Label>
                      <Label className="text-xs text-muted-foreground">
                        {data.chance}%
                      </Label>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="w-3/4 text-right">
              <Label className="font-light text-muted-foreground pointer-events-none">
                produces
              </Label>
            </div>
          </div>
          {taskRequires ? (
            <div className="flex w-full py-2">
              <div className="flex w-full text-left">
                {taskRequires.map((item) => (
                  <div
                    className="flex flex-col text-center w-max min-w-[80px] border rounded-sm items-center p-2 mr-2"
                    key={item.item.id}
                  >
                    <div className="w-[42px] h-[42px]">
                      <item.item.icon
                        size={42}
                        strokeWidth={1}
                      ></item.item.icon>
                    </div>
                    <Label className="text-xs text-muted-foreground">
                      {item.item.name}
                    </Label>
                    <div className="flex flex-col">
                      <Label className="text-xs text-muted-foreground">
                        {item.quantity}
                      </Label>
                      <div className="flex items-center justify-end w-full space-x-1">
                        <Label className="text-xs text-muted-foreground">
                          (
                          {item.item.id in character.inventory
                            ? character.inventory[item.item.id]
                            : 0}
                          )
                        </Label>
                        <Backpack size={15} strokeWidth={1}></Backpack>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-3/4 text-right">
                <Label className="font-light text-muted-foreground pointer-events-none">
                  requires
                </Label>
              </div>
            </div>
          ) : (
            <></>
          )}
        </CardContent>
        <CardFooter className="flex w-full grow items-end">
          <Button
            className="rounded-l-md rounded-r-none w-1/2 text-center"
            disabled={!requirementsMet}
            onClick={() => {
              setWorkingSkill(skill);
              setWorkingTask(task);
            }}
          >
            <Play className="mr-2"></Play>Start
          </Button>
          {task == workingTask ? (
            <Button
              className="rounded-r-md rounded-l-none w-1/2 text-center"
              variant="destructive"
              onClick={() => {
                setWorkingSkill(null);
                setWorkingTask(null);
              }}
            >
              <X className="mr-2"></X>Stop
            </Button>
          ) : (
            <Button
              className="rounded-r-md rounded-l-none w-1/2 text-center"
              variant="secondary"
              disabled={true}
            >
              <X className="mr-2"></X>Stop
            </Button>
          )}
        </CardFooter>
      </div>
    );
  }
  return <Card className="flex flex-col w-full h-full p-6">{content}</Card>;
}
