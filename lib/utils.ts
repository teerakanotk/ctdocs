/**
 * Sorts the keys of an object alphabetically in ascending (A→Z) or descending (Z→A) order.
 *
 * @param obj - The object to sort.
 * @param order - Sorting order: "asc" for ascending (default) or "desc" for descending.
 * @returns A new object with keys sorted in the specified order.
 */
export function sorted<T extends Record<string, unknown>>(
  obj: T,
  order: "asc" | "desc" = "asc"
): T {
  type Mutable<T> = { -readonly [K in keyof T]: T[K] }; // Make T writable

  const sortedObj = Object.keys(obj)
    .sort((a, b) =>
      order === "desc" ? b.localeCompare(a) : a.localeCompare(b)
    )
    .reduce((acc, key) => {
      const k = key as keyof T;
      acc[k] = obj[k];
      return acc;
    }, {} as Mutable<T>);

  return sortedObj as T;
}
