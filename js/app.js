(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _stormSkip = require('./libs/storm-skip');

var _stormSkip2 = _interopRequireDefault(_stormSkip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./libs/storm-skip":2}],2:[function(require,module,exports){
'use strict';

/**
 * @name storm-skip: Fixes skip to content links focus problem
 * @version 0.1.0: Fri, 10 Feb 2017 17:36:06 GMT
 * @author stormid
 * @license MIT
 */
{
	(function () {
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
	})();
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlL3NyYy9hcHAuanMiLCJleGFtcGxlL3NyYy9saWJzL3N0b3JtLXNraXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7Ozs7Ozs7QUNBQTs7Ozs7O0FBTUE7QUFBQTtBQUNDLE1BQUksWUFBWSxDQUFDLEdBQUQsRUFBTSxRQUFOLEVBQWdCLE9BQWhCLEVBQXlCLFFBQXpCLEVBQW1DLFVBQW5DLENBQWhCOztBQUVBLFNBQU8sZ0JBQVAsQ0FBd0IsWUFBeEIsRUFBc0MsWUFBTTtBQUMzQyxPQUFJLFVBQVUsU0FBUyxjQUFULENBQXdCLE9BQU8sUUFBUCxDQUFnQixJQUFoQixDQUFxQixTQUFyQixDQUErQixDQUEvQixDQUF4QixDQUFkOztBQUVBLE9BQUksT0FBSixFQUFhO0FBQ1osUUFBRyxFQUFFLFVBQVUsT0FBVixDQUFrQixRQUFRLE9BQVIsQ0FBZ0IsV0FBaEIsRUFBbEIsSUFBbUQsQ0FBQyxDQUF0RCxDQUFILEVBQTREO0FBQzNELGFBQVEsUUFBUixHQUFtQixDQUFDLENBQXBCO0FBQ0E7QUFDRCxZQUFRLEtBQVI7QUFDQTtBQUNELEdBVEQ7QUFIRDtBQWFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBTa2lwICBmcm9tICcuL2xpYnMvc3Rvcm0tc2tpcCc7IiwiLyoqXG4gKiBAbmFtZSBzdG9ybS1za2lwOiBGaXhlcyBza2lwIHRvIGNvbnRlbnQgbGlua3MgZm9jdXMgcHJvYmxlbVxuICogQHZlcnNpb24gMC4xLjA6IEZyaSwgMTAgRmViIDIwMTcgMTc6MzY6MDYgR01UXG4gKiBAYXV0aG9yIHN0b3JtaWRcbiAqIEBsaWNlbnNlIE1JVFxuICovXG57XG5cdGxldCBmb2N1c2FibGUgPSBbJ2EnLCAnc2VsZWN0JywgJ2lucHV0JywgJ2J1dHRvbicsICd0ZXh0YXJlYSddO1xuICBcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCAoKSA9PiB7XG5cdFx0bGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSkpO1xuXG5cdFx0aWYgKGVsZW1lbnQpIHtcblx0XHRcdGlmKCEoZm9jdXNhYmxlLmluZGV4T2YoZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkpID4gLTEpKXtcblx0XHRcdFx0ZWxlbWVudC50YWJJbmRleCA9IC0xO1xuXHRcdFx0fVxuXHRcdFx0ZWxlbWVudC5mb2N1cygpO1xuXHRcdH1cblx0fSk7XG59Il19
