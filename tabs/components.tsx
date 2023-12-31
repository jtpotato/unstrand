import { useEffect, useState } from "react";
import TimerCircle from "~lib/timer-circle/TimerCircle";
import "../style.css"

function Components() {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const loop = setTimeout(() => {
      if (counter >= 59) setCounter(0)
      else {
        setCounter(counter + 1)
      }
    }, 1000)
  }, [counter])

  return (
    <div className="p-4 bg-black">
      <TimerCircle maximum={60} value={counter} accentColor="#f01111" />
    </div>

  );
}

export default Components;