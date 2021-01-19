<script>
  import Node from './icons/Node.svelte'
  import SectionTitle from './SectionTitle.svelte'
</script>

<style>
  article {
    max-width: 1440px;
  }

  p {
    font-size: 20px;
    font-weight: 300;
    margin-top: 20px;
    text-align: justify;
  }

  .tech-container {
    padding: 0 20px 20px 20px;
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
    p {
      font-size: 30px;
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

  @media only screen and (min-width: 1440px) {
    p {
      font-size: 40px;
    }
  }
</style>

<article>
  <SectionTitle text='Tech i Like' />
  <div class='icon-container'>
    <div class='grid-content'>
      <a href="https://www.javascript.com/"><img src="/js.png" alt="JavaScript"></a>
      <a href="https://www.unrealengine.com/en-US/"><img src="/ue.png" alt="Unreal Engine"></a>
      <a href="https://reactjs.org/"><img src="/react.png" alt="React"></a>
      <a href="https://www.gatsbyjs.com/"><img src="/gatsby.png" alt="Gatsby"></a>
      <a href="https://svelte.dev/"><img src="/svelte.png" alt="Svelte"></a>
      <a href="https://nodejs.org/en/"><Node /></a>
      <a href="https://unity.com/"><img src="/unity.png" alt="Unity"></a>
    </div>
  </div>

  <div class='tech-container'>
    <p>Most days I spend working in JavaScript. The verstalite language is a ton of fun of fun to make apps with and it scales all across platforms. I typically write server code in Node.js and have since started deploying all my server code to serverless environments. React is the framework I typically reach for while building apps on the front end. I love both GatsbyJS and Next.JS, they’re both wonderful tools that assist development. This site was made with Svelte and Sapper and the Svelte framework gets me extremely excited to start building bigger apps with Svelte.</p>

    <p>For game development I always reach for Unreal. Out of the box Unreal provides an insane amount of content and lighting that can assist in building excellent games. Making games is still challenging and it still makes me want to throw my computer out of the window, but I mean I still love the medium.</p>
  </div>
</article>

