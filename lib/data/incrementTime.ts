import { Storage } from "@plasmohq/storage"
import dayjs from "dayjs"
import { checkNotifications } from "~lib/ui/notifications/checkNotifications"

const storage = new Storage({
  area: "local"
})

async function incrementSpecificKey(key: string, domain: string) {
  const storageReturn = await storage.get(key)
  let times = storageReturn ? storageReturn : {}

  if (times[domain]) times[domain] = times[domain] + 1
  else times[domain] = 1

  await checkNotifications(domain, times[domain])

  await storage.set(key, times)
}

async function clearDaily() {
  const storageReturn = await storage.get("cleared-date")
  let clearedDate = storageReturn ? storageReturn : null

  if (clearedDate == dayjs().format("YYYY-MM-DD")) return;
  
  await storage.set("daily-times", {})
  await storage.set("cleared-date", dayjs().format("YYYY-MM-DD"))
}

export const incrementTime = async (domain: string) => {
  await clearDaily()
  await incrementSpecificKey("daily-times", domain)
  await incrementSpecificKey(dayjs().format("YYYY-MM"), domain)
}