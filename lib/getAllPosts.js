export default async function getAllPosts() {
    const result = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10",
        {
            // cache: "force-cache" // default using cache after first load
            // cache: "no-store"    // no cache
            next: {
                revalidate: 10 // refresh after 10 seconds
            }
        }
    )

    return result.json();
}