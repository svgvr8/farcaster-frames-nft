import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';
import jsonData from '../../../propyAPI/miami.json';

// Function to fetch item from JSON data by index
function getItemByIndex(index: 0) {
	const item = jsonData[index];
	return {
		tokenId: item.tokenId,
		imageIPFS: item.imageIPFS
	};
}

async function getResponse(req: NextRequest): Promise<NextResponse> {
	// Fetch item by index (e.g., 1 for the second item)
	const { tokenId, imageIPFS } = getItemByIndex(0);

	return new NextResponse(
		getFrameHtmlResponse({
			buttons: [
				{
					label: `OK CJ! I believe you. Let's go! 🏃🏃`,
					action: 'post',
				},
				// {
				// 	label: `🏠Propy NFT ID: ${tokenId}`,
				// },
			],
			image: {
				src: `https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3pvN2x5M3diM3I1M3RoY3I1cXp2em83ZmpyZ2o2ejI1dm4weXZtMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kfOYMmrE0ChhMLSx7S/giphy.gif`,
				aspectRatio: '1:1',
			},
			postUrl: `${NEXT_PUBLIC_URL}/api/frame1`,
			// Additional field to display the tokenId
		}),
	);
}

export async function POST(req: NextRequest): Promise<Response> {
	return getResponse(req);
}

export const dynamic = 'force-dynamic';
