<script>
    let { data } = $props();
    let { posts } = data;

    const defaultCardColor = "surface";
</script>


<ul>
    {#each posts as post}
        <li class="card p-4 m-4 preset-filled-{post.cardColor ? post.cardColor : defaultCardColor}-500">
            <a href="/news/{post.slug}" class="grid grid-cols-3 space-x-8">
                {#if post.coverImage}
                    <header class="col-span-1 justify-items-center grid">
                        <img
                                src="{post.coverImage}"
                                alt={post.coverAlt}
                                width={post.coverWidth}
                                height={post.coverHeight}
                                style="ratio: {post.coverWidth} / {post.coverHeight}"
                        />
                    </header>
                    <article class="col-span-2">
                        <h2 class="h2">
                            {post.title}
                        </h2>

                        <div class="meta">
                            <b>Author:</b> {post.author}
                            <b>Date: </b> {new Date(post.date).toLocaleDateString()}
                        </div>

                        <p class="opacity-60">{post.excerpt}</p>
                    </article>
                {:else}
                    <article class="col-span-3">
                        <h2 class="h2">
                            {post.title}
                        </h2>

                        <div class="meta space-x-8">
                            <span><b>Author:</b> {post.author}</span>
                            <span><b>Date: </b> {new Date(post.date).toLocaleDateString()}</span>
                        </div>

                        <p class="opacity-80">{post.excerpt}</p>
                    </article>
                {/if}
            </a>
        </li>
    {/each}
</ul>

<p class="hidden preset-filled-primary-500 preset-filled-secondary-500 preset-filled-tertiary-500
preset-filled-success-500 preset-filled-warning-500 preset-filled-error-500 preset-filled-surface-500">Hello there!</p>
