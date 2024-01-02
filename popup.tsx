import "./style.css"
import { version } from "./package.json"

function IndexPopup() {
  return (
    <div className="p-4 bg-black text-white">
      <h1 className="font-bold text-2xl">Unstrand</h1>
      <p>Version {version}</p>
      <br />
      <div className="flex gap-2">
        <button
          onClick={() => {
            chrome.tabs.create({
              url: "./tabs/stats.html"
            })
          }}
          className="bg-white/15 rounded-md px-4 py-2 whitespace-nowrap"
        >
          Open Stats
        </button>

        <button
          onClick={() => {
            chrome.tabs.create({
              url: "./tabs/components.html"
            })
          }}
          className="bg-white/15 rounded-md px-4 py-2"
        >
          Developer
        </button>

        <button
          onClick={() => {
            chrome.tabs.create({
              url: "https://buymeacoffee.com/jtpotato"
            })
          }}
          className="bg-white/15 rounded-md px-4 py-2"
        >
          <p className="m-auto">Donate</p>
        </button>
      </div>

    </div>
  )
}

export default IndexPopup
