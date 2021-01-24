<script>
	import { onMount } from 'svelte'
  import { goto } from '@sapper/app'
	import Hero from '../components/Hero.svelte'

	onMount(() => {
		let path = localStorage.getItem('path');
		if(path) {
			localStorage.removeItem('path');
			goto(path)
		}
	})
</script>

<svelte:head>
	<title>Harrison McGuire</title>
	<meta charset="UTF-8">
  <meta name="description" content="Harrison McGuire. This my personal site. Welcome to my site.">
	<meta name="robots" content="noindex nofollow" />
	<html lang="en" />
</svelte:head>

<Hero />
