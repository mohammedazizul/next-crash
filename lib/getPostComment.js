export default async function getPostComment(id) {
    const result = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    )

    if (!result.ok) {
        throw new Error("Error, unable to fetch post comment!")
    }

    return result.json();
}