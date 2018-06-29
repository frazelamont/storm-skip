/**
 * @name storm-skip: Fixes skip to content links focus problem
 * @version 1.0.5: Fri, 29 Jun 2018 12:38:25 GMT
 * @author stormid
 * @license MIT
 */
(function(root, factory) {
   var mod = {
       exports: {}
   };
   if (typeof exports !== 'undefined'){
       mod.exports = exports
       factory(mod.exports)
       module.exports = mod.exports.default
   } else {
       factory(mod.exports);
       root.StormSkip = mod.exports.default
   }

}(this, function(exports) {
   'use strict';

{
	var focusable = ['a', 'select', 'input', 'button', 'textarea'];

	window.addEventListener('hashchange', function () {
		var element = document.getElementById(window.location.hash.substring(1));

		if (element) {
			if (!(focusable.indexOf(element.tagName.toLowerCase()) > -1)) {
				element.tabIndex = -1;
			}
			element.focus();
		}
	});
};
}));
