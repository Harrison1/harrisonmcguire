<script>
  export let text = 'title'
</script>

<style>
  h1 {
    /* font-weight: 700; */
    font-size: 34px;
    margin-bottom: 5px;
    padding: 20px 20px 0 20px;
  }

  @media only screen and (min-width: 767px) {
    h1 {
      font-size: 44px;
    }
  }

  @media only screen and (min-width: 1440px) {
    h1 {
      font-size: 60px;
    }
  }
</style>

<h1>{ text }</h1>
