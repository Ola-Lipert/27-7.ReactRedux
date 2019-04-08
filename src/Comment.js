import React from 'react';
import { thumbDownComment } from './actions';
import{ thumbUpComment } from './actions';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment}) => 
    <li>
        <h2 className="comments">{text}</h2> 
        <p className="votes">votes: {votes}</p> 
        <button onClick={() => thumbUpComment(id)}>Thumb up</button>
        <button onClick={() => thumbDownComment(id)}>Thumb down</button>
    </li>;

export default Comment;