export function hasValue<T>(value: T | null | undefined): value is T {
  if (Array.isArray(value)) {
    return value.length !== 0;
  }
  return value !== null && value !== undefined;
}
