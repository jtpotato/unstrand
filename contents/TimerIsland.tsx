import { useEffect, useRef, useState } from "react"
import { incrementTime } from "~lib/data/incrementTime"
import { getAllStyles } from "~lib/styling/getAllStyles"
import TimerIndicator from "~lib/ui/TimerIndicator"
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
  const [timerIslandBackgroundDimensions, setTimerIslandBackgroundDimensions] = useState([0, 0])
  const [applyGlow, setApplyGlow] = useState(false)

  useEffect(() => {
    if (!timerIslandBodyRef.current) return
    console.log("UseEffect running.")

    const resizeHandler = new ResizeObserver(() => {
      let padding = [16, 16]
      setTimerIslandBackgroundDimensions(
        [timerIslandBodyRef.current.clientWidth + padding[0], timerIslandBodyRef.current.clientHeight + padding[1]])

      console.log(timerIslandBodyRef.current.clientWidth)

      if (timerIslandBodyRef.current.clientWidth > 48) {
        setApplyGlow(true)
      }
      else {
        setTimeout(() => setApplyGlow(false), 1000)
      }
    })

    resizeHandler.observe(timerIslandBodyRef.current);

    return () => {
      resizeHandler.disconnect()
      console.log("Dismount.")
    };
  }, [timerIslandBodyRef.current])

  return (
    <div style={{ fontSize: "16px !important" }}>
      <div className="fixed -top-40 left-0 w-screen h-screen flex items-center justify-end pointer-events-none p-8">
        <div className="timer-island-entry-anim">
          <div className={`flex relative`} ref={timerIslandBodyRef}>
            <NotificationsArea />
            <TimerIndicator />
            <div
              className={`bg-black border border-neutral-800 rounded-3xl absolute top-1/2 right-0 -z-10 duration-200 ease-[cubic-bezier(.37,0,.04,1.3)] ${applyGlow ? "timer-island-glow" : ""}`}
              style={{
                width: timerIslandBackgroundDimensions[0] + "px",
                height: timerIslandBackgroundDimensions[1] + "px",
                transform: `translateX(${8}px) translateY(-${timerIslandBackgroundDimensions[1] / 2}px)`
              }}
            />
          </div>
        </div>
      </div>
      {/* <NotificationTester /> */}
    </div>
  )
}

export default TimerIsland