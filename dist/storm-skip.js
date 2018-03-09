/**
 * @name storm-skip: Fixes skip to content links focus problem
 * @version 1.0.3: Fri, 09 Mar 2018 20:15:01 GMT
 * @author stormid
 * @license MIT
 */
{
	let focusable = ['a', 'select', 'input', 'button', 'textarea'];
  
	window.addEventListener('hashchange', () => {
		let element = document.getElementById(window.location.hash.substring(1));

		if (element) {
			if(!(focusable.indexOf(element.tagName.toLowerCase()) > -1)){
				element.tabIndex = -1;
			}
			element.focus();
		}
	});
}