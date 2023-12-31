import { useEffect, useState } from "react";
import { useStorage } from "@plasmohq/storage/hook"
import { Storage } from "@plasmohq/storage";

function NotificationsArea() {
  const [notification, setNotificationStorage] = useStorage({key: "notifications", instance: new Storage({ area: 'local' })})

  useEffect(() => {
    if (notification == "") return;

    console.log(notification)
    setTimeout(() => { setNotificationStorage("") }, 5000)
  }, [notification])


  return (<>
    <div className="text-white text-sm flex items-center justify-center">
      {notification ?
        <div className="p-2">{notification}</div> : <></>
      }
    </div>
  </>);
}

export default NotificationsArea;