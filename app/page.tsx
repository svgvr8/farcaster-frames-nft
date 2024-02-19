import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
	buttons: [
		// {
		// 	label: 'previous',
		// 	action: 'post',

		// },
		{
			label: '😨 BUT HOW CJ! I DON`T EVEN HAVE ETHERSCAN 😨',
			action: 'post',

		},
	],
	image: {
		// src: `https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMG1yNWZibHVyazlnam1vZWxnYzA1cXZpcHI4aHR6bWdoMXFlOXp0ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/30s4xi40N8v8FREbOC/giphy.gif`,
		src: `${NEXT_PUBLIC_URL}/cj1.png`,
		aspectRatio: '1:1',
	},
	postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
	title: 'Propy Homes in Miami!',
	description: 'Slideshow for real estate on farcaster',
	openGraph: {
		title: 'Sagar Yadav',
		description: 'ETH MIAMI',
		images: [`https://propy.com/browse/wp-content/uploads/2022/01/propy-us-nft-newsletter-001-1.jpg`],
	},
	other: {
		...frameMetadata,
	},
};
export default function Page() {
	return (<>
		<style>
			{`
			@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
	
			body {
				font-family: 'Roboto', sans-serif;
				margin: 0;
				padding: 0;
				background-color: #1a1a1a; /* Darker background for a sleek look */
				color: #f0f0f0; /* Light text for contrast */
			}
	
			.container {
				max-width: 800px;
				margin: 50px auto;
				padding: 20px;
				background-color: #292929; /* Dark container for depth */
				border-radius: 10px;
				box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
				text-align: center;
				transition: transform 0.3s ease; /* Smooth transition for hover effect */
			}
	
			.container:hover {
				transform: translateY(-10px); /* Slight lift effect on hover */
			}
	
			h1 {
				font-size: 3em;
				color: #4DD0E1; /* Bright color for headings */
				margin-bottom: 20px;
			}
	
			p {
				font-size: 1.2em;
				color: #CCCCCC; /* Light grey for readability */
				line-height: 1.6;
			}
	
			.social-links {
				margin-top: 20px;
			}
	
			.social-links a {
				display: inline-block;
				margin-right: 20px;
				color: #f0f0f0;
				text-decoration: none;
				font-size: 1.5em;
				transition: color 0.3s ease; /* Transition for color change */
			}
	
			.social-links a:hover {
				color: #FF4081; /* Vibrant hover color */
				transform: scale(1.1); /* Enlarge icons slightly on hover */
			}
			`}
		</style>
		<div className="container">
			<h1>🌟👋 Hello, I'm Sagar! 🌟</h1>
			<p>🚀🌐 Welcome to my digital universe! 🌐🚀 I'm Sagar, a fervent enthusiast and innovator in the world of <strong>🔒 Web3 security 🔒</strong>. 🛠️💡 My passion is deeply rooted in the vibrant community of <strong>🌴 ETH Miami 🌴</strong>. Dive in, explore, and let's connect as you discover more about my journey and endeavors in the tech world! 🌍👨‍💻</p>

			<div className="social-links">
				<p>🔗🤝 Connect with me on: 🤝🔗</p>
				<ul>
					<li><a href="https://www.warpcast.com/sagaryadav" target="_blank" rel="noopener noreferrer">Warpcast 🌪️🌈</a></li>
					<li><a href="https://www.sagaryadav.xyz" target="_blank" rel="noopener noreferrer">Personal Site 🏠💼</a></li>
					<li><a href="https://www.github.com/svgvr8" target="_blank" rel="noopener noreferrer">GitHub 💻👨‍💻</a></li>
				</ul>
			</div>
		</div>

	</>
	);
}
