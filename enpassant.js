chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.update({
    url: "https://www.google.com/search?q=en+passant"
  });
});
