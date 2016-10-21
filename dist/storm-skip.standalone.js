/**
 * @name storm-skip: 
 * @version 0.1.0: Fri, 21 Oct 2016 10:12:09 GMT
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
    (function () {
        var focusable = ['a', 'select', 'input', 'button', 'textarea'];

        window.addEventListener("hashchange", function () {

            var element = document.getElementById(window.location.hash.substring(1));

            if (element) {
                if (!(focusable.indexOf(element.tagName.toLowerCase()) > -1)) {
                    element.tabIndex = -1;
                }
                element.focus();
            }
        });
    })();
};
}));
