chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
	if (changeInfo.status === 'complete' && /^http/.test(tab.url)) {
	  chrome.tabs.query({ active: true, currentWindow: true }, (activeTabs) => {
		if (activeTabs.length > 0 && activeTabs[0].id === tabId) {
		  chrome.scripting.executeScript({
			target: { tabId: tabId },
			files: ["./content.js"]
		  }).then(() => {
			console.log("Script injected into the active tab");
		  }).catch(error => {
			console.log(error, "in background.js");
		  });
		}
	  });
	}
  });
  
