import { Storage } from "@plasmohq/storage"

const storage = new Storage({
  area: "local"
})


export const isNotFocused = async () => {
  const focused = await storage.get("browser-focused")

  chrome.windows.getCurrent(async (browser) => {
    let focusedState = browser.focused ? "true" : "false"
    if (focused != focusedState) {
      await storage.set("browser-focused", focusedState)
    }
  })

  const currentFocusState = await storage.get("browser-focused")

  return currentFocusState == "false"
}