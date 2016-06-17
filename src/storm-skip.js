(function(root, factory) {
  if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.StormSkip = factory();
  }
}(this, function() {
	'use strict';
    
    window.addEventListener("hashchange", function() {
      var element = document.getElementById(location.hash.substring(1));

      if (element) {
          if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
              element.tabIndex = -1;
          }
          element.focus();
      }

  }, false); 

 }));