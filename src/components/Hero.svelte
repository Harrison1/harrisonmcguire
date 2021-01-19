<script>
	import { getContext } from 'svelte'
	import { fade, fly } from 'svelte/transition';
	import AppLinks from './AppLinks.svelte'
	import HomeApps from './HomeApps.svelte'

	import { displayNav } from '../store/index.js'

	let display_value;

	const unsubscribe = displayNav.subscribe(value => {
		display_value = value;
	});

	// const toggleDisplayApps = () => displayApps = !displayApps;

	const displayApps =  false;

	function w() {
		displayNav.update(n => !n);
	}

</script>

<style>
	article {
    display: grid;
    align-items: center;
		justify-content: center;
    height: calc(100vh - 12px);
		overflow: auto;
    /* margin: 0 auto var(--spacer-m) auto; */

    /* background-image: url(http://getwallpapers.com/wallpaper/full/f/3/5/331175.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background: black; */
    /* background: rgb(136,14,228);
    background: linear-gradient(166deg, rgba(136,14,228,1) 0%, rgba(240,240,240,1) 50%, rgba(14,184,212,1) 100%);
    background: linear-gradient(253deg, #639, #1797d2, #01bad4, #000);
    background-size: 300% 300%;
    animation: bg-flow 15s ease infinite; */
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes fade-in {
    0% {
      opacity: 0;
		}
    100% {
      opacity: 1;
    }
  }

  p {
    margin: 0;
		animation: fade-in 3s ease-in-out;
		-webkit-animation: fade-in 3s ease-in-out;
  }

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0;
	}

	.title {
		/* display: grid;
		align-self: end; */
		text-align: center;
		/* margin: 0; */
    /* background: #000; */
		/* z-index: 2; */
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}

	@media only screen and (min-width: 767px) {
		/* article {
			margin: 0;
		} */
	}

	/* button {
		border: 1px solid white;
		color: white;
		position: fixed;
		bottom: 20px;
		right: 20px;
		background: #000;
    border: 4px solid #fff;
    border-radius: 50%;
    margin-left: 10px;
    width: 44px;
    height: 44px;
    transition: background 0.75s ease-in-out, border-color 0.75s ease-in-out;
    display: grid;
		z-index: 4;
	} */
</style>

<svelte:head>
	<title>Harrison McGuire</title>
</svelte:head>

<article>
	{#if !displayApps}
		<header class='title'>
			<h1>Harrison McGuire</h1>
			<p>web | game developer</p>
		</header>
	{/if}

	<!-- {#if displayApps}
		<HomeApps />
	{/if} -->

	<!-- <button on:click={ toggleDisplayApps }></button> -->

	<!-- {#if !displayApps}
		<button on:click={ toggleDisplayApps }></button>
	{/if}

	{#if displayApps}
		<AppLinks />
	{/if} -->
	<!-- <img class='self' src='http://www.technocrazed.com/wp-content/uploads/2015/11/HD-Phone-Wallpapers-1080p-126.jpg' alt='Harrison McGuire'>
	<img class='self' src='https://wallpapercave.com/wp/wp2875673.jpg' alt='Harrison McGuire'>
	<img class='self' src='http://getwallpapers.com/wallpaper/full/f/3/5/331175.jpg' alt='Harrison McGuire'>
	<img class='self' src='https://sguru.org/wp-content/uploads/2017/06/Beach-iPhone-Wallpaper-HD.jpg' alt='Harrison McGuire'>
	<img class='self' src='https://wallpaperaccess.com/full/24852.jpg' alt='Harrison McGuire'> -->
</article>
