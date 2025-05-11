<script>
    import { navItems } from '$lib/config'
    import { isMenuOpen } from '$lib/ts/store';
    import { page } from '$app/state';

    let path = $derived(page.url.pathname)

    function maybeCloseMenu(href) {
        if (href !== page.url.pathname) {
            isMenuOpen.set(false)
        }
    }
</script>

<!-- Contents of this file will be used in the header and the responsive hamburger menu. -->
<nav class="main-nav flex md:hidden bg-primary-50-950" class:open={ $isMenuOpen }>
    <ul>
        {#each navItems as item}
            <li>
                <a
                        href={item.route}
                        onclick={() => maybeCloseMenu(item.route)}
                        class:active={path.startsWith(item.route)}
                        aria-current={path.startsWith(item.route) ? 'page' : false}
                >
                    {item.title}
                </a>
            </li>
        {/each}
    </ul>
</nav>

<style lang="scss">
    .main-nav {
        position: fixed;
        z-index: 5;
        top: 0;
        left: 0;
        transform: translateX(-100vw);
        width: 100%;
        height: 100vh;
        pointer-events: none;
        opacity: 0;
        justify-content: center;
        align-items: center;
        color: var(--rp-text);
        transition: all .25s cubic-bezier(0.785, 0.135, 0.15, 0.86);

        &.open {
            transform: translateX(0);
            opacity: 1;
            pointer-events: unset;

            li {
                opacity: 1;
                animation: slide_in_left .2s cubic-bezier(0.215, 0.610, 0.355, 1) forwards;

                a {
                    color: inherit;
                }

                // Probably shouldn't have more than 8 main nav menu items, but if you do, you can adjust this
                @for $i from 1 through 8 {
                    &:nth-of-type(#{$i}) {
                        animation-delay: 0.15s + $i * 0.05s;
                    }
                }
            }
        }

        ul li {
            font-size: 1.2rem;
            display: block;
            width: 100%;
            text-align: center;
            margin-bottom: calc(.2rem + 2vh);
        }

        @media (min-width: 48rem) {
            opacity: 1;
            transform: none;
            position: unset;
            height: auto;
            width: auto;
            background: unset;
            pointer-events: unset;
            color: inherit;

            ul {
                margin: 1rem auto 0;
                padding-top: 0.5rem;
                border-top: 1px solid var(--rp-highlight-high);
                width: max-content;

                li {
                    font-size: inherit;
                    width: initial;
                    text-align: initial;
                    margin-bottom: 0;
                }
            }
        }
    }
</style>
