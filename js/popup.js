/*
// CORS para probar en Chrome

chrome.webRequest.onHeadersReceived.addListener(
  function(details) {
    const responseHeaders = details.responseHeaders || [];
    responseHeaders.push({ name: 'Access-Control-Allow-Origin', value: '*' });
    responseHeaders.push({ name: 'Access-Control-Allow-Headers', value: 'Origin, X-Requested-With, Content-Type, Accept' });
    return { responseHeaders: responseHeaders };
  },
  { urls: ['<all_urls>'] },
  ['blocking', 'responseHeaders']
);

*/