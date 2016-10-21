(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _stormSkip = require('./libs/storm-skip');

var _stormSkip2 = _interopRequireDefault(_stormSkip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./libs/storm-skip":2}],2:[function(require,module,exports){
'use strict';

/**
 * @name storm-skip: 
 * @version 0.1.0: Fri, 21 Oct 2016 10:12:09 GMT
 * @author stormid
 * @license MIT
 */
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
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlL3NyYy9hcHAuanMiLCJleGFtcGxlL3NyYy9saWJzL3N0b3JtLXNraXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7Ozs7Ozs7QUNBQTs7Ozs7O0FBTUE7QUFBQTtBQUNFLFlBQUksWUFBWSxDQUFDLEdBQUQsRUFBTSxRQUFOLEVBQWdCLE9BQWhCLEVBQXlCLFFBQXpCLEVBQW1DLFVBQW5DLENBQWhCOztBQUVBLGVBQU8sZ0JBQVAsQ0FBd0IsWUFBeEIsRUFBc0MsWUFBTTs7QUFFeEMsZ0JBQUksVUFBVSxTQUFTLGNBQVQsQ0FBd0IsT0FBTyxRQUFQLENBQWdCLElBQWhCLENBQXFCLFNBQXJCLENBQStCLENBQS9CLENBQXhCLENBQWQ7O0FBRUEsZ0JBQUksT0FBSixFQUFhO0FBQ1Qsb0JBQUcsRUFBRSxVQUFVLE9BQVYsQ0FBa0IsUUFBUSxPQUFSLENBQWdCLFdBQWhCLEVBQWxCLElBQW1ELENBQUMsQ0FBdEQsQ0FBSCxFQUE0RDtBQUN4RCw0QkFBUSxRQUFSLEdBQW1CLENBQUMsQ0FBcEI7QUFDSDtBQUNELHdCQUFRLEtBQVI7QUFDSDtBQUVKLFNBWEQ7QUFIRjtBQWVDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBTa2lwICBmcm9tICcuL2xpYnMvc3Rvcm0tc2tpcCc7IiwiLyoqXG4gKiBAbmFtZSBzdG9ybS1za2lwOiBcbiAqIEB2ZXJzaW9uIDAuMS4wOiBGcmksIDIxIE9jdCAyMDE2IDEwOjEyOjA5IEdNVFxuICogQGF1dGhvciBzdG9ybWlkXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xue1xuICBsZXQgZm9jdXNhYmxlID0gWydhJywgJ3NlbGVjdCcsICdpbnB1dCcsICdidXR0b24nLCAndGV4dGFyZWEnXTtcbiAgXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLCAoKSA9PiB7XG4gICAgXG4gICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKSk7XG5cbiAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgaWYoIShmb2N1c2FibGUuaW5kZXhPZihlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSkgPiAtMSkpe1xuICAgICAgICAgICAgICBlbGVtZW50LnRhYkluZGV4ID0gLTE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH1cblxuICB9KTtcbn0iXX0=
