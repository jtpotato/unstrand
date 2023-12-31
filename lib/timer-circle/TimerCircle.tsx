import { useEffect, useState, type CSSProperties } from "react";

function TimerCircle(props: { value: number, maximum: number, accentColor: string }) {
  const [markerXDisp, setMarkerXDisp] = useState(0)
  const [markerYDisp, setMarkerYDisp] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setMarkerXDisp(Math.cos(((props.value / props.maximum) - 0.25) * 2 * Math.PI))
    setMarkerYDisp(Math.sin(((props.value / props.maximum) - 0.25) * 2 * Math.PI))
    setProgress((props.value / props.maximum) * 100)
  }, [props.value])

  const circleRadius = 16
  const trackThickness = 4

  return (
    <div
      className="rounded-full relative timer-circle-background"
      style={{ width: circleRadius * 2 + "px", height: circleRadius * 2 + "px", "--timer-circle-progress": `${progress}%`, "--timer-circle-color": props.accentColor } as CSSProperties}>

      <div className="absolute rounded-full"
        style={{
          width: trackThickness + "px",
          height: trackThickness + "px",
          transform: `translateX(${circleRadius - (trackThickness / 2)}px)`,
          backgroundColor: props.accentColor
        }}></div>

      <div className="bg-red-500 absolute rounded-full transition-transform ease-linear"
        style={{
          width: trackThickness + "px",
          height: trackThickness + "px",
          transform:
            `translate(-50%, -50%)
            translateX(${markerXDisp * (circleRadius - (trackThickness / 2)) + circleRadius}px)
      translateY(${markerYDisp * (circleRadius - (trackThickness / 2)) + circleRadius}px)`,
          backgroundColor: props.accentColor
        }}></div>

      <div className="bg-black p-1 rounded-full translate-x-1 translate-y-1"
        style={{
          width: (circleRadius - trackThickness) * 2 + "px",
          height: (circleRadius - trackThickness) * 2 + "px",
        }}>
        <p className="text-white text-xs text-center">{props.value}</p>
      </div>
    </div>

  );
}

export default TimerCircle