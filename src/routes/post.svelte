<!-- This file renders each individual blog post for reading. Be sure to update the svelte:head below -->
<script>
    let {
        title,
        excerpt,
        date,
        updated,
        author,
        coverImage,
        coverAlt,
        coverWidth,
        coverHeight,
        children
    } = $props();
</script>


<svelte:head>
    <!-- Be sure to add your image files and un-comment the lines below -->
    <title>{title}</title>
    <meta data-key="description" name="description" content="{excerpt}">
    <meta property="og:type" content="article" />
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <meta property="og:description" content={excerpt} />
    <meta name="twitter:description" content={excerpt} />
    <meta property="og:image" content="{coverImage}" />
    <meta property="og:image:width" content={coverWidth} />
    <meta property="og:image:height" content={coverHeight} />
    <meta name="twitter:image" content="{coverImage}" />
</svelte:head>

<article class="post">
    <!-- You might want to add an alt frontmatter attribute. If not, leaving alt blank here works, too. -->
    <img
            class="cover-image"
            src="{coverImage}"
            alt="{coverAlt}"
            style="aspect-ratio: {coverWidth} / {coverHeight};"
            width={coverWidth}
            height={coverHeight}
    />

    <h1>{ title }</h1>

    <div class="meta">
        <b>Author:</b> {author}
        <br>
        <b>Published:</b> {date}
        <br>
        <b>Updated:</b> {updated}
    </div>

    <!--	<svelte:component this={PostContent} />-->
    <div class="prose max-w-none dark:prose-invert">
        {@render children?.()}
    </div>
</article>

<style lang="css">
    /**	Apparently scss doesn't work here with mdsvex so it needs to be css... **/

    .post {
        color: inherit;
    }
    .post h1 {
        margin-bottom: 1rem;
    }
    .post .meta {
        font-size: 0.8rem;
        margin-bottom: 4rem;
    }
    .post img + h1 {
        margin-top: 1rem;
    }
</style>
