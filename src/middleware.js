export default function concealer(conceal) {
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
