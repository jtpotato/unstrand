import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"

dayjs.extend(relativeTime)

export function formatTime(seconds: number) {
  return dayjs(seconds).from(0, true)
}