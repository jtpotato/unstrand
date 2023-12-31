import { useEffect, useState } from "react";
import { getTime } from "./getTime";
import { formatTime } from "./formatting/formatTime";
import TimerCircle from "./timer-circle/TimerCircle";

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
    <div className="flex flex-col items-center gap-2">
      <TimerCircle value={formatTime(time)[0]} maximum={24} accentColor="#ed2424" />
      <TimerCircle value={formatTime(time)[1]} maximum={60} accentColor="#eb9b34"/>
      <TimerCircle value={formatTime(time)[2]} maximum={60} accentColor="#32a852"/>
    </div>
  </>);
}

export default TimerIndicator;