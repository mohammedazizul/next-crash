import Comments from '@/app/Components/Comments';
import getPost from '@/lib/getPost';
import getPostComment from '@/lib/getPostComment';
import React, { Suspense } from 'react'

export async function generateMetadata({ params }) {

    const { id } = params;
    const post = await getPost(id)

    return {
        title: post.title,
        description: post.body,
    }
}

export default async function page({ params }) {
    const { id } = params;
    const postPromise = await getPost(id)
    const commentPromise = await getPostComment(id)
    
    // const [post, comments] = await Promise.all([postPromise, postCommentPromise])

    const post = await postPromise;

    return (
        <div className='mt-6'>
            <h2 className='mt-6'>{post.title}</h2>
            <p className='mt-6'>{post.body}</p>
            <hr />
            <Suspense fallback="<h1>Loading comments...</h1>">
                <Comments promise={commentPromise}/>
            </Suspense>
            
        </div>
    )
}
