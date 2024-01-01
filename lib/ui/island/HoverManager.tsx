import { useState, type PropsWithChildren, type CSSProperties, useEffect, useRef } from "react";

function HoverManager(props: PropsWithChildren) {
  const [initialBoundingRect, setInitialBoundingRect] = useState<{ top: number, bottom: number, left: number, right: number }>(null)
  const hoverManagerRef = useRef(null)
  const [transformStyle, setTransformStyle] = useState<CSSProperties>({})

  function handleMouseMove(event: MouseEvent) {
    if (!initialBoundingRect) return
    const isInXRange = initialBoundingRect.left < event.clientX && event.clientX < initialBoundingRect.right
    const isInYRange = initialBoundingRect.top < event.clientY && event.clientY < initialBoundingRect.bottom

    if (isInXRange && isInYRange) {
      console.log("HOVEr")
      setTransformStyle({ transform: "translateX(100px) scaleY(0.5)" })
      return
    }
    setTransformStyle({ transform: "translateX(0) scaleY(1)" })
  }

  function recalculateBoundingRect() {
    const rect = hoverManagerRef.current.getBoundingClientRect()
    const boundingRect = {
      top: rect.top,
      bottom: rect.bottom,
      left: rect.left,
      right: rect.right + 100
    }

    console.log("setting bounding rect...", boundingRect)

    setInitialBoundingRect(boundingRect)
  }

  useEffect(() => {
    if (!hoverManagerRef.current) return
    setTimeout(() => recalculateBoundingRect(), 1000)

    window.addEventListener("resize", recalculateBoundingRect)

    return () => {
      window.removeEventListener("resize", recalculateBoundingRect)
    }

  }, [hoverManagerRef.current])

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [initialBoundingRect])

  return (<>
    <div className="py-4 pr-6 pointer-events-none" ref={hoverManagerRef}>
      <div className="transition-all duration-300 ease-[cubic-bezier(.37,0,.04,1.3)]" style={transformStyle}>
        {props.children}
      </div>
    </div>
  </>);
}

export default HoverManager;