import dayjs from "dayjs";
import { isNotFocused } from "~lib/browser/browserFocus";
import { getCurrentTab } from "~lib/browser/currentTab";
import { incrementTime } from "~lib/data/incrementTime";
export {}

setInterval(async () => {
  if (await isNotFocused()) return;
  const tab = await getCurrentTab()

  if (!tab) return;
  if (!tab.url) return;

  const domain = new URL(tab.url).hostname
  await incrementTime(domain)
}, 1000)