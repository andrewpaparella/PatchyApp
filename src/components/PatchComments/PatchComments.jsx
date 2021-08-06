import * as patchAPI from '../../utilities/patchnotes-api';
import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function PatchComments({comment, patchNotes, setPatchNotes, patch, profileId, handleDeletePatchComment}){

    const patchId = patch._id
	useEffect(() => {
		async function getPatch(){
			const patch = await patchAPI.getOne(patchId);
			setPatchNotes(patch)
		} getPatch();
    }, [])

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
        <button className='btn btn-xs btn-danger margin-left-10' onClick={() => handleDeletePatchComment(patch._id, comment._id)}>
                    DELETE
                </button>
        <hr />
    </div>
    )
}