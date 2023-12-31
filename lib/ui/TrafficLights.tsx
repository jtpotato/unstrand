import TimerCircle from "./timer-circle/TimerCircle";

function TrafficLights(props: {time: number[]}) {
  const { time } = props
  
  return (<div className="flex flex-col items-center gap-2 text-xs text-white">
    <TimerCircle progress={time[0] / 24} circleRadius={16} trackThickness={4} accentColor="#ed2424">
      <p>{time[0]}</p>
    </TimerCircle>
    <TimerCircle progress={time[1] / 60} circleRadius={16} trackThickness={4} accentColor="#eb9b34">
      <p>{time[1]}</p>
    </TimerCircle>
    <TimerCircle progress={time[2] / 60} circleRadius={16} trackThickness={4} accentColor="#32a852">
      <p>{time[2]}</p>
    </TimerCircle>
  </div>);
}

export default TrafficLights;