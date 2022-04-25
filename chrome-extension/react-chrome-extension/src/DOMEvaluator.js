const messagesFromReactAppListener = (msg, sender, sendResponse) => {
  console.log('[content.js]. Message received', msg);

  const response = {
    title: document.title,
    headlines: Array.from(document.getElementsByTagName('h1')).map(h1 => h1.innerText),
  };

  console.log('[content.js]. Message response', response);

  sendResponse(response);
};

// eslint-disable-next-line no-undef
chrome.runtime.onMessage.addListener(messagesFromReactAppListener);

console.log(process.env.REACT_APP_TEST);
