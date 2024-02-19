import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';
import jsonData from '../../../propyAPI/miami.json';

// Function to fetch item from JSON data by index
function getItemByIndex(index: 8) {
	const item = jsonData[index];
	return {
		tokenId: item.tokenId,
		imageIPFS: item.imageIPFS
	};
}

async function getResponse(req: NextRequest): Promise<NextResponse> {
	// Fetch item by index (e.g., 1 for the second item)
	const { tokenId, imageIPFS } = getItemByIndex(8);

	return new NextResponse(
		getFrameHtmlResponse({
			buttons: [
				{
					label: `UNDERSTOOD`,
					action: 'post',
				},
				// {
				// 	label: `🏠Propy NFT ID: ${tokenId}`,
				// },
			],
			image: {
				src: `https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExamhnMGZjc3BneDBwMHJ3ZXNwN28yNGhhbDhuZjNleHduN3g2aDJ5ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/H6WBF0zAxBAvEGR2L5/giphy.gif`,
				aspectRatio: '1:1',
			},
			postUrl: `${NEXT_PUBLIC_URL}/api/frame9`,
			// Additional field to display the tokenId
		}),
	);
}

export async function POST(req: NextRequest): Promise<Response> {
	return getResponse(req);
}

export const dynamic = 'force-dynamic';
