import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import PatchCommentsForm from '../PatchCommentsForm/PatchCommentsForm';
import PatchComments from '../PatchComments/PatchComments';
import * as patchAPI from '../../utilities/patchnotes-api';

function PatchCard({ patch, user, setComments, comments, setPatchNotes, patchNotes }){

	// useEffect(() => {
	// 	history.push('/details')
	// }, [comments, history])

	// <Link
    //         to={{
    //             pathname: '/details',
    //             state: { patch },
    //         }}
    //         />
             
	useEffect(() => {
		async function getPatch(){
			const patch = await patchAPI.getOne(patch._id);
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
                <PatchComments comment={comment} key={comment._id} setPatchNotes={setPatchNotes} patchNotes={patchNotes} patch={patch} user={user} />
					))}
                <PatchCommentsForm user={user} setComments={setComments} comments={comments} patch={patch} />
			</div>
			<div className='panel-footer'>
				<Link to='/patchnotes'>RETURN TO LIST</Link>
			</div>
		</div>
        </>
    )
}

export default PatchCard;