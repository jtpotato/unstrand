export function getTopKeys(obj, num) {
  // Convert object to array of key-value pairs
  const entries = Object.entries(obj);

  // Sort the array based on values in descending order
  entries.sort((a, b) => (b[1] as number) - (a[1] as number));

  // Take the top 100 entries
  const topEntries = entries.slice(0, num);

  // Convert the array back to an object
  const result = Object.fromEntries(topEntries);

  return result;
}