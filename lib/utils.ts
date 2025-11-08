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
  const entries = Object.entries(obj).sort(([a], [b]) =>
    order === "desc" ? b.localeCompare(a) : a.localeCompare(b)
  );

  return Object.fromEntries(entries) as T;
}

/**
 * Generates a unique Nextra-compatible separator metadata entry.
 *
 * @example
 * separator({ title: "Server" });
 * // => { _sep_1: { type: "separator", title: "Server" } }
 */
let separatorId = 0;

export interface SeparatorOptions {
  /** Separator title */
  title: string;
  /** Optional theme overrides */
  theme?: Record<string, boolean | string>;
  /** Optional custom key prefix */
  prefix?: string;
}

export const separator = ({
  title,
  theme,
  prefix = "_sep_",
}: SeparatorOptions) => {
  separatorId++;

  const key = `${prefix}${separatorId}`;

  return {
    [key]: {
      type: "separator" as const,
      title,
      ...(theme ? { theme } : {}),
    },
  };
};
