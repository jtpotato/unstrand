import { useEffect, useState, type CSSProperties, type PropsWithChildren } from "react";
import type { PlasmoGetStyle } from "plasmo"

function TimerCircle(props: { progress: number, accentColor: string, circleRadius: number, trackThickness: number } & PropsWithChildren) {
  const { progress, accentColor, circleRadius, trackThickness, children } = props

  const [markerXDisp, setMarkerXDisp] = useState(0)
  const [markerYDisp, setMarkerYDisp] = useState(0)

  useEffect(() => {
    setMarkerXDisp(Math.cos((progress - 0.25) * 2 * Math.PI))
    setMarkerYDisp(Math.sin((progress - 0.25) * 2 * Math.PI))
  }, [progress])

  return (
    <div
      className="rounded-full relative timer-circle-background"
      style={{ width: circleRadius * 2 + "px", height: circleRadius * 2 + "px", "--timer-circle-progress": `${progress * 100}%`, "--timer-circle-color": accentColor, "--timer-circle-transparent": accentColor + "40" } as CSSProperties}>

      <div className="absolute rounded-full"
        style={{
          width: trackThickness + "px",
          height: trackThickness + "px",
          transform: `translateX(${circleRadius - (trackThickness / 2)}px)`,
          backgroundColor: accentColor
        }}></div>

      <div className="absolute rounded-full transition-transform ease-linear"
        style={{
          width: trackThickness + "px",
          height: trackThickness + "px",
          transform:
            `translate(-50%, -50%)
            translateX(${markerXDisp * (circleRadius - (trackThickness / 2)) + circleRadius}px)
      translateY(${markerYDisp * (circleRadius - (trackThickness / 2)) + circleRadius}px)`,
          backgroundColor: accentColor
        }}></div>

      <div className="bg-black p-1 rounded-full flex justify-center items-center"
        style={{
          width: (circleRadius - trackThickness) * 2 + "px",
          height: (circleRadius - trackThickness) * 2 + "px",
          transform: `translate(${trackThickness}px, ${trackThickness}px)`
        }}>
        {children}
      </div>
    </div>

  );
}

export default TimerCircle