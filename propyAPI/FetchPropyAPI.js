// Use dynamic import to load the fetch function
import('./fetchwrapper.mjs').then(({ default: fetch }) => {
	fetch('https://dappapi.propy.com/nft/base/propykeys?city=Miami&page=1&perPage=20')
		.then(response => response.json())
		.then(data => {
			const fs = require('fs');
			fs.writeFileSync('miamiData.json', JSON.stringify(data, null, 2));
		})
		.catch(error => {
			console.error('Error fetching the JSON file: ', error);
		});
});
