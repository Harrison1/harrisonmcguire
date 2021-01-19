<script>
  import { onMount } from 'svelte'
  import Itchio from './icons/Itchio.svelte'
  import Twitch from './icons/Twitch.svelte'
  import YouTube from './icons/YouTube.svelte'
  import GitHub from './icons/GitHub.svelte'
  import SectionTitle from './SectionTitle.svelte'

  let display = false

  onMount(() => {
    const myapps = document.querySelector('.app-container');

    function handleIntersection(entries) {
      entries.map(entry => {
        if (entry.isIntersecting) {
          display = true
          observer.unobserve(entry.target);
        }
      });
    }

    const observer = new IntersectionObserver(handleIntersection)

    observer.observe(myapps);
  })

</script>

<style>
  a {
    background: #000;
    display: block;
    position: relative;
    padding: 20px;
    width: 100%;
    height: 200px;
    transition: filter 0.5s ease;
    z-index: 2;
  }

  a:hover {
    filter: drop-shadow(12px 12px 14px green) invert(100%);
  }

  .app-container {
    display: grid;
    align-items: center;
    justify-content: space-between;
    justify-items: center;
    grid-template-columns: 1fr 1fr;
    position: relative;
    margin-bottom: var(--spacer-m);
  }

  .itchio {
    background: #fa5c5c; 
  }

  .twitch {
    background: #9146ff; 
  }

  .youtube {
    background: #FF0000; 
  }

  .github {
    background: #040d21;
  }

	@keyframes neon-block {
		from {
			filter: hue-rotate(0deg);
		}
		to {
			filter: hue-rotate(360deg);
		}
  }
  
  @media only screen and (min-width: 992px) {
    .app-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: var(--spacer);
    }
  }
</style>

<article>
  <SectionTitle text='Catch Me Over Here' />
  <div class='app-container'>
    {#if display}
      <a href='https://harrison1.itch.io/' class='itchio'><Itchio /></a>
      <a href='https://www.youtube.com/c/HarrisonMcGuire' class='youtube'><YouTube /></a>
      <a href='https://github.com/Harrison1' class='github'><GitHub /></a>
      <a href='https://www.twitch.tv/harrisonmcguire' class='twitch'><Twitch /></a>
    {/if}
  </div>
</article>
