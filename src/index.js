import React from 'react';
import ReactDOM from 'react-dom';

import faker from 'faker';

import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45PM"
        avatarImage={faker.image.avatar()}
        commentText={faker.lorem.lines(2)}
      />
      <CommentDetail
        author="Alex"
        timeAgo="Today at 2:00AM"
        avatarImage={faker.image.avatar()}
        commentText={faker.lorem.lines(2)}
      />
      <CommentDetail
        author="Jane"
        timeAgo="Yesterday at 5:00AM"
        avatarImage={faker.image.avatar()}
        commentText={faker.lorem.lines(2)}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
