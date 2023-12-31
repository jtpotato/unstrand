import dayjs from "dayjs";
import { Storage } from "@plasmohq/storage";
import { useEffect, useState } from "react";
import "../style.css"
import "./stats.css"
import { sortEntries } from "~lib/data/sortEntries";
import Entry from "~lib/ui/stats/Entry";

const storage = new Storage({
  area: "local"
})

// chrome-extension://blngejggnlkbfeeegcodbgfeipcpmefl/tabs/stats.html

function Stats() {
  const [thisMonth, setThisMonth] = useState<Object>({})
  const [largestEntry, setLargestEntry] = useState(1)

  useEffect(() => {
    (
      async () => {
        const storageReturn = await storage.get(dayjs().format("YYYY-MM"))
        console.log(storageReturn)
        setThisMonth(storageReturn ? sortEntries(storageReturn) : {})
        setLargestEntry(Object.entries(sortEntries(storageReturn))[0][1] as number)
      }
    )()
  }, [])

  return (<>
    <div className="p-4 text-md bg-black text-white">
      <h1 className="text-4xl font-bold">this month:</h1>
      <br />
      <div className="flex flex-col max-w-md">
        {Object.entries(thisMonth).map((entry, index) => (
          <Entry entry={entry} index={index} largestEntry={largestEntry} key={entry[0]} />
        ))}
      </div>

    </div>

  </>);
}

export default Stats;