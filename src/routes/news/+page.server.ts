import { error } from '@sveltejs/kit';
import posts from "$lib/ts/posts";

export async function load() {
    const result = Object.keys(posts).map((index) => {
        // @ts-ignore
        const { title, date, updated, author, categories, coverImage, coverAlt, coverWidth, coverHeight, excerpt, cardColor, slug } = posts[index];
        return {
            title,
            date,
            updated,
            author,
            categories,
            coverImage,
            coverAlt,
            coverWidth,
            coverHeight,
            excerpt,
            cardColor,
            slug
        };
    });

    if (result) {
        return {
            posts: result
        };
    }

    throw error(500, `Could not load blog posts`);
}
