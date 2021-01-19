<script>
  import { fade } from 'svelte/transition'
  import { displayNav } from '../store/index.js'

  export let segment

  import Home from './icons/Home.svelte'
	import User from './icons/User.svelte'
	import Mail from './icons/Mail.svelte'
	import Image from './icons/Image.svelte'
  import YouTube from './icons/YouTube.svelte'
  import YouTubeF from './icons/YouTubeF.svelte'
  import Terminal from './icons/Terminal.svelte'
  import Itchio from './icons/Itchio.svelte'
  import Twitch from './icons/Twitch.svelte'
  import GitHub from './icons/GitHub.svelte'


  function toggle() {
		displayNav.update(v => !v);
	}
</script>

<style>
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

  ul {
    display: grid;
    grid-template-columns: repeat(2, 100px);
    align-items: center;
    justify-content: space-around;
    margin: 0;
    grid-column-gap: 50px;
    /* margin: 0 auto; */
    grid-row-gap: 50px;
    height: calc(100vh - 12px);
    /* overflow: auto; */
    padding: 20px;
    overflow: auto;
    animation: fade-in 1s ease-in-out;
		-webkit-animation: fade-in 1s ease-in-out;
  }

  ul::after {
		content: '';
		display: block;
		clear: both;
	}

  li {
		display: block;
		float: left;
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

  li:last-child a, li:nth-last-child(2) {
    margin-bottom: 20px;
  }

  [aria-current] {
		border: 2px solid var(--blue);
	}

  @media only screen and (min-width: 767px) {
    ul {
      grid-template-columns: repeat(4, 100px);
      grid-row-gap: 50px;
      grid-column-gap: 100px;
      align-items: center;
      justify-content: center;
      align-content: center;
    }
  }

  @media only screen and (min-width: 767px) and (orientation: landscape) and (max-width: 991px) {
    ul {
      align-content: flex-start;
    }
  }





</style>

<ul>
  <li><a aria-current="{segment === undefined ? 'page' : undefined}" href="." on:click={ toggle }><Home /></a></li>
  <li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about" on:click={ toggle }><User /></a></li>
  <li><a aria-current="{segment === 'videos' ? 'page' : undefined}" href="videos" on:click={ toggle }><YouTubeF /></a></li>
  <li><a aria-current="{segment === 'gallery' ? 'page' : undefined}" href="gallery" on:click={ toggle }><Image /></a></li>
  <li><a aria-current="{segment === 'tech' ? 'page' : undefined}" href="tech" on:click={ toggle }><Terminal /></a></li>
  <li><a aria-current="{segment === 'contact' ? 'page' : undefined}" href="contact" on:click={ toggle }><Mail /></a></li>
  <li><a href="https://www.youtube.com/c/HarrisonMcGuire"><YouTube /></a></li>
  <li><a href="https://harrison1.itch.io/"><Itchio /></a></li>
  <li><a href="https://www.twitch.tv/harrisonmcguire"><Twitch /></a></li>
  <li><a href="https://github.com/Harrison1"><GitHub /></a></li>
  <!-- <li><a href="blog"><Terminal /></a></li> -->
</ul>
