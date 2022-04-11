// Function called when a new message is received
const messagesFromReactAppListener = (msg, sender, sendResponse) => {
  console.log('[content.js]. Message received', msg);

  const headlines = Array.from(document.getElementsByTagName < 'h1' > 'h1').map(h1 => h1.innerText);

  // Prepare the response object with information about the site
  const response = {
    title: document.title,
    headlines,
  };

  sendResponse(response);
};

/**
 * Fired when a message is sent from either an extension process or a content script.
 */
// eslint-disable-next-line no-undef
chrome.runtime.onMessage.addListener(messagesFromReactAppListener);
