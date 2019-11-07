const closeOtherTabs = (tabs) => {
  chrome.tabs.remove(tabs.map(({id}) => id));
};

chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.query({pinned: false, active: false}, closeOtherTabs);
});

chrome.commands.onCommand.addListener(() => {
  chrome.tabs.query({pinned: false, active: false}, closeOtherTabs);
});
