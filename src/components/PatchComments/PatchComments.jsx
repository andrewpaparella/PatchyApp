import * as patchAPI from '../../utilities/patchnotes-api';
import {Link} from 'react-router-dom';
import { useEffect } from 'react';

export default function PatchComments({comment, patchNotes, setPatchNotes, patch, profileId}){

    async function handleDeleteComment(patchId, commentId){
		await patchAPI.deleteOne(patchId, commentId);
		setPatchNotes(patchNotes.filter(singleComment => singleComment._id !== commentId));
	}

    

    return (
    <div>
        <h2><Link to={{
            pathname:'/profile',
            state: {comment},
        }}
        >{comment.name}</Link></h2>
        <div className='date'>{comment.createdAt}</div>
        <br /><span>{comment.body}</span>
        <br />
        <Link className='btn btn-xs btn-info'
            to={{
                pathname: '/editcomment',
                state: { comment, patch },
            }}
            >
                Edit
            </Link>
        <button className='btn btn-xs btn-danger margin-left-10' onClick={() => handleDeleteComment(patch._id, comment._id)}>
                    DELETE
                </button>
        <hr />
    </div>
    )
}