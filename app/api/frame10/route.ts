import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';
import jsonData from '../../../propyAPI/miami.json';

// Function to fetch item from JSON data by index
function getItemByIndex(index: 10) {
	const item = jsonData[index];
	return {
		tokenId: item.tokenId,
		imageIPFS: item.imageIPFS
	};
}

async function getResponse(req: NextRequest): Promise<NextResponse> {
	// Fetch item by index (e.g., 1 for the second item)
	const { tokenId, imageIPFS } = getItemByIndex(10);

	return new NextResponse(
		getFrameHtmlResponse({
			buttons: [
				{
					label: `NAH, LET'S GO BACK!⏪`,
					action: 'post',
				},
				// {
				// 	label: `🏠NFT: ${tokenId}`,
				// },
				{
					label: 'LETS MINT!🪙',
					action: 'link',
					target: 'https://propykeys.com/',
				},
			],
			image: {
				src: `https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmRzYndoNDFpcW40eHdyNG9yNHhweXp1b251MGF1OXFqczR1ODJpaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TpLkU9CliGNwPMriIV/giphy.gif`,
				aspectRatio: '1:1',
			},
			postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
			// Additional field to display the tokenId
		}),
	);
}

export async function POST(req: NextRequest): Promise<Response> {
	return getResponse(req);
}

export const dynamic = 'force-dynamic';
