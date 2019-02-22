import React from 'react'
import ReactDom from 'react-dom'
import CommentDetail from './CommentDetail'
import faker from 'faker'
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <h4>Warning!</h4>
                <div>
                    Are you sure want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="sam"
                    timeAgo="Today at 4:33"
                    content="Nice blog post"
                    avatar={faker.image.avatar()} />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="sam"
                    timeAgo="Today at 4:33"
                    content="Nice blog post"
                    avatar={faker.image.avatar()} />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="sam"
                    timeAgo="Today at 4:33"
                    content="Nice blog post"
                    avatar={faker.image.avatar()} />
            </ApprovalCard>                        
        </div>
    )
}

ReactDom.render(
    <App/>, document.querySelector('#root'));