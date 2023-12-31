import dayjs from "dayjs";
import { Storage } from "@plasmohq/storage";
import { useEffect, useState } from "react";
import "../style.css"
import "./stats.css"
import "~lib/timer-circle/TimerCircle.css"
import { formatTime } from "~lib/formatting/formatTime";
import TimerCircle from "~lib/timer-circle/TimerCircle";
import { sortEntries } from "~lib/data/sortEntries";

const storage = new Storage({
  area: "local"
})

// chrome-extension://blngejggnlkbfeeegcodbgfeipcpmefl/tabs/stats.html

function Stats() {
  const [thisMonth, setThisMonth] = useState<Object>({})

  useEffect(() => {
    (
      async () => {
        const storageReturn = await storage.get(dayjs().format("YYYY-MM"))
        console.log(storageReturn)
        setThisMonth(storageReturn ? sortEntries(storageReturn) : {})
      }
    )()
  }, [])

  return (<>
    <div className="p-4 text-md bg-black text-white">
      <h1 className="text-4xl font-bold">this month:</h1>
      <br />
      <div className="flex flex-col max-w-md">
        {Object.entries(thisMonth).map((entry, index) => (
          <div className={`flex items-center gap-4 p-2 px-4 ${index % 2 == 0 ? "bg-white/10" : ""}`}>
            <p>{index + 1}</p>
            <p className="flex-1">{entry[0]}</p>
            <div className="flex items-center gap-2">
              <TimerCircle value={formatTime(entry[1])[0]} maximum={24} accentColor="#ed2424" />
              <TimerCircle value={formatTime(entry[1])[1]} maximum={60} accentColor="#eb9b34" />
              <TimerCircle value={formatTime(entry[1])[2]} maximum={60} accentColor="#32a852" />
            </div>
          </div>
        ))}
      </div>

    </div>

  </>);
}

export default Stats;