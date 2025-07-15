import {
  PriorityLevel,
  ImmediatePriority,
  UserBlockingPriority,
  NormalPriority,
  IdlePriority,
  LowPriority,
  NoPriority,
} from "./SchedulerPriorities";
import { getCurrentTime } from "../../shared/utils";

interface Task {
  id: number;
  callback: Callback;
  priority: PriorityLevel;
  startTime: number;
  expirationTime: number;
  sortIndex: number; // 排序的依据
}

// NOTE: 为什么是arg:boolean
type Callback = ((arg: any) => Callback) | null | undefined;

// 任务池 最小堆
const taskQueue: Array<Task> = [];

// 当前在处理的task
let currentTask: Task | null = null;
// 当前处理task的优先级
let currentPriorityLevel: PriorityLevel = NoPriority;

// 记录时间切片的起始值 时间戳
let startIndex = -1;

// 时间切片 时间段
let frameInterval = 5;

// 是否有 work 在执行 是否正在一个时间切片里面
// 锁 防止重复调度
let isPerformingWork = false;

// 任务调度器的入口函数
function schedulerCallback(priorityLevel: PriorityLevel, callback: Callback) {}

// 取消某个任务 最小堆结构无法直接删除 将task.callback置为null
// 调度过程中 当这个任务位于堆顶时删掉
function cancelCallback() {
  currentTask!.callback = null;
}

function getCurrentPriorityLevel(): PriorityLevel {
  return currentPriorityLevel;
}

// 是否应该把控制权交还给主线程
function shouldYieldToHost(): boolean {
  const timeElapsed = getCurrentTime() - startIndex;
  if (timeElapsed < frameInterval) return false;
  return true;
}

// 一个work里面执行多个task
function workLoop() {}

// 实现一个单线程任务调度器
export {
  ImmediatePriority,
  UserBlockingPriority,
  NormalPriority,
  IdlePriority,
  LowPriority,
  schedulerCallback,
};
