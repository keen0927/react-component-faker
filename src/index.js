import React from 'react'
import ReactDom from 'react-dom'
import CommentDetail from './CommentDetail'
import faker from 'faker'

const App = () => {
    return (
        <div className="ui container comments">
            
            <CommentDetail author="sam" timeAgo="Today at 4:33" content="Nice blog post" avatar={faker.image.avatar()} />
            <CommentDetail author="Keen" timeAgo="Today at 2:22" content="I like the subject" avatar={faker.image.avatar()} />
            <CommentDetail author="jane" timeAgo="Yesterday at 5:11" content="I Like this" avatar={faker.image.avatar()} />
        </div>
    )
}

ReactDom.render(
    <App/>, document.querySelector('#root'));