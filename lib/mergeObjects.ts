export function mergeObjects(...objects) {
  const result = {};

  // Iterate over each object
  objects.forEach(obj => {
    // Iterate over each property in the object
    for (const key in obj) {
      // If the property already exists in the result, add the values
      if (result.hasOwnProperty(key)) {
        result[key] += obj[key];
      } else {
        // Otherwise, create the property in the result
        result[key] = obj[key];
      }
    }
  });

  return result;
}