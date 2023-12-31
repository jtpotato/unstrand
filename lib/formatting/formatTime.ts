export function formatTime(seconds: number) {
  let hours = Math.floor(seconds / 3600);
  seconds -= hours * 3600
  let minutes = Math.floor(seconds / 60)
  seconds -= minutes * 60

  return [hours, minutes, seconds]
}