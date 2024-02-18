import { NextRequest, NextResponse } from 'next/server';
import { getFrameHtmlResponse } from '@coinbase/onchainkit';
import { getFrameConfig } from '../../lib/frameConfig'; // Ensure this path is correct
import { NEXT_PUBLIC_URL } from '../../config'; // Ensure this is correctly imported and configured


type FrameImageMetadata = {
	src: string;
	aspectRatio?: '1.91:1' | '1:1';
};

type FrameConfig = {
	buttons: [FrameButtonMetadata, ...FrameButtonMetadata[]];
	image: string | FrameImageMetadata;
	postUrl: string;
};
type FrameButtonMetadata = {
	label: string;
	action: 'link' | 'mint';
	target: string;
};

export async function POST(req: NextRequest): Promise<Response> {
	// Extract the frameType and ensure it's not undefined
	const frameType = req.nextUrl.pathname.split('/').pop() || 'default';

	// Obtain frame configuration
	const frameConfig = getFrameConfig(frameType);

	// Ensure the buttons and image are correctly formatted
	const buttons = frameConfig.buttons as [FrameButtonMetadata, ...FrameButtonMetadata[]]; // Cast to the correct type
	const image = {
		src: frameConfig.image.src,
		aspectRatio: frameConfig.image.aspectRatio as "1.91:1" | "1:1" // Ensure aspectRatio is one of the allowed values or undefined
	};

	return new NextResponse(
		getFrameHtmlResponse({
			buttons,
			image,
			postUrl: `${NEXT_PUBLIC_URL}/api/${frameType}`,
		})
	);
}
