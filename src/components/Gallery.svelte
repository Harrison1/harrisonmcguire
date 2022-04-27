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

    <a href='/harrison_mcguire_36.jpg'><img class='lazy' src="/harrison_mcguire_placeholder_b.jpg" data-src="/harrison_mcguire_36.jpg" alt="Harrison McGuire" /></a>
    <a href='/harrison_mcguire_37.jpg'><img class='lazy' src="/harrison_mcguire_placeholder_b.jpg" data-src="/harrison_mcguire_37.jpg" alt="Harrison McGuire" /></a>
    <a href='/harrison_mcguire_12.jpg'><img class='lazy' src="/harrison_mcguire_placeholder_b.jpg" data-src="/harrison_mcguire_12.jpg" alt="Harrison McGuire" /></a>
    <a href='/harrison_mcguire_7.jpg'><img class='lazy' src="/harrison_mcguire_placeholder_b.jpg" data-src="/harrison_mcguire_7.jpg" alt="Harrison McGuire" /></a>

    <a href='/harrison_mcguire_11.jpg'><img class='lazy' src="/harrison_mcguire_placeholder_a.jpg" data-src="/harrison_mcguire_11.jpg" alt="Harrison McGuire" /></a>
    <a href='/harrison_mcguire_35.jpg'><img class='lazy' src="/harrison_mcguire_placeholder_a.jpg" data-src="/harrison_mcguire_35.jpg" alt="Harrison McGuire" /></a>
    <a href='/harrison_mcguire_33.jpg'><img class='lazy' src="/harrison_mcguire_placeholder_a.jpg" data-src="/harrison_mcguire_33.jpg" alt="Harrison McGuire" /></a>
    <a href='/harrison_mcguire_18.jpg'><img class='lazy' src="/harrison_mcguire_placeholder_a.jpg" data-src="/harrison_mcguire_18.jpg" alt="Harrison McGuire" /></a>

    <a href='/harrison_mcguire_26.jpg'><img class='lazy' src="/harrison_mcguire_placeholder_b.jpg" data-src="/harrison_mcguire_26.jpg" alt="Harrison McGuire" /></a>
    <a href='/harrison_mcguire_25.jpg'><img class='lazy' src="/harrison_mcguire_placeholder_b.jpg" data-src="/harrison_mcguire_25.jpg" alt="Harrison McGuire" /></a>
    <a href='/harrison_mcguire_34.jpg'><img class='lazy' src="/harrison_mcguire_placeholder_b.jpg" data-src="/harrison_mcguire_34.jpg" alt="Harrison McGuire" /></a>
    <a href='/harrison_mcguire_38.jpg'><img class='lazy' src="/harrison_mcguire_placeholder_b.jpg" data-src="/harrison_mcguire_38.jpg" alt="Harrison McGuire" /></a>
  </div>
</article>
