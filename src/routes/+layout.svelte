<script lang="ts">
	import '../app.css';
    import Header from "$lib/components/Header.svelte";

	let { children } = $props();
</script>

<Header />

<main class="mx-4 md:mx-40 my-10">
    {@render children()}
</main>
