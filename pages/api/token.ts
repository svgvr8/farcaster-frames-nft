import { NextApiRequest, NextApiResponse } from 'next';
import data from './miami.json'; // Adjust the path to where your JSON data is located
import { TokenData, ErrorResponse } from '../../types'; // Import the interfaces

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<TokenData | ErrorResponse>
) {
	const { tokenId } = req.query;

	if (!tokenId || typeof tokenId !== 'string') {
		return res.status(400).json({ error: 'TokenId is required and must be a string' });
	}

	const token = data.find((item: TokenData) => item.tokenId === tokenId);

	if (!token) {
		return res.status(404).json({ error: 'Token not found' });
	}

	res.status(200).json(token); // Return the entire TokenData object
}
