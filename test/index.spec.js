import should from 'should';
import jsdom from 'jsdom-global/register';
import Skip from '../dist/storm-skip';

const html = `<div id="test"></div>
             <a href="#" id="test-2">Test</a>`;

document.body.innerHTML = html;

/*
	To do:
	subsequent hashchange events are consistently dispatched in time
*/
describe('Skip', function() {
	
	it('should attach a hashchange eventListener', () => {
    
		window.location.hash = '#test';
		console.log('hash: ', window.location.hash);

	});

	it('should ignore any hashes that do not match element ids', () => {
		
		window.location.hash = '#not-matched';
		console.log('hash: ', window.location.hash);

	});

	it('should find any ids matching the new hash and focus on them', () => {

		window.location.hash = '#test-2';
		console.log('hash: ', window.location.hash);

	});
  

});