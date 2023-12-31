import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { getTime } from "./getTime";
import { formatTime } from "./formatting/formatTime";

function TimerIndicator() {
  const [time, setTime] = useState(0)

  useEffect(() => {
    (async () => {
      const currentSpentTime = await getTime()
      setTime(currentSpentTime)
    })()

    window.setInterval(async () => {
      const currentSpentTime = await getTime()

      setTime(currentSpentTime)
    }, 1000)
  }, [])

  return (<>
    <p className="text-white text-sm">{formatTime(time)}</p>
  </>);
}

export default TimerIndicator;