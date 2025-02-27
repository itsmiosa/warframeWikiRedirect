chrome.runtime.onInstalled.addListener(() => {
    chrome.declarativeNetRequest.updateDynamicRules({
      addRules: [
        {
          id: 1,
          priority: 1,
          action: {
            type: "redirect",
            redirect: {
              regexSubstitution: "https://wiki.warframe.com/w/\\1"
            }
          },
          condition: {
            regexFilter: "^https://warframe\\.fandom\\.com/wiki/(.+)$",
            resourceTypes: ["main_frame"]
          }
        }
      ],
    });
  });
  
