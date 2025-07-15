export type PriorityLevel = 0 | 1 | 2 | 3 | 4 | 5;

// TODO: Use symbols?
export const NoPriority: PriorityLevel = 0;
export const ImmediatePriority: PriorityLevel = 1;
export const UserBlockingPriority: PriorityLevel = 2;
export const NormalPriority: PriorityLevel = 3;
export const LowPriority: PriorityLevel = 4;
export const IdlePriority: PriorityLevel = 5;
