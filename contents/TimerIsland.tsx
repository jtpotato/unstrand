import cssText from "data-text:~style.css"
import TimerIndicator from "~lib/TimerIndicator"

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const TimerIsland = () => {
  return (
    <div style={{ fontSize: "16px !important" }}>
      <div className="fixed top-0 left-0 w-screen h-screen flex items-center pointer-events-none">
        <div className="relative w-full">
          <div className="absolute right-0 w-fit p-4">
            <div className="bg-black rounded-full w-8 p-1">
              <TimerIndicator />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimerIsland