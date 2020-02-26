import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
    faker.locale = "en";

    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author={faker.name.firstName()} timeAgo="Yesterday 06:34PM" content="Nice blog post" avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author={faker.name.firstName()} timeAgo="Yesterday 04:34PM" content="Like the subject" avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author={faker.name.firstName()} timeAgo="Today 02:34AM" content="Good one" avatar={faker.image.avatar()} />
            </ApprovalCard >
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));