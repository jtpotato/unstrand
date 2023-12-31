import "./style.css"
import { version } from "./package.json"

function IndexPopup() {
  return (
    <div className="p-4 bg-black text-white">
      <h1 className="font-bold text-2xl">Unstrand</h1>
      <p>Version { version }</p>
    </div>
  )
}

export default IndexPopup
