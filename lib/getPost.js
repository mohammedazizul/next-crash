export default async function getPost(id) {
    const result = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    )

    if (!result.ok) {
        throw new Error("Error, unable to fetch post!")
    }

    return result.json();
}