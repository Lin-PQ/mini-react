export function getCurrentTime(): number {
  // 时间精度更高 系统无关
  return performance.now();
}

export function isArray(value: any): boolean {
  return Array.isArray(value);
}

export function isNum(value: any): boolean {
  return typeof value === "number";
}

export function isObject(value: any): boolean {
  return typeof value === "object";
}

export function isFn(value: any): boolean {
  return typeof value === "function";
}

export function isString(value: any): boolean {
  return typeof value === "string";
}
