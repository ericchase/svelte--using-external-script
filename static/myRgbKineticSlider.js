let images = ['img.png'];
let texts = [['']];

function createNewSlider() {
	if (typeof window !== 'undefined') {
		if ('rgbKineticSlider' in window) {
			// @ts-ignore
			return new window.rgbKineticSlider({
				slideImages: images,
				itemsTitles: texts,
				backgroundDisplacementSprite: 'map-1.jpg',
				cursorDisplacementSprite: 'displace-circle.png',
				cursorScaleIntensity: 0.5,
				cursorMomentum: 0.14,

				swipe: false,
				swipeDistance: window.innerWidth * 0.4,
				swipeScaleIntensity: 2,

				slideTransitionDuration: 0.8,
				transitionScaleIntensity: 30,
				transitionScaleAmplitude: 160
			});
		}
	}
}
