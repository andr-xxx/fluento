// Content script for Fluento extension

// Listen for text selection
document.addEventListener('mouseup', handleTextSelection)
document.addEventListener('keyup', handleTextSelection)

let lastSelectedText = ''

function handleTextSelection() {
  const selection = window.getSelection()
  const selectedText = selection?.toString().trim()
  
  if (selectedText && selectedText !== lastSelectedText && selectedText.length > 0) {
    lastSelectedText = selectedText
    
    // Send message to background script
    chrome.runtime.sendMessage({
      type: 'TEXT_SELECTED',
      text: selectedText
    })
  }
}

// Listen for messages from popup
chrome.runtime.onMessage.addListener((request, _sender, sendResponse) => {
  if (request.type === 'GET_SELECTED_TEXT') {
    const selectedText = window.getSelection()?.toString().trim() || ''
    sendResponse({ text: selectedText })
  }
}) 