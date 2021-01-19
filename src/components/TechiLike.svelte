<script>
  import { onMount } from 'svelte'
  import Node from './icons/Node.svelte'
  import SectionTitle from './SectionTitle.svelte'

  let display = false

  onMount(() => {
    const myIcons = document.querySelector('.icon-container');

    function handleIntersection(entries) {
      entries.map(entry => {
        if (entry.isIntersecting) {
          display = true
          observer.unobserve(entry.target);
        }
      });
    }

    const observer = new IntersectionObserver(handleIntersection)

    observer.observe(myIcons);
  })
</script>

<style>
  article {
    max-width: 1440px;
  }

  .icon-container {
    background: #fff;
    border-radius: 10px;
    padding: 20px 40px;
    margin: 0 20px;
  }

  .grid-content {
    display: grid;
    grid-template-columns: repeat(2, 120px);
    align-items: center;
    justify-content: space-between;
    grid-gap: 20px;
  }

  img {
    width: 100%;
  }

  a {
    transition: filter 0.5s ease;
  }

  a:hover {
    filter: drop-shadow(12px 12px 14px green) invert(100%);
  }

  @media only screen and (min-width: 500px) {
    .grid-content {
      grid-template-columns: repeat(3, 120px);
    }
  }

  @media only screen and (min-width: 767px) {
    article {
      /* margin-bottom: var(--spacer); */
      /* padding: 10px */
    }

    .grid-content {
      grid-template-columns: repeat(4, 120px);
    }
  }

  @media only screen and (min-width: 1100px) {
    .grid-content {
      grid-template-columns: repeat(7, 120px);
    }
  }
</style>

<article>
  <SectionTitle text='Tech i Like' />
  <div class='icon-container'>
    <div class='grid-content'>
      {#if display}
        <a href="https://www.javascript.com/"><img src="/js.png" alt="JavaScript"></a>
        <a href="https://www.unrealengine.com/en-US/"><img src="/ue.png" alt="Unreal Engine"></a>
        <a href="https://reactjs.org/"><img src="/react.png" alt="React"></a>
        <a href="https://www.gatsbyjs.com/"><img src="/gatsby.png" alt="Gatsby"></a>
        <a href="https://svelte.dev/"><img src="/svelte.png" alt="Svelte"></a>
        <a href="https://nodejs.org/en/"><Node /></a>
        <a href="https://unity.com/"><img src="/unity.png" alt="Unity"></a>
      {/if}
    </div>
  </div>
</article>

