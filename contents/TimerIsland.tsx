import { getAllStyles } from "~lib/styling/getAllStyles"
import TimerIndicator from "~lib/ui/TimerIndicator"
import NotificationsArea from "~lib/ui/notifications/NotificationsArea"

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = getAllStyles()
  return style
}

const TimerIsland = () => {
  return (
    <div style={{ fontSize: "16px !important" }}>
      <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-end pointer-events-none p-4">
        <div className="bg-black rounded-3xl p-1.5 border border-neutral-700 flex transition-all">
          <NotificationsArea />
          <TimerIndicator />
        </div>
      </div>
    </div>
  )
}

export default TimerIsland