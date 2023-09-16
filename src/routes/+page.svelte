<script lang="ts">
	import { onMount } from 'svelte';
	import '$lib/rgbKineticSlider.css';
	import { base } from '$app/paths';

	onMount(() => {
		function setupRGBKineticSlider() {
			window.images = [`${base}/img.png`];
			window.texts = [['']];
			if (typeof window !== 'undefined') {
				if ('rgbKineticSlider' in window) {
					// @ts-ignore
					return new window.rgbKineticSlider({
						slideImages: window.images,
						itemsTitles: window.texts,
						backgroundDisplacementSprite: `${base}/map-1.jpg`,
						cursorDisplacementSprite: `${base}/displace-circle.png`,
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
		setupRGBKineticSlider();
	});

	let page = 'home';

	function toAbout() {
		page = 'about';
	}
	function toHome() {
		page = 'home';
	}
</script>

<div id="home" class="row" class:hidden={page !== 'home'}>
	<div on:click={toAbout}>Go to <span>About</span> page.</div>
	<div id="rgbKineticSlider" class="rgbKineticSlider" />
</div>
<div id="about" class="row" class:hidden={page !== 'about'}>
	<div>This is the about page.</div>
	<div on:click={toHome}>Go back <span>Home</span>.</div>
</div>

<style>
	.row {
		display: flex;
		flex-direction: column;
		gap: 1em;
	}

	span {
		color: blue;
		cursor: pointer;
	}
	span:hover {
		text-decoration: underline;
	}

	.hidden {
		display: none;
	}
</style>
