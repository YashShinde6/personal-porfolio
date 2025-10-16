// Aggressive hash removal
(function() {
  'use strict';
  
  function removeHash() {
    if (window.location.hash) {
      const cleanUrl = window.location.protocol + '//' + window.location.host + window.location.pathname + window.location.search;
      window.history.replaceState({}, document.title, cleanUrl);
    }
  }
  
  // Remove hash immediately
  removeHash();
  
  // Override history methods
  const originalPushState = history.pushState;
  const originalReplaceState = history.replaceState;
  
  history.pushState = function(state, title, url) {
    if (url && url.includes('#')) {
      url = url.split('#')[0];
    }
    return originalPushState.call(history, state, title, url);
  };
  
  history.replaceState = function(state, title, url) {
    if (url && url.includes('#')) {
      url = url.split('#')[0];
    }
    return originalReplaceState.call(history, state, title, url);
  };
  
  // Prevent all hash-related events
  window.addEventListener('hashchange', function(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    removeHash();
    return false;
  }, true);
  
  // Override location.hash setter
  Object.defineProperty(window.location, 'hash', {
    set: function() {
      // Do nothing - prevent hash setting
    },
    get: function() {
      return '';
    }
  });
  
  // Continuous monitoring
  setInterval(removeHash, 10);
  
  // Remove on page visibility change
  document.addEventListener('visibilitychange', removeHash);
  window.addEventListener('focus', removeHash);
  window.addEventListener('blur', removeHash);
  
})();