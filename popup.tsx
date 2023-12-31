import "./style.css"
import { version } from "./package.json"

function IndexPopup() {
  return (
    <div className="p-4 bg-black text-white">
      <h1 className="font-bold text-2xl">Unstrand</h1>
      <p>Version {version}</p>
      <button
        onClick={() => {
          chrome.tabs.create({
            url: "./tabs/stats.html"
          })
        }}
        className="bg-white/15 rounded-md px-4 py-2 my-4"
      >
        Open Stats
      </button>
    </div>
  )
}

export default IndexPopup
