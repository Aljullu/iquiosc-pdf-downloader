var script = document.createElement("script");
script.textContent = `
  var iQuioscPdfDownloaderScript = document.getElementById("webviewer-1");
  if (iQuioscPdfDownloaderScript.contentWindow.instance) {
    iQuioscPdfDownloaderScript.contentWindow.instance.downloadPdf();
  } else {
    iQuioscPdfDownloaderScript.addEventListener("load", () => {
      iQuioscPdfDownloaderScript.contentWindow.instance.downloadPdf();
    });
  };
`;
document.documentElement.appendChild(script);
script.remove();
