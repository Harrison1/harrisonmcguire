<script>
  import { onMount } from 'svelte'
  import { goto } from '@sapper/app'

  onMount(() => {
    const path = window.location.pathname.slice(1)
    switch (path) {
      case 'about':
      case 'contact':
      case 'gallery':
      case 'tech':
      case 'videos':
        goto(path)
        break
    }
  })
</script>

<h1>404</h1>
