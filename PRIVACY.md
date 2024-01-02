# Unstrand Privacy Policy
The following privacy policy outlines how data is collected, stored, and used in Unstrand - the Chrome Extension.

## Non-local Data Collection
This extension does not send any data anywhere outside of the computer/device that it is running on. Therefore, none of your data can be sold to third parties.

## Local Data Collection
### Chrome Storage API
This extension makes use of the [Chrome Storage API](https://developer.chrome.com/docs/extensions/reference/api/storage), or whatever equivalent is present on your browser, to store state information. This extension does not utilise the "sync" feature. This state information *does* include the **hostname** of the sites that you have visited. Crucially this does not include individual pages or URL parameters. (i.e. The extension sees, and stores, locally, `www.youtube.com`, but not `www.youtube.com/watch?v=dQw4w9WgXcQ`)

### Mouse Events API
Within content scripts in this extension, listeners to the `mousemove` event are registered. This allows the extension to perform actions whenever your cursor moves, with access to the location of this cursor, for example, hiding the UI element that displays the time you have spent on the current site if your cursor gets too close to it. It should be noted that this **does not include keyloggers** and data from the event is only used once, **never stored**.

## Changes
If additional methods of using user data are added to this Privacy Policy, updates will be sent out over [Discord](https://discord.gg/acpmJvpYyZ), and in the release of the extension prior to the updated Privacy Policy taking action.

## Feedback
For all communications regarding this Privacy Policy, send me an [email](mailto:jtpotato_@outlook.com) or file an issue.
