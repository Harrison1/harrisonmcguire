<script>
	import { onMount } from 'svelte'
  import { goto } from '@sapper/app'
	import { displayNav } from '../store/index.js'	
	import Nav from '../components/Nav.svelte'
	import Apps from '../components/Apps.svelte'

	export let segment


	let display_value;

	const unsubscribe = displayNav.subscribe(value => {
		display_value = value;
	});

	onMount(() => {
		let path = localStorage.getItem('path');
		if(path) {
			localStorage.removeItem('path');
			goto(path)
		}
	})

</script>

<style>
	main {
		padding: 6px;
		position: relative;
		box-sizing: border-box;
	}

	main::after {
		content: '';
		position: absolute;
		top: -2px;
		right: -2px;
		bottom: -2px;
		left: -2px;
		z-index: -1;
		background: linear-gradient(45deg, #ff005e, #fbff00);
		animation: neon-bg 4s linear infinite;
		-webkit-animation: neon-bg 4s linear infinite;
	}

	@keyframes neon-bg {
		from {
			filter: hue-rotate(0deg);
		}
		to {
			filter: hue-rotate(360deg);
		}
	}

	@-webkit-keyframes neon-bg {
		from {
			filter: hue-rotate(0deg);
		}
		to {
			filter: hue-rotate(360deg);
		}
	}

	.container {
		/* background: var(--dark-gray); */
		background: #000;
		/* border-radius: 10px; */
		min-height: calc(100vh - 12px);
	}

	.inner-container {
		margin: 0 auto;
	}

</style>

<Nav {segment} />

<main>
	<div class='container'>
		<div class='inner-container'>
			{#if !display_value}
				<slot></slot>
			{:else}
				<Apps {segment} />
			{/if}
		</div>
	</div>
</main>