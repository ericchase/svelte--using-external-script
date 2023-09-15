<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		createNewSlider();
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
