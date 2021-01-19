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
  /* .email-link {
    height: 100px;
    display: grid;
    grid-template-columns: 60px auto;
    align-items: center;
    grid-gap: 20px;
    font-size: 26px;
    margin: auto;
    padding: 20px;
  } */

  img {
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
    <img class='lazy' src='' data-src="/harrison_mcguire_1.jpg" alt="Harrison McGuire" />
    <img class='lazy' src='' data-src="/harrison_mcguire_4.jpg" alt="Harrison McGuire" />
    <img class='lazy' src='' data-src="/harrison_mcguire_22.jpg" alt="Harrison McGuire" />
    <img class='lazy' src='' data-src="/harrison_mcguire_31.jpg" alt="Harrison McGuire" />

    <img class='lazy' src='' data-src="/harrison_mcguire_6.jpg" alt="Harrison McGuire" />
    <img class='lazy' src='' data-src="/harrison_mcguire_8.jpg" alt="Harrison McGuire" />
    <img class='lazy' src='' data-src="/harrison_mcguire_2.jpg" alt="Harrison McGuire" />
    <img class='lazy' src='' data-src="/harrison_mcguire_10.jpg" alt="Harrison McGuire" />

    <img class='lazy' src='' data-src="/harrison_mcguire_11.jpg" alt="Harrison McGuire" />
    <img class='lazy' src='' data-src="/harrison_mcguire_23.jpg" alt="Harrison McGuire" />
    <img class='lazy' src='' data-src="/harrison_mcguire_24.jpg" alt="Harrison McGuire" />
    <img class='lazy' src='' data-src="/harrison_mcguire_18.jpg" alt="Harrison McGuire" />

    <img class='lazy' src='' data-src="/harrison_mcguire_13.jpg" alt="Harrison McGuire" />
    <img class='lazy' src='' data-src="/harrison_mcguire_14.jpg" alt="Harrison McGuire" />
    <img class='lazy' src='' data-src="/harrison_mcguire_15.jpg" alt="Harrison McGuire" />
    <img class='lazy' src='' data-src="/harrison_mcguire_16.jpg" alt="Harrison McGuire" />

    <img class='lazy' src='' data-src="/harrison_mcguire_26.jpg" alt="Harrison McGuire" />
    <img class='lazy' src='' data-src="/harrison_mcguire_29.jpg" alt="Harrison McGuire" />
    <img class='lazy' src='' data-src="/harrison_mcguire_25.jpg" alt="Harrison McGuire" />
    <img class='lazy' src='' data-src="/harrison_mcguire_27.jpg" alt="Harrison McGuire" />

    <img class='lazy' src='' data-src="/harrison_mcguire_7.jpg" alt="Harrison McGuire" />
    <img class='lazy' src='' data-src="/harrison_mcguire_12.jpg" alt="Harrison McGuire" />
    <img class='lazy' src='' data-src="/harrison_mcguire_30.jpg" alt="Harrison McGuire" />
    <img class='lazy' src='' data-src="/harrison_mcguire_9.jpg" alt="Harrison McGuire" />
    
  </div>
</article>
