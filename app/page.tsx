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
			label: ' 🔑 Explore Propy Homes 🏠',
			action: 'post',

		},
	],
	image: {
		src: `https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXZxYXVneWV5ZXNodG12eWxnZDk2eGloNDA3Z3I5eWZnM2RsYjBxcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0EoByNbBU53ikqSA/giphy.gif`,
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
	return (
		<>
			<style>
				{`
			  body {
				font-family: Arial, sans-serif;
				margin: 0;
				padding: 0;
				background-color: #f0f0f0;
			  }
	
			  .container {
				max-width: 800px;
				margin: 50px auto;
				padding: 20px;
				background-color: #fff;
				border-radius: 10px;
				box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
				text-align: center;
			  }
	
			  h1 {
				font-size: 2.5em;
				color: #333;
				margin-bottom: 20px;
			  }
	
			  p {
				font-size: 1.2em;
				color: #666;
				line-height: 1.6;
			  }
	
			  .social-links {
				margin-top: 20px;
			  }
	
			  .social-links a {
				display: inline-block;
				margin-right: 20px;
				color: #333;
				text-decoration: none;
				font-size: 1.5em;
			  }
	
			  .social-links a:hover {
				color: #007bff; /* Change color on hover to a shade of blue */
			  }
			`}
			</style>
			<div className="container">
				<h1>Hello, I'm Sagar!</h1>
				<p>Welcome to my website! I'm passionate about web3 security and I love ETH Miami. Feel free to explore and get to know more about me.</p>

				<div className="social-links">
					<a href="https://www.linkedin.com/in/sagr" target="_blank" rel="noopener noreferrer">LinkedIn</a>
					<a href="https://www.SagarYadav.xyz" target="_blank" rel="noopener noreferrer">Personal Site</a>
					<a href="mailto:sagarxyadav@gmail.com">Email</a>
				</div>
			</div>
		</>
	);
}
