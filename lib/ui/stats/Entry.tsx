import { formatTime } from "~lib/formatting/formatTime";
import BarLine from "../bar-line/BarLine";
import { useEffect, useState } from "react";
import { lerpColors } from "~lib/styling/lerpColor";

function Entry(props: { entry: [string, number], index: number, largestEntry: number }) {
  const { entry, index, largestEntry } = props
  const time = formatTime(entry[1])
  const [proportion, setProportion] = useState(0)

  useEffect(() => {
    setProportion((entry[1] / largestEntry) * 0.9)
  }, [props.largestEntry])

  return (
    <>
      <div className={`flex items-center gap-4 p-2 px-4 ${index % 2 == 0 ? "bg-white/15" : "bg-white/10"}`}>
        <p>{index + 1}</p>
        <p className="flex-1">{entry[0]}</p>
        <div className="flex-1">
          <BarLine size={proportion} color={"#" + lerpColors([0x32a852, 0xeb9b34, 0xed2424], proportion)} />
        </div>
        <div className="flex items-center gap-2">
          {time[0]}h {time[1]}m
        </div>
      </div>
    </>
  );
}

export default Entry;