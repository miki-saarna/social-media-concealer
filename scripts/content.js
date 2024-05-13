document.addEventListener("yt-navigate-finish", hideElements);

function hideElements() {
  removeCSS();

  const url = window.location.href;

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
    style.id = "youtube_content_concealer";
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
  } else if (url.includes("watch")) {
    const css = `
      #comments, #secondary {
        display: none !important;
      }
    `;

    const style = document.createElement("style");
    style.id = "youtube_content_concealer";
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
  }

  // if (url.includes("results")) {}
}

function removeCSS() {
  const styleElement = document.head.querySelector(
    "#youtube_content_concealer"
  );
  if (styleElement) {
    styleElement.remove();
  }
}
