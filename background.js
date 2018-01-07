function isPDFVisor(url) {
  return /.iquiosc\.cat\/visor\/./.test(url);
}

function initializePageAction(tab) {
  if (isPDFVisor(tab.url)) {
    browser.pageAction.setTitle({tabId: tab.id, title: browser.i18n.getMessage("downloadPdf")});
    browser.pageAction.show(tab.id);
  }
}

const gettingAllTabs = browser.tabs.query({});
gettingAllTabs.then((tabs) => {
  for (let tab of tabs) {
    initializePageAction(tab);
  }
});

browser.tabs.onUpdated.addListener((id, changeInfo, tab) => {
  initializePageAction(tab);
});

browser.pageAction.onClicked.addListener(tab => {
  browser.tabs.executeScript(tab.id, {file: '/download.js'});
});
