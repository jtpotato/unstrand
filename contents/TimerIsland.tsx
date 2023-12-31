import cssText from "data-text:~style.css"
import timerCircleStyle from "data-text:~lib/timer-circle/TimerCircle.css"
import TimerIndicator from "~lib/TimerIndicator"

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText + timerCircleStyle
  return style
}

const TimerIsland = () => {
  return (
    <div style={{ fontSize: "16px !important" }}>
      <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-end pointer-events-none p-4">
        <div className="bg-black rounded-full p-1.5 border border-neutral-700">
          <TimerIndicator />
        </div>
      </div>
    </div>
  )
}

export default TimerIsland