<script>
	import Home from './icons/Home.svelte'
	import User from './icons/User.svelte'
	import Mail from './icons/Mail.svelte'
	import Image from './icons/Image.svelte'
	import Terminal from './icons/Terminal.svelte'
  import YouTube from './icons/YouTube.svelte'
  import Itchio from './icons/Itchio.svelte'
	import { displayNav } from '../store/index.js'

	export let segment


	let display = false
	
	const toggleDisplay = () => display = !display

	function w() {
		displayNav.update(n => !n);
	}

</script>

<style>
	nav {
		overflow: auto;
		z-index: 3;
	}

	.active {
		position: fixed;
		width: calc(100vw - 12px);
		height: calc(100vh - 12px);
		top: 6px;
		left: 6px;
		bottom: 6px;
		right: 6px;
		background: #000;
		border-radius: 10px;
		display: grid;
		align-items: center;
		align-content: center;
		justify-content: center;
		justify-items: center;
	}

	
	.menu {
		background: #000;
		border: 4px solid #fff;
		border-radius: 50%;
		margin-left: 10px;
		width: 44px;
		height: 44px;
		transition: background 0.75s ease-in-out, border-color 0.75s ease-in-out;
		display: grid;
		align-self: flex-end;
	}

	.menu:hover {
		border-color: var(--blue);
	}


	@media only screen and (min-width: 767px) {
		ul {
			grid-template-columns: repeat(6, 1fr);
			grid-row-gap: 0;
		}

		.menu {
			align-self: center;
		}
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



	button {
		position: fixed;
		bottom: 20px;
		right: 20px;
		z-index: 4;
	}

	[aria-current] {
		border: 2px solid var(--blue);
	}

	ul {
		display: grid;
		align-items: center;
		align-content: center;
		justify-content: center;
    grid-template-columns: repeat(2, 100px);
    margin: 0;
		padding: 20px;
    grid-column-gap: 50px;
    grid-row-gap: 50px;
		overflow: auto;
		z-index: 3;
  }

  ul::after {
		content: '';
		display: block;
		clear: both;
	}

  li {
		display: block;
		float: left;
		animation: fade-in 1s ease-in-out;
		-webkit-animation: fade-in 1s ease-in-out;
	}

  a {
		background: #000;
		border: 2px solid #fff;
		border-radius: 20px;
		color: white;
		display: flex;
    height: 100px;
		padding: 12px;
    text-decoration: none;
	}

	@media only screen and (min-width: 767px) {
    ul {
      grid-template-columns: repeat(4, 100px);
			align-content: center;
			justify-content: center;
      grid-column-gap: 100px;
    }
  }


</style>

<!-- {#if segment !== undefined} -->
	<nav class:active={ display }>
		{#if display}
			<ul>
				<li><a aria-current="{segment === undefined ? 'page' : undefined}" href="."><Home /></a></li>
				<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about"><User /></a></li>
				<li><a aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog"><Terminal /></a></li>
				<li><a aria-current="{segment === 'gallery' ? 'page' : undefined}" href="gallery"><Image /></a></li>
				<li><a aria-current="{segment === 'videos' ? 'page' : undefined}" href="videos"><YouTube /></a></li>
				<li><a aria-current="{segment === 'contact' ? 'page' : undefined}" href="contact"><Mail /></a></li>
				<li><a aria-current="{segment === 'gallery' ? 'page' : undefined}" href="gallery"><Itchio /></a></li>
				<li><a aria-current="{segment === 'videos' ? 'page' : undefined}" href="videos"><YouTube /></a></li>
				<li><a aria-current="{segment === 'contact' ? 'page' : undefined}" href="contact"><Mail /></a></li>
			</ul>
		{/if}
		<button class='menu' on:click={ w } type='button' name='navigation' aria-label='navigation'></button>
	</nav>
<!-- {/if} -->
