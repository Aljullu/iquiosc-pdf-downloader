browser.pageAction.onClicked.addListener((tab) => {
  browser.tabs.executeScript(tab.id, { file: "./download.js" });
});
