'use client'
import { useState } from 'react'

interface CommentProps {
    comment: string
}

export default function Comment({ comment }: CommentProps) {
    const [replies, setReplies] = useState<string[]>([])
    const [newReply, setNewReply] = useState<string>('')

    const handleReply = () => {
        const updatedReplies = [...replies, newReply]
        setReplies(updatedReplies)
        setNewReply('')
    }

    return (
        <div className='bg-gray-100 p-4 rounded-md my-2'>
            <p className='text-gray-700'>{comment}</p>
            <div className='flex mt-2'>
                <input
                    value={newReply}
                    onChange={e => setNewReply(e.target.value)}
                    placeholder='Add a reply...'
                    className='flex-1 p-2 rounded-md border border-gray-300 mr-2'
                />
                <button
                    onClick={handleReply}
                    className='bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600'
                >
                    Reply
                </button>
            </div>
            <div className='ml-4 mt-2'>
                {replies.map((reply, index) => (
                    <Comment key={index} comment={reply} />
                ))}
            </div>
        </div>
    )
}
