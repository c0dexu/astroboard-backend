export function parseDiscoveryDate(rawDate: string): Date | null {
  if (!rawDate || rawDate.trim().length === 0) return null;

  const splitRaw = rawDate.split("/").map((x) => Number(x));
  const day = splitRaw[0];
  const month = splitRaw[1];
  const year = splitRaw[2];

  if (!day || !month || !year) {
    return null;
  }

  return new Date(year, month - 1, day + 1);
}
