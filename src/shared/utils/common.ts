export function hasValue<T>(value: T | null | undefined): value is T {
  if (Array.isArray(value)) {
    return value.length !== 0;
  }
  return value !== null && value !== undefined;
}

export function generateAlias(id: number, input: string): string {
  return (
    id +
    '-' +
    input
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .substring(0, 50)
  );
}

export function getIdFromAlias(input: string): number {
  const partBeforeDash = input.split('-')[0];
  return Number(partBeforeDash.charAt(0)) || 0;
}
