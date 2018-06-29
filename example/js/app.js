(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _stormSkip = require('./libs/storm-skip');

var _stormSkip2 = _interopRequireDefault(_stormSkip);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

},{"./libs/storm-skip":2}],2:[function(require,module,exports){
'use strict';

/**
 * @name storm-skip: Fixes skip to content links focus problem
 * @version 1.0.5: Fri, 29 Jun 2018 12:38:25 GMT
 * @author stormid
 * @license MIT
 */

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
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlL3NyYy9hcHAuanMiLCJleGFtcGxlL3NyYy9saWJzL3N0b3JtLXNraXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQUEsYUFBQSxRQUFBLG1CQUFBLENBQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7QUFNQTtBQUNDLEtBQUksWUFBWSxDQUFBLEdBQUEsRUFBQSxRQUFBLEVBQUEsT0FBQSxFQUFBLFFBQUEsRUFBaEIsVUFBZ0IsQ0FBaEI7O0FBRUEsUUFBQSxnQkFBQSxDQUFBLFlBQUEsRUFBc0MsWUFBTTtBQUMzQyxNQUFJLFVBQVUsU0FBQSxjQUFBLENBQXdCLE9BQUEsUUFBQSxDQUFBLElBQUEsQ0FBQSxTQUFBLENBQXRDLENBQXNDLENBQXhCLENBQWQ7O0FBRUEsTUFBQSxPQUFBLEVBQWE7QUFDWixPQUFHLEVBQUUsVUFBQSxPQUFBLENBQWtCLFFBQUEsT0FBQSxDQUFsQixXQUFrQixFQUFsQixJQUFtRCxDQUF4RCxDQUFHLENBQUgsRUFBNEQ7QUFDM0QsWUFBQSxRQUFBLEdBQW1CLENBQW5CLENBQUE7QUFDQTtBQUNELFdBQUEsS0FBQTtBQUNBO0FBUkYsRUFBQTtBQVVBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IFNraXAgIGZyb20gJy4vbGlicy9zdG9ybS1za2lwJzsiLCIvKipcbiAqIEBuYW1lIHN0b3JtLXNraXA6IEZpeGVzIHNraXAgdG8gY29udGVudCBsaW5rcyBmb2N1cyBwcm9ibGVtXG4gKiBAdmVyc2lvbiAxLjAuNTogRnJpLCAyOSBKdW4gMjAxOCAxMjozODoyNSBHTVRcbiAqIEBhdXRob3Igc3Rvcm1pZFxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbntcblx0bGV0IGZvY3VzYWJsZSA9IFsnYScsICdzZWxlY3QnLCAnaW5wdXQnLCAnYnV0dG9uJywgJ3RleHRhcmVhJ107XG4gIFxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsICgpID0+IHtcblx0XHRsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKSk7XG5cblx0XHRpZiAoZWxlbWVudCkge1xuXHRcdFx0aWYoIShmb2N1c2FibGUuaW5kZXhPZihlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSkgPiAtMSkpe1xuXHRcdFx0XHRlbGVtZW50LnRhYkluZGV4ID0gLTE7XG5cdFx0XHR9XG5cdFx0XHRlbGVtZW50LmZvY3VzKCk7XG5cdFx0fVxuXHR9KTtcbn0iXX0=
