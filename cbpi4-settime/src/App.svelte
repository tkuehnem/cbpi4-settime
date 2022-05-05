<script>
	import { onMount } from 'svelte'
	export let name;
	export let nowepoch = Math.floor((new Date).getTime()/1000);
	export let nowtime = new Date().toLocaleString();
	onMount(async () => {
		var d = new Date(0);

		fetch('/settime/get').then(
			res => { 
				res.text().then(text => {
					name=  new Date(text * 1000).toLocaleString();
					})
			    }
			)
	})

	function setTime() {
		fetch('/settime/set/' + Math.floor((new Date).getTime()/1000) )
		next();
	}

	function next() {
		window.location.replace('/cbpi_ui/static/index.html');
	}
</script>

<main>
	<h1>{nowtime}</h1>
	{name}
	<button on:click={setTime}>Set</button>
	<button on:click={next}>Skip</button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>