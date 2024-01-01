import TimerCircle from "~lib/ui/timer-circle/TimerCircle";

import { useState } from "react";
import TimerIsland from "~contents/TimerIsland";
import { formatTime } from "~lib/formatting/formatTime";
import TrafficLights from "~lib/ui/island/TrafficLights";
import NotificationTester from "~lib/ui/notifications/NotificationTester";

import "~contents/TimerIsland.css";
import "~lib/ui/notifications/Notification.css";
import "~lib/ui/timer-circle/TimerCircle.css";
import "../style.css";

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