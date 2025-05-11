// Import the markdown files for each post
const imports = import.meta.glob('/src/routes/news/**/+page.md', {eager: true});

const posts = [];
for (const path in imports) {
    const post = imports[path];
    // Make sure we get the correct slug
    const splitPath = path.replace(/\/$/, "").split("/");
    const slug = splitPath.slice(splitPath.indexOf('news') + 1, splitPath.length - 1).join('/');

    if (post) {
        // For each of them, MDsveX will do the heavy lifting. The "metadata"
        // is automatically recovered from the Frontmatter
        posts.push({
            // @ts-ignore
            ...post.metadata
            , slug:slug});
    }
}

// Filter the post and order them by published date
const filteredPosts = posts
    .filter((post) => !post.hidden)
    .sort((a, b) =>
        new Date(a.date).getTime() > new Date(b.date).getTime()
            ? -1
            : new Date(a.date).getTime() < new Date(b.date).getTime()
                ? 1
                : 0
    );

// Expose this info to other files
export default filteredPosts;
