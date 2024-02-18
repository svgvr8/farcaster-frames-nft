import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';
import jsonData from '../miami.json';

// Function to fetch item from JSON data by index
function getItemByIndex(index: 2) {
	const item = jsonData[index];
	return {
		tokenId: item.tokenId,
		imageIPFS: item.imageIPFS
	};
}

async function getResponse(req: NextRequest): Promise<NextResponse> {
	// Fetch item by index (e.g., 1 for the second item)
	const { tokenId, imageIPFS } = getItemByIndex(2);

	return new NextResponse(
		getFrameHtmlResponse({
			buttons: [
				{
					label: `Next Property 👉`,
					action: 'post',
				},
				{
					label: `🏠 Current property ID is ${tokenId}`,
				},
			],
			image: {
				src: imageIPFS,
				aspectRatio: '1:1',
			},
			postUrl: `${NEXT_PUBLIC_URL}/api/frame3`,
			// Additional field to display the tokenId
		}),
	);
}

export async function POST(req: NextRequest): Promise<Response> {
	return getResponse(req);
}

export const dynamic = 'force-dynamic';
