(() => {
  chrome.runtime.sendMessage(
    { type: "getState", key: "youtube" },
    function (response) {
      if (response.value) {
        hideElements();
      }
    }
  );

  // document.addEventListener("yt-navigate-finish", () => {
  //   hideElements();
  // });
})();

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "changeDOM") {
    const isConcealed = message.data.conceal;
    setState("youtube", isConcealed);
    if (isConcealed) {
      hideElements();
    } else {
      location.reload();
      // removeHider();
    }
  }
});

function setState(platform, conceal) {
  chrome.runtime.sendMessage(
    { type: "setState", key: platform, value: conceal },
    function (response) {
      console.log(response.status);
    }
  );
}

function hideElements() {
  // removeHider();

  const url = window.location.href;
  console.log("url", url);

  if (
    url === "https://www.youtube.com/" ||
    url === "https://www.youtube.com/?gl=US"
  ) {
    // const css = `
    //   #contents {
    //     display: none !important;
    //   }
    // `;

    // const style = document.createElement("style");
    // style.id = "youtube_content_concealer";
    // style.appendChild(document.createTextNode(css));
    // document.head.appendChild(style);

    removeDomEl("contents");
  } else if (url.includes("watch")) {
    // const css = `
    //   #comments, #secondary {
    //     display: none !important;
    //   }
    // `;

    // const style = document.createElement("style");
    // style.id = "youtube_content_concealer";
    // style.appendChild(document.createTextNode(css));
    // document.head.appendChild(style);

    removeDomEl("comments");
    removeDomEl("secondary");
    removeDomEl("chat-container");
  }

  // if (url.includes("results")) {}
}

// function removeHider() {
//   const styleElement = document.head.querySelector(
//     "#youtube_content_concealer"
//   );
//   if (styleElement) {
//     styleElement.remove();
//   }
// }

function removeDomEl(id) {
  const foundEl = document.getElementById(id);
  console.log("foundEl", foundEl);
  foundEl?.remove();
}
