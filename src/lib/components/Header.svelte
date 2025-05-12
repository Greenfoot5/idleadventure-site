<script>
    import HamburgerMenuButton from './HamburgerMenuButton.svelte'
    import {navItems, siteTitle} from '$lib/config'
    import MainNav from "$lib/components/MainNav.svelte";
    import {page} from "$app/state";

    let path = $derived(page.url.pathname)
</script>


<header>
    <div class="hidden md:grid grid-rows-2 justify-items-center w-full bg-surface-100-900 py-6">
        <a href="/" class="site-title">
            <h1 class="h1">{siteTitle}</h1>
        </a>

        <div class="flex divide-primary-300-700/60 divide-x-2 md:h6">
            {#each navItems as item}
                    <a class="px-8 my-4 anchor"
                            href={item.route}
                            onclick={() => maybeCloseMenu(item.route)}
                            class:active={path.startsWith(item.route)}
                            aria-current={path.startsWith(item.route) ? 'page' : false}
                    >
                        {item.title}
                    </a>
            {/each}
        </div>
    </div>

    <div class="md:hidden justify-items-center w-full bg-surface-100-900 py-6">
        <h1 class="h1">
            <a href="/" class="site-title">
                {siteTitle}
            </a>
        </h1>
    </div>

    <HamburgerMenuButton />
    <MainNav />

</header>

<style lang="scss">
    header {
        background: var(--rp-overlay);
        color: var(--rp-text);
        display: flex;
        justify-content: space-between;
        align-items: center;

        .site-title {
            font-size: 2.1rem;
            line-height: 1;
            text-align: center;
            margin: 0;
            display: block;
            font-weight: bold;
        }
    }
</style>
