import { Storage } from "@plasmohq/storage"
import dayjs from "dayjs"
import { mergeObjects } from "./mergeObjects";

const storage = new Storage({
  area: "local"
})

export async function checkRefresh() {
  const lastRefreshDate = await storage.get("last-refresh")
  if (lastRefreshDate == dayjs().format("YYYY-MM-DD")) return;

  const yearlyTimeRaw = await storage.get("yearly-time")
  let yearlyTime = {}
  if (yearlyTimeRaw) yearlyTime = JSON.parse(yearlyTimeRaw)

  const dailyTimeRaw = await storage.get("daily-time")
  let dailyTime = JSON.parse(dailyTimeRaw)

  const newYearlyTime = mergeObjects(yearlyTime, dailyTime)
  await storage.set("yearly-time", JSON.stringify(newYearlyTime))

  await storage.set("last-refresh", dayjs().format("YYYY-MM-DD"))
}