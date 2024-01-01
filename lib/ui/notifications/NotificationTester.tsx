import { useStorage } from "@plasmohq/storage/hook";
import { Storage } from "@plasmohq/storage";


function NotificationTester() {
  const [notification, setNotificationStorage] = useStorage({ key: "notifications", instance: new Storage({ area: 'local' }) })

  function triggerNotification() {
    setNotificationStorage({ content: "No seriously, what are you doing 🤨📸", duration: 3000 })
  }
  
  return (<>
    <button onClick={triggerNotification} className="bg-neutral-800 text-white p-4 text-sm rounded-lg">
      Test Notifications
    </button>
  </>);
}

export default NotificationTester;