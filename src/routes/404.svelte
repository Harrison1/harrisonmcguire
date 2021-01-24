<script>
  import { onMount } from 'svelte'
  import { goto } from '@sapper/app'

  onMount(() => {
    const path = window.location.pathname.slice(1)
    localStorage.removeItem('path');
    switch (path) {
      case 'about':
      case 'contact':
      case 'gallery':
      case 'tech':
      case 'videos':
        localStorage.setItem('path', path)
        goto('/')
        break
    }
  })
</script>

<h1>404</h1>
