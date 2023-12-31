import { useEffect, useState } from "react";
import { getTime } from "../getTime";
import { formatTime } from "../formatting/formatTime";
import TrafficLights from "./TrafficLights";

function TimerIndicator() {
  const [time, setTime] = useState([0, 0, 0])

  useEffect(() => {
    (async () => {
      const currentSpentTime = await getTime()
      setTime(formatTime(currentSpentTime))
    })()

    window.setInterval(async () => {
      const currentSpentTime = await getTime()

      setTime(formatTime(currentSpentTime))
    }, 1000)
  }, [])

  return (<>
    <TrafficLights time={time} />
  </>);
}

export default TimerIndicator;