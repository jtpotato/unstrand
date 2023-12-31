function BarLine(props: { size: number, color: string }) {
  const { size, color } = props

  return (<div className="h-1.5 rounded-full bg-black/20" style={{ width: "100%" }}>
    <div className="h-1.5 rounded-full" style={{ width: `${size * 100}%`, backgroundColor: color }}></div>
  </div>);
}

export default BarLine;