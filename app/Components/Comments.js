import React from 'react'

export default async function Comments({promise}) {
    const comments = await promise;

    return (
        <div className='mt-6'>
            <h1 className='mt-6'>Comments</h1>
            <ul>
                {
                    comments.map(comment => (
                        <li className='mt-6' key={comment.id}>{comment.body}</li>
                    ))
                }
            </ul>
        </div>
    )
}
