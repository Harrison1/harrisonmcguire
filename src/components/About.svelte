<script>	
  import SectionTitle from "./SectionTitle.svelte"
</script>

<style>
  article {
    max-width: 1440px;
  }

  div {
    padding: 0 20px 20px 20px;
  }

  p {
    font-size: 20px;
    font-weight: 300;
    margin-top: 20px;
    text-align: justify;
  }

  @media only screen and (min-width: 767px) {
    article {
      padding: 10px;
    }

    div {
      padding: 20px;
    }

    p {
      font-size: 30px;
    }
  }

  @media only screen and (min-width: 1440px) {
    p {
      font-size: 40px;
    }
  }
</style>

<article>
  <SectionTitle text='About' />
  <div>
    <p>Hi, I'm Harrison McGuire and I am a web, app, and game developer. My mission is to enrich the user experience with attention to detail and beautiful design. I excel in making modern, performant apps. I dedicate most of my time to JavaScript and Unreal.</p>
    <p>Gaming is definitely my biggest passion. I spend a lot of my spare time developing games in Unreal. My goal for 2021+ is to enter more game jams and continue publishing projects to my <a href="https://harrison1.itch.io/">itchio page</a>. Making games is a beast though, to publish a solid game from start to finish can definitely be a challenge, but I need to start completing more games and stop having half baked games living on my hard drive.</p>
    <p>JavaScript is crazy fun. I love the front-end. React is a dope framework that I love working with, but recently I've been trying to break out of my comfort zone to test new frameworks. Like for example this site is made with Svelte and Sapper. Svelte has a lot of great things going for it and I look forward to making a full web app with the framework.</p>
  </div>
</article>
