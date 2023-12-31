export const getCurrentTab = async () => {
  const currentTabs = await chrome.tabs.query({ active: true })
  return currentTabs[0] as chrome.tabs.Tab
}