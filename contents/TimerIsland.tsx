import { useEffect, useRef, useState } from "react"
import { incrementTime } from "~lib/data/incrementTime"
import { getAllStyles } from "~lib/styling/getAllStyles"
import Background from "~lib/ui/island/Background"
import HoverManager from "~lib/ui/island/HoverManager"
import TimerIndicator from "~lib/ui/island/TimeTicker"
import NotificationTester from "~lib/ui/notifications/NotificationTester"
import NotificationsArea from "~lib/ui/notifications/NotificationsArea"

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = getAllStyles()
  return style
}

const TimerIsland = () => {
  useEffect(() => {
    const eventLoop = setInterval(() => {
      if (document.hasFocus() && window.location.protocol != "chrome-extension:") {
        incrementTime(window.location.hostname)
      }
    }, 1000)

    return () => { clearInterval(eventLoop) }
  }, [])


  const timerIslandBodyRef = useRef<HTMLDivElement>(null)

  return (
    <div style={{ fontSize: "16px !important" }}>
      <div className="fixed pt-16 top-0 left-0 w-screen h-screen flex items-start justify-end pointer-events-none">
        <div className="timer-island-entry-anim">
          <HoverManager>
            <div className={`flex relative`} ref={timerIslandBodyRef}>
              <NotificationsArea />
              <TimerIndicator />
              <Background timerIslandBodyRef={timerIslandBodyRef} />
            </div>
          </HoverManager>
        </div>
      </div>
      {/* <NotificationTester /> */}
    </div>
  )
}

export default TimerIsland