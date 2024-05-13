function hideElements() {
  const url = window.location.href;

  // home page
  if (
    url === "https://www.youtube.com/" ||
    url === "https://www.youtube.com/?gl=US"
  ) {
    const css = `
      #contents {
        display: none !important;
      }
    `;

    const style = document.createElement("style");
    style.id = "youtube_home_page_concealer";
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style); // manual removal necessary?
  } else {
    // remove from other sources
    removeCSS("#youtube_home_page_concealer");
  }

  // video page
  if (url.includes("watch")) {
    const css = `
      #comments, #secondary {
        display: none !important;
      }
    `;

    const style = document.createElement("style");
    style.id = "youtube_video_page_concealer";
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style); // manual removal necessary?
  } else {
    // remove from other sources
    removeCSS("#youtube_video_page_concealer");
  }

  // if (url.includes("results")) {}
}

hideElements();

function removeCSS(styleId) {
  const styleElement = document.head.querySelector(styleId);
  if (styleElement) {
    styleElement.remove();
  } else {
    console.log("not found");
  }
}
