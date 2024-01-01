import { useEffect, useState } from "react";
import { useStorage } from "@plasmohq/storage/hook"
import { Storage } from "@plasmohq/storage";

function NotificationsArea() {
  const [notification, setNotificationStorage] = useStorage({ key: "notifications", instance: new Storage({ area: 'local' }) })

  useEffect(() => {
    if (!notification) { setNotificationStorage({}); return; }
    if (!notification.duration) return;

    setTimeout(() => { setNotificationStorage({}); }, notification.duration)
  }, [notification])


  return (<>
    <div className="text-white text-sm flex items-center justify-center overflow-clip">
      {notification && notification.content ?
        <div className="px-6 py-14 notification-entry-animation max-w-[20vw]">{notification.content}</div>
        : <></>
      }
    </div>
  </>);
}

export default NotificationsArea;