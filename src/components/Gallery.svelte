<script>
  import { onMount } from 'svelte'
  import SectionTitle from './SectionTitle.svelte'

  onMount(() => {
    const myImgs = document.querySelectorAll('.lazy');

    const handleIntersection = entries => {
      entries.map(entry => {
        if (entry.isIntersecting) {
          entry.target.src = entry.target.dataset.src
          observer.unobserve(entry.target);
        }
      });
    }

    const observer = new IntersectionObserver(handleIntersection)

    myImgs.forEach(image => observer.observe(image))
  })
</script>

<style>
  img {
    display: block;
    width: 100%;
  }

  .image-gallery {
    display: grid;
    grid-template-columns: 1fr;
  }

  @media only screen and (min-width: 767px) {
    .image-gallery {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
	}
</style>

<article>
  <SectionTitle text='Gallery' />
  <div class='image-gallery'>
    <a href='/harrison_mcguire_1.jpg'><img class='lazy' src="/harrison_mcguire_placeholder_a.jpg" data-src="/harrison_mcguire_1.jpg" alt="Harrison McGuire" /></a>
    <a href='/harrison_mcguire_4.jpg'><img class='lazy' src="/harrison_mcguire_placeholder_a.jpg" data-src="/harrison_mcguire_4.jpg" alt="Harrison McGuire" /></a>
    <a href='/harrison_mcguire_22.jpg'><img class='lazy' src="/harrison_mcguire_placeholder_a.jpg" data-src="/harrison_mcguire_22.jpg" alt="Harrison McGuire" /></a>
    <a href='/harrison_mcguire_31.jpg'><img class='lazy' src="/harrison_mcguire_placeholder_a.jpg" data-src="/harrison_mcguire_31.jpg" alt="Harrison McGuire" /></a>

    <a href='/harrison_mcguire_6.jpg'><img class='lazy' src="/harrison_mcguire_placeholder_b.jpg" data-src="/harrison_mcguire_6.jpg" alt="Harrison McGuire" /></a>
    <a href='/harrison_mcguire_8.jpg'><img class='lazy' src="/harrison_mcguire_placeholder_b.jpg" data-src="/harrison_mcguire_8.jpg" alt="Harrison McGuire" /></a>
    <a href='/harrison_mcguire_2.jpg'><img class='lazy' src="/harrison_mcguire_placeholder_b.jpg" data-src="/harrison_mcguire_2.jpg" alt="Harrison McGuire" /></a>
    <a href='/harrison_mcguire_10.jpg'><img class='lazy' src="/harrison_mcguire_placeholder_b.jpg" data-src="/harrison_mcguire_10.jpg" alt="Harrison McGuire" /></a>

    <a href='/harrison_mcguire_11.jpg'><img class='lazy' src="/harrison_mcguire_placeholder_a.jpg" data-src="/harrison_mcguire_11.jpg" alt="Harrison McGuire" /></a>
    <a href='/harrison_mcguire_23.jpg'><img class='lazy' src="/harrison_mcguire_placeholder_a.jpg" data-src="/harrison_mcguire_23.jpg" alt="Harrison McGuire" /></a>
    <a href='/harrison_mcguire_24.jpg'><img class='lazy' src="/harrison_mcguire_placeholder_a.jpg" data-src="/harrison_mcguire_24.jpg" alt="Harrison McGuire" /></a>
    <a href='/harrison_mcguire_18.jpg'><img class='lazy' src="/harrison_mcguire_placeholder_a.jpg" data-src="/harrison_mcguire_18.jpg" alt="Harrison McGuire" /></a>

    <a href='/harrison_mcguire_13.jpg'><img class='lazy' src="/harrison_mcguire_placeholder_b.jpg" data-src="/harrison_mcguire_13.jpg" alt="Harrison McGuire" /></a>
    <a href='/harrison_mcguire_14.jpg'><img class='lazy' src="/harrison_mcguire_placeholder_b.jpg" data-src="/harrison_mcguire_14.jpg" alt="Harrison McGuire" /></a>
    <a href='/harrison_mcguire_15.jpg'><img class='lazy' src="/harrison_mcguire_placeholder_b.jpg" data-src="/harrison_mcguire_15.jpg" alt="Harrison McGuire" /></a>
    <a href='/harrison_mcguire_16.jpg'><img class='lazy' src="/harrison_mcguire_placeholder_b.jpg" data-src="/harrison_mcguire_16.jpg" alt="Harrison McGuire" /></a>

    <a href='/harrison_mcguire_26.jpg'><img class='lazy' src="/harrison_mcguire_placeholder_b.jpg" data-src="/harrison_mcguire_26.jpg" alt="Harrison McGuire" /></a>
    <a href='/harrison_mcguire_29.jpg'><img class='lazy' src="/harrison_mcguire_placeholder_b.jpg" data-src="/harrison_mcguire_29.jpg" alt="Harrison McGuire" /></a>
    <a href='/harrison_mcguire_25.jpg'><img class='lazy' src="/harrison_mcguire_placeholder_b.jpg" data-src="/harrison_mcguire_25.jpg" alt="Harrison McGuire" /></a>
    <a href='/harrison_mcguire_27.jpg'><img class='lazy' src="/harrison_mcguire_placeholder_b.jpg" data-src="/harrison_mcguire_27.jpg" alt="Harrison McGuire" /></a>

    <a href='/harrison_mcguire_7.jpg'><img class='lazy' src="/harrison_mcguire_placeholder_b.jpg" data-src="/harrison_mcguire_7.jpg" alt="Harrison McGuire" /></a>
    <a href='/harrison_mcguire_12.jpg'><img class='lazy' src="/harrison_mcguire_placeholder_b.jpg" data-src="/harrison_mcguire_12.jpg" alt="Harrison McGuire" /></a>
    <a href='/harrison_mcguire_30.jpg'><img class='lazy' src="/harrison_mcguire_placeholder_b.jpg" data-src="/harrison_mcguire_30.jpg" alt="Harrison McGuire" /></a>
    <a href='/harrison_mcguire_9.jpg'><img class='lazy' src="/harrison_mcguire_placeholder_b.jpg" data-src="/harrison_mcguire_9.jpg" alt="Harrison McGuire" /></a>
    
  </div>
</article>
