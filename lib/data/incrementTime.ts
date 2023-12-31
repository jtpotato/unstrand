import { Storage } from "@plasmohq/storage"

const storage = new Storage({
  area: "local"
})

export const incrementTime = async (domain: string) => {
  let dailyTimeRaw = await storage.get(`daily-time`)
  let todayTimes = {}
  if (dailyTimeRaw) todayTimes = JSON.parse(dailyTimeRaw)

  let time = todayTimes[domain] + 1
  todayTimes[domain] = time

  await storage.set("daily-time", JSON.stringify(todayTimes))
}