const concealer = {
  youtube: true,
};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  const { type, key, value } = message;
  if (type === "setState") {
    concealer[key] = value;
    sendResponse({ status: "success" });
  } else if (type === "getState") {
    sendResponse({ value: concealer[key] });
  }
});
