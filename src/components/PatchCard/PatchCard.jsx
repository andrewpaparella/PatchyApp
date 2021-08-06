import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import PatchCommentsForm from '../PatchCommentsForm/PatchCommentsForm';
import PatchComments from '../PatchComments/PatchComments';
import * as patchAPI from '../../utilities/patchnotes-api';

function PatchCard({ patch, user, setPatchNotes, patchNotes, handleAddPatchComments, handleDeletePatchComment}){
    const patchId = patch._id
	useEffect(() => {
		async function getPatch(){
			const patch = await patchAPI.getOne(patchId);
			setPatchNotes(patch)
		} getPatch();
    }, [])


    return (
        <>
        <div className='panel panel-default'>
			<div className='panel-heading'>
				<h3 className='panel-title'>{patch.title}</h3>
			</div>
			<div className='panel-body'>
				
					{patch.body}
					<br />
					<span>Comments</span>
					{patch.comments.map(comment => (
                <PatchComments comment={comment} key={comment._id} setPatchNotes={setPatchNotes} patchNotes={patchNotes} patch={patch} user={user} handleDeletePatchComment={handleDeletePatchComment} />
					))}
                <PatchCommentsForm user={user} patch={patch} setPatchNotes={setPatchNotes} handleAddPatchComments={handleAddPatchComments} />
			</div>
			<div className='panel-footer'>
				<Link to='/patchnotes'>RETURN TO LIST</Link>
			</div>
		</div>
        </>
    )
}

export default PatchCard;