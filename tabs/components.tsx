import TimerCircle from "~lib/ui/timer-circle/TimerCircle";
import "../style.css"
import "~lib/ui/timer-circle/TimerCircle.css"
import TrafficLights from "~lib/ui/TrafficLights";

function Components() {
  return (
    <div className="p-4 bg-black">
      <TimerCircle progress={1 / 24} circleRadius={16} trackThickness={4} accentColor="#f01111">{1}</TimerCircle>
      <TrafficLights time={[0, 2, 37]} />
    </div>

  );
}

export default Components;