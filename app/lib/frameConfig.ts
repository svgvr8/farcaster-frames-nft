import { NEXT_PUBLIC_URL } from '../config';

type ButtonConfig = {
	label: string;
	action: string;
	target?: string;
};

type FrameConfig = {
	buttons: ButtonConfig[];
	image: { src: string; aspectRatio: string };
	postUrl: string;
};

type Configs = {
	[key: string]: FrameConfig;
};

const configs: Configs = {
	'frame1': {
		buttons: [{ label: 'Next', action: 'post' }],
		image: {
			src: 'https://cdn.decoist.com/wp-content/uploads/2017/06/Stunning-garden-and-pool-area-bring-luxury-to-the-lavish-Indian-Creek-Home.jpg', // Replace with actual URL
			aspectRatio: '1:1',
		},
		postUrl: `${NEXT_PUBLIC_URL}/api/frame2`
	},
	'frame2': {
		buttons: [{ label: 'Next', action: 'post' }],
		image: {
			src: 'https://cdn.decoist.com/wp-content/uploads/2017/06/Gorgeous-sitting-space-next-to-the-man-made-lagoon.jpg', // Replace with actual URL
			aspectRatio: '1:1',
		},
		postUrl: `${NEXT_PUBLIC_URL}/api/frame3`
	},
	'frame3': {
		buttons: [{ label: 'Next', action: 'post' }],
		image: {
			src: 'https://cdn.decoist.com/wp-content/uploads/2017/06/Beautiful-and-natural-landscape-around-the-man-made-lagoon.jpg', // Replace with actual URL
			aspectRatio: '1:1',
		},
		postUrl: `${NEXT_PUBLIC_URL}/api/frame4`
	}, 'frame4': {
		buttons: [{ label: 'Next', action: 'post' }],
		image: {
			src: 'https://cdn.decoist.com/wp-content/uploads/2017/06/Man-made-lagoon-with-fishes-and-a-stunning-walkway-above.jpg', // Replace with actual URL
			aspectRatio: '1:1',
		}, postUrl: `${NEXT_PUBLIC_URL}/api/frame5`
	}, 'frame5': {
		buttons: [{ label: 'Next', action: 'post' }],
		image: {
			src: 'https://cdn.decoist.com/wp-content/uploads/2017/06/Heated-salt-water-pool-overlooking-the-lovely-Indian-Creek-and-distant-skyscrapers.jpg', // Replace with actual URL
			aspectRatio: '1:1',
		}, postUrl: `${NEXT_PUBLIC_URL}/api/frame6`
	}, 'frame6': {
		buttons: [{ label: 'Next', action: 'post' }],
		image: {
			src: 'https://cdn.decoist.com/wp-content/uploads/2017/06/Luxurious-Miami-Beach-House-with-indoor-pool-and-man-made-lagoon.jpg', // Replace with actual URL
			aspectRatio: '1:1',
		}, postUrl: `${NEXT_PUBLIC_URL}/api/default`
	},
	'default': {
		buttons: [{ label: 'Default Button', action: 'post' }, {
			label: 'Mint Address on Propy',
			action: 'link',
			target: 'https://propykeys.com'
		},],
		image: {
			src: 'https://cdn.decoist.com/wp-content/uploads/2017/06/Sitting-area-next-to-the-man-made-lagoon-with-live-edge-decor-anda-beautiful-fireplace.jpg', // Replace with actual URL
			aspectRatio: '1:1',
		}, postUrl: `${NEXT_PUBLIC_URL}/api/frame1`
	}
};

export const getFrameConfig = (frameType: string): FrameConfig => {
	return configs[frameType] || configs['default'];
}