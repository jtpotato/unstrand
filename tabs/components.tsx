import TimerCircle from "~lib/ui/timer-circle/TimerCircle";
import "../style.css"
import "~lib/ui/timer-circle/TimerCircle.css"
import "~lib/ui/notifications/Notification.css"
import TrafficLights from "~lib/ui/TrafficLights";
import TimerIsland from "~contents/TimerIsland";
import NotificationTester from "~lib/ui/notifications/NotificationTester";
import { useState } from "react";
import { formatTime } from "~lib/formatting/formatTime";

function Components() {
  const [inputTime, setInputTime] = useState(0)

  return (
    <div className="p-4 bg-black min-h-screen">
      <TimerCircle progress={1 / 24} circleRadius={16} trackThickness={4} accentColor="#f01111">{1}</TimerCircle>
      <input type="range" min={0} max={6000} onChange={(e) => setInputTime(parseInt(e.currentTarget.value))} />
      <TrafficLights time={formatTime(inputTime)} />
      <TimerIsland />
      <NotificationTester />
    </div>
  );
}

export default Components;