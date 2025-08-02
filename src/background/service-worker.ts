// Background service worker for Fluento extension

// Handle extension installation
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    // Set default settings
    chrome.storage.sync.set({
      autoTranslate: false,
      saveHistory: true,
      theme: 'light'
    })
  }
})

// Handle messages from content scripts and popup
chrome.runtime.onMessage.addListener((request, _sender, sendResponse) => {
  // Basic message handling - will be implemented later
  if (request.type === 'PING') {
    sendResponse({ success: true, message: 'Pong!' })
  }
}) 