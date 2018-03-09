(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
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
 * @version 0.1.0: Fri, 10 Mar 2017 18:03:20 GMT
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlL3NyYy9hcHAuanMiLCJleGFtcGxlL3NyYy9saWJzL3N0b3JtLXNraXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7O0FBTUEsQUFDQztLQUFJLFlBQVksQ0FBQSxBQUFDLEtBQUQsQUFBTSxVQUFOLEFBQWdCLFNBQWhCLEFBQXlCLFVBQXpDLEFBQWdCLEFBQW1DLEFBRW5EOztRQUFBLEFBQU8saUJBQVAsQUFBd0IsY0FBYyxZQUFNLEFBQzNDO01BQUksVUFBVSxTQUFBLEFBQVMsZUFBZSxPQUFBLEFBQU8sU0FBUCxBQUFnQixLQUFoQixBQUFxQixVQUEzRCxBQUFjLEFBQXdCLEFBQStCLEFBRXJFOztNQUFBLEFBQUksU0FBUyxBQUNaO09BQUcsRUFBRSxVQUFBLEFBQVUsUUFBUSxRQUFBLEFBQVEsUUFBMUIsQUFBa0IsQUFBZ0IsaUJBQWlCLENBQXhELEFBQUcsQUFBc0QsSUFBRyxBQUMzRDtZQUFBLEFBQVEsV0FBVyxDQUFuQixBQUFvQixBQUNwQjtBQUNEO1dBQUEsQUFBUSxBQUNSO0FBQ0Q7QUFURCxBQVVBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc31yZXR1cm4gZX0pKCkiLCJpbXBvcnQgU2tpcCAgZnJvbSAnLi9saWJzL3N0b3JtLXNraXAnOyIsIi8qKlxuICogQG5hbWUgc3Rvcm0tc2tpcDogRml4ZXMgc2tpcCB0byBjb250ZW50IGxpbmtzIGZvY3VzIHByb2JsZW1cbiAqIEB2ZXJzaW9uIDAuMS4wOiBGcmksIDEwIE1hciAyMDE3IDE4OjAzOjIwIEdNVFxuICogQGF1dGhvciBzdG9ybWlkXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xue1xuXHRsZXQgZm9jdXNhYmxlID0gWydhJywgJ3NlbGVjdCcsICdpbnB1dCcsICdidXR0b24nLCAndGV4dGFyZWEnXTtcbiAgXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgKCkgPT4ge1xuXHRcdGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQod2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpKTtcblxuXHRcdGlmIChlbGVtZW50KSB7XG5cdFx0XHRpZighKGZvY3VzYWJsZS5pbmRleE9mKGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpKSA+IC0xKSl7XG5cdFx0XHRcdGVsZW1lbnQudGFiSW5kZXggPSAtMTtcblx0XHRcdH1cblx0XHRcdGVsZW1lbnQuZm9jdXMoKTtcblx0XHR9XG5cdH0pO1xufSJdfQ==
