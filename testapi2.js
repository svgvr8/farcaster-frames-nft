const fetch = require('node-fetch');

fetch('https://farcaster-frame-zeta.vercel.app/api/frame/frame2', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
		// other headers if needed
	}
	// include body if required
})
	.then(response => {
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
		return response.json();
	})
	.then(data => console.log(data))
	.catch(error => console.error('Error:', error));
