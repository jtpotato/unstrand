import dayjs from "dayjs";
import { isNotFocused } from "~lib/browserFocus";
import { checkRefresh } from "~lib/checkRefresh";
import { getCurrentTab } from "~lib/currentTab";
import { incrementTime } from "~lib/incrementTime";
export {}

setInterval(async () => {
  if (await isNotFocused()) return;
  const tab = await getCurrentTab()

  if (!tab) return;
  if (!tab.url) return;

  const domain = new URL(tab.url).hostname
  await incrementTime(domain)
  await checkRefresh()
}, 1000)