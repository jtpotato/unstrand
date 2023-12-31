import { Storage } from "@plasmohq/storage"

const storage = new Storage({
  area: "local"
})

export async function getTime() {
  const hostname = window.location.hostname
  const dailyTime = await storage.get(`daily-times`)
  const time = dailyTime[hostname] as number

  return time
}