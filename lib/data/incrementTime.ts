import { Storage } from "@plasmohq/storage"
import dayjs from "dayjs"

const storage = new Storage({
  area: "local"
})

async function incrementSpecificKey(key: string, domain: string) {
  const storageReturn = await storage.get(key)
  let times = storageReturn ? storageReturn : {}

  if (times[domain]) times[domain] = times[domain] + 1
  else times[domain] = 1

  await storage.set(key, times)
}

export const incrementTime = async (domain: string) => {
  await incrementSpecificKey("daily-times", domain)
  await incrementSpecificKey(dayjs().format("YYYY-MM"), domain)
}