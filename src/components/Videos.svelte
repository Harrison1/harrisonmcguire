<script>
  import { onMount } from 'svelte'
  import SectionTitle from './SectionTitle.svelte'

  onMount(() => {
    const myVids = document.querySelectorAll('.lazy');

    const handleIntersection = entries => {
      entries.map(entry => {
        if (entry.isIntersecting) {
          entry.target.src = entry.target.dataset.src
          observer.unobserve(entry.target);
        }
      });
    }

    const observer = new IntersectionObserver(handleIntersection)

    myVids.forEach(video => observer.observe(video))
  })
</script>

<style>
  article {
    /* margin: auto auto var(--spacer-m) auto; */
    max-width: 1440px;;
  }

  .video-wrapper {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;
    margin-bottom: 20px;
  }

  .video-wrapper:last-child {
    margin-bottom: 0;
  }

  .video-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0%;
    width: 100%;
    height: 100%;
  }

  .flex {
    display: flex;
    align-items: center;
  }

  .yt-image {
    display: block;
    padding-top: 20px;
    width: 120px;
  }

  .yt-image:hover {
    opacity: 0.7;
  }

  @media only screen and (min-width: 992px) {
    .container {
      margin-top: 20px;
      width: 80%;
      padding-left: 20px;
    }

    .yt-image {
      width: 180px;
    }
  }
</style>

<article>
  <div class='flex'>
    <SectionTitle text='Videos' />
    <a href="https://www.youtube.com/c/HarrisonMcGuire"><img class='yt-image' src='/yt_logo_rgb_dark.png' alt='YouTube Brand Logo' /></a>
  </div>
  <div class='container'>
    <div class='video-wrapper'>
      <iframe class='lazy' width="560" height="315" data-src="https://www.youtube.com/embed/Nt4W1B8cKy8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <div class='video-wrapper'>
      <iframe class='lazy' width="560" height="315" data-src="https://www.youtube.com/embed/sXNDeImnipU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <div class='video-wrapper'>
      <iframe class='lazy' width="560" height="315" data-src="https://www.youtube.com/embed/KsvUYzrTwBw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <div class='video-wrapper'>
      <iframe class='lazy' width="560" height="315" data-src="https://www.youtube.com/embed/MZd5Ch6xXEo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>
</article>
