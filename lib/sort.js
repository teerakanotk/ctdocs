export function sortObjectByKey(obj) {
  return Object.fromEntries(
    Object.entries(obj).sort(([a], [b]) => a.localeCompare(b))
  );
}
