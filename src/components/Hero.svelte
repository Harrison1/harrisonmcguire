<style>
	article {
    display: grid;
    align-items: center;
		justify-content: center;
    height: calc(100vh - 12px);
		overflow: auto;
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes fade-in {
    0% {
      opacity: 0;
		}
    100% {
      opacity: 1;
    }
  }

  p {
    margin: 0;
		animation: fade-in 3s ease-in-out;
		-webkit-animation: fade-in 3s ease-in-out;
  }

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0;
	}

	.title {
		text-align: center;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Harrison McGuire</title>
</svelte:head>

<article>
	<header class='title'>
		<h1>Harrison McGuire</h1>
		<p>web | game developer</p>
	</header>
</article>
