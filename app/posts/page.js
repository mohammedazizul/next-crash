import getAllPosts from '@/lib/getAllPosts'
import React from 'react'
import Link from 'next/link';

export default async function PostPage() {

    const posts = await getAllPosts();

    return (
        <div className='mt-6'>
            <h1>All posts</h1>
            <ul className="m-10">
                {
                    posts.map(post => (
                    <li key={post.id}>
                        <Link href={`/posts/${post.id}`}>
                            - {post.title}
                        </Link>
                    </li>
                ))
                }
            </ul>
        </div>
    )
}

export async function generateStaticParams() {
    const posts = await getAllPosts();

    return posts.map((post) => ({
        id: post.id.toString(),
    }))
}