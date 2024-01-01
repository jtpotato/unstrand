import cssText from "data-text:~style.css"
import timerCircle from "data-text:~lib/ui/timer-circle/TimerCircle.css"
import timerIsland from "data-text:~contents/TimerIsland.css"
import notification from "data-text:~lib/ui/notifications/Notification.css"

export function getAllStyles() {
  return cssText + timerCircle + timerIsland + notification
}