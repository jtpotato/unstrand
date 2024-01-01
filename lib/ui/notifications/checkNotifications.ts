import { Storage } from "@plasmohq/storage"
import notificationMilestones from "~lib/ui/notifications/milestoneNotifications.json"

const storage = new Storage({
  area: "local"
})

function generateRange(number, range: number) {
  let start = number
  let end = number + range
  let rangeNumbers = []

  for (let i = start; i < end; i++) {
    rangeNumbers.push(i)
  }

  return rangeNumbers
}

export async function checkNotifications(domain: string, time: number) {
  let range = generateRange(time, 2)

  range.forEach((pointInRange) => {
    console.log(pointInRange.toString())
    if (!notificationMilestones[pointInRange.toString()]) return

    (async () => {
      const notificationsInStorage = await storage.get("notifications")
      if (!notificationsInStorage) return;

      console.log(notificationMilestones[pointInRange])
      await storage.set("notifications", { content: notificationMilestones[pointInRange], duration: 3000 })
    })()
  })
}