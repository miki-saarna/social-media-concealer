export function concealer(conceal) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const activeTab = tabs[0];

    chrome.tabs.sendMessage(
      activeTab.id,
      {
        action: "changeDOM",
        data: {
          conceal,
        },
      },
      function (res) {
        console.log(res.status);
      }
    );
  });
}

export function getCurrentTabUrl(setCurrentUrl) {
  chrome.runtime.sendMessage({ action: "getCurrentTabUrl" }, (response) => {
    setCurrentUrl(response.url);
  });
}
