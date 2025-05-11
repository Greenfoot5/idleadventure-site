<script>
    import { isMenuOpen } from '$lib/ts/store.js';
    import { XmarkIcon } from '@indaco/svelte-iconoir/xmark';
    import { MenuIcon } from '@indaco/svelte-iconoir/menu';

    const toggleIsMenuOpen = () => {
        isMenuOpen.set(!$isMenuOpen)
    }
</script>

<button
        onclick={toggleIsMenuOpen}
        aria-pressed={$isMenuOpen}
        class="m-0 bg-transparent p-0 border-0 w-8 absolute top-8 right-8 z-30 md:hidden"
        tabindex={($isMenuOpen) ? 0 : -1}
>
    <span class="sr-only">Toggle hamburger menu</span>
    {#if $isMenuOpen}
        <XmarkIcon style="color: var(--rp-text);"/>
    {:else}
        <MenuIcon style="color: var(--rp-text);"/>
    {/if}
</button>
