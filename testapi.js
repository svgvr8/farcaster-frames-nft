function fetchTokenData(tokenId) {
	fetch(`http://localhost:3000/api/token?tokenId=${tokenId}`)
		.then(response => response.json())
		.then(data => {
			if (data.error) {
				console.error('Error:', data.error);
			} else {
				console.log(`Location for TokenId ${tokenId}:`, data.location);
				const imageUrl = `../pages/api/images/${tokenId}.png`; // Assuming images are stored in the /images folder
				console.log(`Image URL for TokenId ${tokenId}:`, imageUrl);
				// Now you can use this imageUrl to display the image in your application
			}
		})
		.catch(error => console.error('Error:', error));
}

// Example usage:
fetchTokenData('1160');  // Replace '1160' with any tokenId
