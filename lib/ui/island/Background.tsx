import { useEffect, useState } from "react"

function Background(props: { timerIslandBodyRef: React.MutableRefObject<HTMLDivElement> }) {
  const { timerIslandBodyRef } = props

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
        setTimeout(() => setApplyGlow(false), 500)
      }
    })

    resizeHandler.observe(timerIslandBodyRef.current);

    return () => {
      resizeHandler.disconnect()
      console.log("Dismount.")
    };
  }, [timerIslandBodyRef.current])

  return (<>
    <div
      className={`bg-black border border-neutral-800 rounded-3xl absolute top-1/2 right-0 -z-10 duration-200 ease-[cubic-bezier(.37,0,.04,1.3)] ${applyGlow ? "timer-island-glow" : ""}`}
      style={{
        width: timerIslandBackgroundDimensions[0] + "px",
        height: timerIslandBackgroundDimensions[1] + "px",
        transform: `translateX(${8}px) translateY(-${timerIslandBackgroundDimensions[1] / 2}px)`
      }}
    />
  </>);
}

export default Background;