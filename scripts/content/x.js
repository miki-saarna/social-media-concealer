(() => {
  hideElements();

  // document.addEventListener("yt-navigate-finish", () => {
  //   hideElements();
  // });
})();

function hideElements() {
  removeHider();

  const url = window.location.href;

  if (url === "https://twitter.com/home" || url === "https://x.com/home") {
    const css = `
      .css-175oi2r.r-f8sm7e.r-13qz1uu.r-1ye8kvj {
        visibility: hidden !important;
      }

      .css-175oi2r.r-vacyoi.r-ttdzmv > :not(:first-child) {
        visibility: hidden !important;
        background: red;
      }
    `;

    const style = document.createElement("style");
    style.id = "x_content_concealer";
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
  }

  // if (url.includes("results")) {}
}

function removeHider() {
  const styleElement = document.head.querySelector("#x_content_concealer");
  if (styleElement) {
    styleElement.remove();
  }
}
