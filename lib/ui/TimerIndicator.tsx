import { useEffect, useState } from "react";
import TrafficLights from "./TrafficLights";
import { useStorage } from "@plasmohq/storage/hook";
import { Storage } from "@plasmohq/storage";
import { formatTime } from "~lib/formatting/formatTime";

const storage = new Storage({
  area: 'local'
})

function TimerIndicator() {
  const [time, setTime] = useState([0, 0, 0])
  const [currentTimes] = useStorage({ key: "daily-times", instance: storage })

  useEffect(() => {
    const hostname = window.location.hostname;

    if (!currentTimes) return
    if (!currentTimes[hostname]) return
    const formattedTime = formatTime(currentTimes[hostname])

    setTime(formattedTime)
  }, [currentTimes])

  return (<>
    <TrafficLights time={time} />
  </>);
}

export default TimerIndicator;