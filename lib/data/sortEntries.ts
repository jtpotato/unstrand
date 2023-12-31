// ChatGPT

export function sortEntries(obj) {
  // Convert object to array of key-value pairs
  const entries = Object.entries(obj);

  // Sort the array based on values in descending order
  entries.sort((a, b) => (b[1] as number) - (a[1] as number));

  // Convert the array back to an object
  const result = Object.fromEntries(entries);

  return result;
}