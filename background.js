const closeOtherTabs = (activeTab, tabs) => {
  const otherTabIndexes = tabs.map(({id}) => id).filter((id) => activeTab.id !== id);
  chrome.tabs.remove(otherTabIndexes);
};

chrome.browserAction.onClicked.addListener((activeTab) => {
  chrome.tabs.query({pinned: false}, (tabs) => closeOtherTabs(activeTab, tabs));
});

// TODO listen to hotkeys
chrome.commands.onCommand.addListener(() => {});
