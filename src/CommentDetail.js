import React from 'react'
import faker from 'faker'

const CommentDetail = () => {
  return (
    <div>
        <div className="comment">
            <a href="/" className="avatar">
                <img
                    src={faker
                    .image
                    .avatar()}
                    alt="avatar"/>
            </a>
            <div className="content">
                <a href="/" className="author">
                    Sam
                </a>
                <div className="metadata">
                    <span className="date">Today at 6:00</span>
                </div>
                <div className="text">
                    Nice blog Post!
                </div>
            </div>
        </div>      
    </div>
  )
}

export default CommentDetail
