const closeOtherTabs = (tabs) => {
  chrome.tabs.remove(tabs.map(({id}) => id));
};

chrome.action.onClicked.addListener(() => {
  chrome.tabs.query({pinned: false, active: false}, closeOtherTabs);
});

chrome.commands.onCommand.addListener(() => {
  chrome.tabs.query({pinned: false, active: false}, closeOtherTabs);
});
