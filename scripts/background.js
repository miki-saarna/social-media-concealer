const concealer = {
  youtube: true,
  x: true,
};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("message", message);
  if (message.action === "getCurrentTabUrl") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      sendResponse({ url: tabs[0].url });
    });
    return true; // Keeps the message channel open for sendResponse
  } else {
    const { type, key, value } = message;
    if (type === "setState") {
      concealer[key] = value;
      sendResponse({ status: "success" });
    } else if (type === "getState") {
      sendResponse({ value: concealer[key] });
    }
  }
});
