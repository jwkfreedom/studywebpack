import React from 'react';
import Hello from './component.jsx';

main();

function main() {
    React.render(
    	<div>
    		<h1>mobile</h1>
    		<Hello />
    	</div>, 

    	document.getElementById('app'));
}