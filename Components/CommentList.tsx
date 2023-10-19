'use client'

import { useState } from 'react'
import Comment from './Comment'

export default function CommentsList() {
    const [comments, setComments] = useState<string[]>([])
    const [newComment, setNewComment] = useState<string>('')

    const handleAddComment = () => {
        const updatedComments = [...comments, newComment]
        setComments(updatedComments)
        setNewComment('')
    }

    return (
        <div className='p-4'>
            <div className='flex mb-4'>
                <input
                    value={newComment}
                    onChange={e => setNewComment(e.target.value)}
                    placeholder='Add a comment...'
                    className='flex-1 p-2 rounded-md border border-gray-300 mr-2'
                />
                <button
                    onClick={handleAddComment}
                    className='bg-green-500 text-white rounded-md px-4 py-2 hover:bg-green-600'
                >
                    Comment
                </button>
            </div>
            <div className='space-y-4'>
                {comments.map((comment, index) => (
                    <Comment key={index} comment={comment} />
                ))}
            </div>
        </div>
    )
}
