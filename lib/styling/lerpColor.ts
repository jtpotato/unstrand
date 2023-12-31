function lerpColor(color1, color2, t) {
  // Ensure t is between 0 and 1
  t = Math.max(0, Math.min(1, t))

  // ChatGPT
  
  // Extract RGB components of each color
  const r1 = (color1 >> 16) & 255
  const g1 = (color1 >> 8) & 255
  const b1 = color1 & 255

  const r2 = (color2 >> 16) & 255
  const g2 = (color2 >> 8) & 255
  const b2 = color2 & 255

  // Perform linear interpolation for each color component
  const r = Math.round(r1 + (r2 - r1) * t)
  const g = Math.round(g1 + (g2 - g1) * t)
  const b = Math.round(b1 + (b2 - b1) * t)

  // Combine interpolated components into a new color
  return ((r << 16) | (g << 8) | b)
}

export function lerpColors(colors, t) {
  // Ensure t is between 0 and 1
  t = Math.max(0, Math.min(1, t));

  // Calculate the number of segments between colors
  const numSegments = colors.length - 1;

  // Calculate the segment and subsegment indices
  const segmentIndex = Math.floor(t * numSegments);
  const subsegmentT = (t - segmentIndex / numSegments) * numSegments;

  // Get the colors at the segment endpoints
  const color1 = colors[segmentIndex];
  const color2 = colors[segmentIndex + 1];

  // Interpolate between the segment endpoints
  return lerpColor(color1, color2, subsegmentT).toString(16);
}