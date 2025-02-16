import { Task } from "@/types/tasks";
import { TaskId } from "../enum";

export const ranchingTasks: { [id in TaskId]?: Task } = {};
